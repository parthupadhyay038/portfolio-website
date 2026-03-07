"""
Snake Game - A classic snake game built with Pygame
Author: Parth Upadhyay
Description: Navigate the snake to eat food and grow longer while avoiding walls and yourself
"""

import pygame
import random
import sys
from enum import Enum
from typing import List, Tuple

# Initialize Pygame
pygame.init()

# Constants
WINDOW_WIDTH = 800
WINDOW_HEIGHT = 600
GRID_SIZE = 20
GRID_WIDTH = WINDOW_WIDTH // GRID_SIZE
GRID_HEIGHT = WINDOW_HEIGHT // GRID_SIZE

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (200, 16, 46)
GREEN = (34, 177, 76)
LIGHT_GREEN = (102, 204, 102)
YELLOW = (255, 255, 0)
GRAY = (128, 128, 128)
DARK_GRAY = (64, 64, 64)
BLUE = (0, 100, 255)

class Direction(Enum):
    """Enum for snake movement directions"""
    UP = (0, -1)
    DOWN = (0, 1)
    LEFT = (-1, 0)
    RIGHT = (1, 0)

class SnakeGame:
    """Main Snake Game class"""
    
    def __init__(self):
        """Initialize the game"""
        self.screen = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
        pygame.display.set_caption("🐍 Snake Game - Parth Upadhyay")
        
        self.clock = pygame.time.Clock()
        self.font_large = pygame.font.Font(None, 48)
        self.font_medium = pygame.font.Font(None, 32)
        self.font_small = pygame.font.Font(None, 24)
        
        self.reset_game()
        
    def reset_game(self):
        """Reset game state"""
        self.snake: List[Tuple[int, int]] = [(GRID_WIDTH // 2, GRID_HEIGHT // 2)]
        self.direction = Direction.RIGHT
        self.next_direction = Direction.RIGHT
        self.food = self.spawn_food()
        self.score = 0
        self.game_over = False
        self.speed = 8
        self.paused = False
        
    def spawn_food(self) -> Tuple[int, int]:
        """Spawn food at random location"""
        while True:
            x = random.randint(0, GRID_WIDTH - 1)
            y = random.randint(0, GRID_HEIGHT - 1)
            if (x, y) not in self.snake:
                return (x, y)
    
    def handle_events(self):
        """Handle user input and events"""
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return False
            
            if event.type == pygame.KEYDOWN:
                # Direction controls
                if event.key in (pygame.K_UP, pygame.K_w):
                    if self.direction != Direction.DOWN:
                        self.next_direction = Direction.UP
                elif event.key in (pygame.K_DOWN, pygame.K_s):
                    if self.direction != Direction.UP:
                        self.next_direction = Direction.DOWN
                elif event.key in (pygame.K_LEFT, pygame.K_a):
                    if self.direction != Direction.RIGHT:
                        self.next_direction = Direction.LEFT
                elif event.key in (pygame.K_RIGHT, pygame.K_d):
                    if self.direction != Direction.LEFT:
                        self.next_direction = Direction.RIGHT
                
                # Game controls
                elif event.key == pygame.K_SPACE:
                    self.paused = not self.paused
                elif event.key == pygame.K_r:
                    self.reset_game()
                elif event.key == pygame.K_ESCAPE:
                    return False
        
        return True
    
    def update(self):
        """Update game logic"""
        if self.game_over or self.paused:
            return
        
        self.direction = self.next_direction
        
        # Calculate new head position
        head_x, head_y = self.snake[0]
        dir_x, dir_y = self.direction.value
        new_head = (head_x + dir_x, new_head_y := head_y + dir_y)
        
        # Check wall collision
        if not (0 <= new_head[0] < GRID_WIDTH and 0 <= new_head[1] < GRID_HEIGHT):
            self.game_over = True
            return
        
        # Check self collision
        if new_head in self.snake:
            self.game_over = True
            return
        
        # Add new head
        self.snake.insert(0, new_head)
        
        # Check food collision
        if new_head == self.food:
            self.score += 10
            self.speed = min(15, 8 + self.score // 50)
            self.food = self.spawn_food()
        else:
            # Remove tail if no food eaten
            self.snake.pop()
    
    def draw(self):
        """Draw game elements"""
        self.screen.fill(BLACK)
        
        # Draw grid
        for x in range(0, WINDOW_WIDTH, GRID_SIZE):
            pygame.draw.line(self.screen, DARK_GRAY, (x, 0), (x, WINDOW_HEIGHT), 1)
        for y in range(0, WINDOW_HEIGHT, GRID_SIZE):
            pygame.draw.line(self.screen, DARK_GRAY, (0, y), (WINDOW_WIDTH, y), 1)
        
        # Draw snake
        for i, (x, y) in enumerate(self.snake):
            rect = pygame.Rect(x * GRID_SIZE + 2, y * GRID_SIZE + 2, 
                              GRID_SIZE - 4, GRID_SIZE - 4)
            if i == 0:
                # Head with gradient effect
                pygame.draw.rect(self.screen, LIGHT_GREEN, rect)
                pygame.draw.rect(self.screen, GREEN, rect, 2)
            else:
                # Body
                pygame.draw.rect(self.screen, GREEN, rect)
        
        # Draw food
        food_rect = pygame.Rect(self.food[0] * GRID_SIZE + 2, 
                               self.food[1] * GRID_SIZE + 2,
                               GRID_SIZE - 4, GRID_SIZE - 4)
        pygame.draw.rect(self.screen, RED, food_rect)
        pygame.draw.circle(self.screen, YELLOW, 
                          (self.food[0] * GRID_SIZE + GRID_SIZE // 2,
                           self.food[1] * GRID_SIZE + GRID_SIZE // 2), 3)
        
        # Draw UI
        self.draw_ui()
        
        # Draw game over screen
        if self.game_over:
            self.draw_game_over()
        
        # Draw paused screen
        if self.paused:
            self.draw_paused()
        
        pygame.display.flip()
    
    def draw_ui(self):
        """Draw UI elements"""
        # Score
        score_text = self.font_medium.render(f"Score: {self.score}", True, YELLOW)
        self.screen.blit(score_text, (10, 10))
        
        # Length
        length_text = self.font_small.render(f"Length: {len(self.snake)}", True, WHITE)
        self.screen.blit(length_text, (10, 50))
        
        # Speed
        speed_text = self.font_small.render(f"Speed: {self.speed}", True, BLUE)
        self.screen.blit(speed_text, (10, 80))
        
        # Controls hint
        controls_text = self.font_small.render("WASD/Arrows: Move | Space: Pause | R: Restart | Esc: Quit", True, GRAY)
        self.screen.blit(controls_text, (10, WINDOW_HEIGHT - 30))
    
    def draw_game_over(self):
        """Draw game over screen"""
        # Semi-transparent overlay
        overlay = pygame.Surface((WINDOW_WIDTH, WINDOW_HEIGHT))
        overlay.set_alpha(200)
        overlay.fill(BLACK)
        self.screen.blit(overlay, (0, 0))
        
        # Game Over text
        game_over_text = self.font_large.render("GAME OVER!", True, RED)
        game_over_rect = game_over_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 - 60))
        self.screen.blit(game_over_text, game_over_rect)
        
        # Final score
        final_score_text = self.font_medium.render(f"Final Score: {self.score}", True, YELLOW)
        final_score_rect = final_score_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 + 20))
        self.screen.blit(final_score_text, final_score_rect)
        
        # Final length
        length_text = self.font_small.render(f"Final Length: {len(self.snake)}", True, WHITE)
        length_rect = length_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 + 70))
        self.screen.blit(length_text, length_rect)
        
        # Restart hint
        restart_text = self.font_small.render("Press R to Restart or Esc to Quit", True, BLUE)
        restart_rect = restart_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 + 130))
        self.screen.blit(restart_text, restart_rect)
    
    def draw_paused(self):
        """Draw paused screen"""
        # Semi-transparent overlay
        overlay = pygame.Surface((WINDOW_WIDTH, WINDOW_HEIGHT))
        overlay.set_alpha(150)
        overlay.fill(BLACK)
        self.screen.blit(overlay, (0, 0))
        
        # Paused text
        paused_text = self.font_large.render("PAUSED", True, BLUE)
        paused_rect = paused_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 - 30))
        self.screen.blit(paused_text, paused_rect)
        
        # Resume hint
        resume_text = self.font_small.render("Press Space to Resume", True, WHITE)
        resume_rect = resume_text.get_rect(center=(WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 + 50))
        self.screen.blit(resume_text, resume_rect)
    
    def run(self):
        """Main game loop"""
        running = True
        
        while running:
            running = self.handle_events()
            self.update()
            self.draw()
            self.clock.tick(self.speed)
        
        pygame.quit()
        sys.exit()

def main():
    """Main entry point"""
    game = SnakeGame()
    game.run()

if __name__ == "__main__":
    main()
