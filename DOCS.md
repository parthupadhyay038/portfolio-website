# Portfolio + Tic Tac Toe App - Complete Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Component Structure](#component-structure)
5. [How It Works](#how-it-works)
6. [Getting Started](#getting-started)
7. [Deployment](#deployment)

---

## 🎯 Project Overview

This is a **Full Stack Developer Portfolio** combined with **Interactive Games** (Tic Tac Toe & Python Snake). It showcases modern web development practices with:

- **Modern UI/UX**: Smooth animations and interactive elements
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Production-Ready**: Type-safe TypeScript, optimized build, and deployment-ready
- **Gaming Collection**: 
  - 🎯 **Tic Tac Toe**: AI-powered game with Minimax algorithm (browser-based)
  - 🐍 **Snake Game**: Classic gameplay with Python & Pygame (desktop application)
- **Portfolio Sections**: Hero, Tech Stack, Projects, Architecture, Terminal, Games, GitHub Activity, Contact

---

## 🛠️ Technology Stack

### Frontend Framework
```
React 18.3.1
├─ TypeScript 4.0.0 (Type Safety)
├─ Vite 7.3.1 (Build Tool)
├─ Tailwind CSS 3.4.19 (Styling)
├─ Framer Motion 4.0+ (Animations)
├─ lucide-react (Icons)
└─ PostCSS 8.5.6 (CSS Processing)
```

### Build & Development
- **Bundler**: Vite (Lightning-fast development server with HMR)
- **Package Manager**: npm 11.8.0
- **Node Version**: 24.13.1 (locked via `.nvmrc`)
- **TypeScript Config**: Strict mode with React JSX support
- **Linting**: ESLint compatible structure

### Deployment
- **Platform**: Vercel
- **Configuration**: `vercel.json` with build optimization
- **Build Command**: `npm run build`
- **Dev Server Port**: 3002 (accessible at `http://localhost:3002`)

---

## 🏗️ Project Architecture

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser (Client)                     │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              React Application (App.tsx)            │  │
│  │                                                      │  │
│  │  ┌─────────────┐          ┌──────────────┐         │  │
│  │  │ Mode Switch │─────────→│ Portfolio or │         │  │
│  │  │  (UI)       │          │ Tic Tac Toe  │         │  │
│  │  └─────────────┘          └──────────────┘         │  │
│  │                                                      │  │
│  │  ┌─────────────────────────────────┐               │  │
│  │  │   Portfolio Component            │               │  │
│  │  ├─────────────────────────────────┤               │  │
│  │  │ • Hero (Landing Section)        │               │  │
│  │  │ • TechStack (Skills)            │               │  │
│  │  │ • Projects (Portfolio Pieces)   │               │  │
│  │  │ • Architecture (System Design)  │               │  │
│  │  │ • Terminal (Interactive CLI)    │               │  │
│  │  │ • GitHubActivity (Stats)        │               │  │
│  │  │ • Contact (Social Links)        │               │  │
│  │  └─────────────────────────────────┘               │  │
│  │                                                      │  │
│  │  ┌─────────────────────────────────┐               │  │
│  │  │  Tic Tac Toe Game               │               │  │
│  │  ├─────────────────────────────────┤               │  │
│  │  │ • Welcome (Mode Selection)      │               │  │
│  │  │ • TicTacToe (Game Logic)        │               │  │
│  │  │   - Single Player (AI Bot)      │               │  │
│  │  │   - Multi Player                │               │  │
│  │  └─────────────────────────────────┘               │  │
│  │                                                      │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Framer Motion Animation Engine               │  │
│  │    (Handles all motion & interactive effects)        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │          Tailwind CSS Styling Engine                 │  │
│  │    (Responsive, Dark Theme, Utility Classes)         │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                           ↓
                    Built & Deployed
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                      Vercel Servers                         │
│              (Automatic deployment & hosting)              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Component Structure

### Directory Layout

```
src/
├── components/
│   ├── GameLauncher.tsx               # Game selection interface
│   ├── Welcome.tsx                    # Tic Tac Toe mode selection
│   ├── TicTacToe.tsx                  # Game logic & UI
│   └── Portfolio/
│       ├── Portfolio.tsx              # Main portfolio container
│       ├── Hero.tsx                   # Landing/intro section
│       ├── TechStack.tsx              # Skills & technologies
│       ├── Projects.tsx               # Featured projects showcase
│       ├── Architecture.tsx           # System architecture diagram
│       ├── Terminal.tsx               # Interactive terminal CLI
│       ├── Games.tsx                  # Games showcase section
│       ├── GitHubActivity.tsx         # GitHub stats & activity
│       └── Contact.tsx                # Contact & social links
├── App.tsx                            # Main app with mode switcher
├── main.tsx                           # React DOM entry point
└── index.css                          # Global Tailwind styles

games/
├── snake_game.py                      # Main Snake game (Python/Pygame)
├── launcher.py                        # Game menu system (Python)
├── launcher.bat                       # Windows quick-start launcher
├── setup.bat                          # Pygame auto-installer
└── README.md                          # Games documentation
```

---

## 🔄 How It Works - Component Data Flow

### Main Application Flow

```
App.tsx (Root Component)
├── Mode: 'portfolio'
│   └── Portfolio Component
│       ├── Navigation + Mode Switcher
│       ├── Hero, TechStack, Projects
│       ├── Architecture, Terminal, Games
│       ├── GitHubActivity, Contact
│       └── handlePlayGame Callback
│           ├── Tic Tac Toe → setAppMode('game'), setGameMode('welcome')
│           └── Snake → setAppMode('game'), setGameMode('launcher')
│
└── Mode: 'game'
    └── GameLauncher (Initial Game Selection)
        ├── Tic Tac Toe Card
        │   └── onClick → Welcome (Mode Selection)
        │       ├── Single Player → TicTacToe (AI mode)
        │       └── Multiplayer → TicTacToe (Multi mode)
        └── Snake Card
            └── onClick → Opens GitHub with instructions
                (User downloads and runs locally)
```

### Portfolio Component Hierarchy

```
Portfolio (Main Container)
├── Navigation Bar
│   └── Mode switcher + Links
├── Hero
│   ├── Animated background elements
│   ├── Main heading (gradient text)
│   ├── CTA Buttons (GitHub, Projects, Resume)
│   └── Scroll indicator animation
├── TechStack
│   ├── Container with staggered animations
│   ├── Frontend Technologies (React, TypeScript, etc.)
│   ├── Backend Technologies (Python, Django, etc.)
│   └── Tools & DevOps (Git, GitHub, Vercel, etc.)
├── Projects
│   ├── Project Grid (4 featured projects)
│   └── Each Card with Name, Tech, Links & Modal
├── Architecture
│   ├── 3-Layer System Diagram
│   │   ├── Frontend Layer
│   │   ├── API Layer
│   │   └── Database Layer
│   └── Animated data flow arrows
├── Terminal
│   ├── Interactive CLI Interface
│   ├── Commands: help, projects, skills, about, contact, clear
│   ├── Command history with auto-scroll
│   └── Quick command buttons
├── Games
│   ├── Tic Tac Toe Showcase Card
│   │   ├── Features list
│   │   ├── Tech stack
│   │   └── "Play Now" button
│   ├── Snake Game Showcase Card
│   │   ├── Features list
│   │   ├── Tech stack
│   │   └── "View Instructions" button
│   └── "How to Play" detailed guide
├── GitHubActivity
│   ├── Stats Grid (Repos, Stars, Forks, Contributions)
│   ├── Weekly Activity Chart (Bar chart)
│   ├── Recent Projects List
│   └── "View More" CTA
└── Contact
    ├── Contact Information Cards
    ├── Social Links
    └── Email CTA Button

Footer
└── Copyright, social links, tech stack mention
```

### Tic Tac Toe Component Hierarchy

```
App (Mode: 'game', GameMode: 'launcher')
├── GameLauncher ← NEW UNIFIED LAUNCHER
│   ├── Tic Tac Toe Card
│   ├── Snake Game Card
│   └── Instructions & Tips
│
└── Welcome (when Tic Tac Toe selected)
    ├── Title "Tic Tac Toe 🎯"
    ├── Play vs Bot Button
    ├── Multiplayer Button
    └── Game Mode Selection Header
        └── TicTacToe Component (Game Active)
            ├── Game Board (3x3 grid)
            ├── Game Status (Turn indicator)
            ├── AI Bot Logic (if Single Player)
            │   └── Minimax Algorithm for optimal moves
            ├── Reset Button
            └── Back Button (returns to GameLauncher)
```

---

## 🎨 Animation Patterns Used

### 1. **Container & Item Variants** (Staggered Animation)
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,      // Delay between children
      delayChildren: 0.3,        // Initial delay
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Usage:
<motion.div variants={containerVariants} initial="hidden" whileInView="visible">
  {items.map(item => (
    <motion.div variants={itemVariants}>{item}</motion.div>
  ))}
</motion.div>
```

### 2. **Hover Effects**
```typescript
// Scale on hover
whileHover={{ scale: 1.05, y: -5 }}

// Color transitions
hover:from-blue-600 hover:to-purple-600

// Shadow effects
hover:shadow-lg hover:shadow-blue-500/50
```

### 3. **Page Scroll Reveal** (`whileInView`)
```typescript
// Reveals when element comes into viewport
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}  // Animate only once
```

### 4. **SVG Arc Animations** (Architecture diagram)
```typescript
// Animate arrow drawing
<motion.path
  initial={{ pathLength: 0, opacity: 0 }}
  whileInView={{ pathLength: 1, opacity: 1 }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
/>
```

---

## 🚀 Getting Started

### 1. **Prerequisites**
- Node.js 24.13.1+ (or use `nvm` to install from `.nvmrc`)
- npm 11.8.0+

### 2. **Installation**
```bash
# Clone the repository
git clone https://github.com/parthupadhyay038/portfolio-website.git
cd my-app-1

# Install dependencies
npm install

# Or manually install key packages if needed:
npm install react@18 react-dom@18 typescript vite tailwindcss framer-motion lucide-react
```

### 3. **Development Server**
```bash
npm run dev
# Opens on http://localhost:3002
```

### 4. **Build for Production**
```bash
npm run build
# Output in dist/ folder
```

### 5. **Type Checking**
```bash
npm run type-check
# Validates TypeScript without building
```

---

## 🔧 Key Configuration Files

### `vite.config.ts`
```typescript
// Configures Vite build tool
// - React plugin for JSX transformation
// - Development server port: 3002
// - Hot Module Replacement (HMR) enabled
```

### `tailwind.config.js`
```javascript
// Tailwind CSS configuration
// - Content paths for scanning components
// - Custom animations (bounce, float, slide)
// - Dark theme support
// - Plugin for delay utilities
```

### `tsconfig.json`
```json
// TypeScript configuration
// - Strict mode for type safety
// - React JSX support
// - ES2020 target for modern features
// - Module resolution for imports
```

### `vercel.json`
```json
// Vercel deployment configuration
// - Build command: npm run build
// - Output directory: dist
// - Environment variables configuration
// - Frame size optimization for Vercel
```

---

## 📊 Data Flow Diagram

### Animation State Management

```
User Interaction (Click/Scroll)
           ↓
    React Event Handler
           ↓
    Update Component State
           ↓
    Framer Motion Detects Change
           ↓
    Animation Triggers (variants)
           ↓
    CSS Transform Applied
           ↓
    Browser Renders Frame
           ↓
    Visual Update (Smooth 60fps)
```

### Terminal Command Processing

```
User Types Command (e.g., "skills")
           ↓
    Command Input Handler
           ↓
    Validate Command Exists
           ↓
    Set isLoading = true
           ↓
    Wait 300ms (UX delay)
           ↓
    Get Command Output
           ↓
    Add to Lines Array
           ↓
    Auto-scroll Terminal
           ↓
    Set isLoading = false
           ↓
    Display Output
```

### Game AI Decision Flow

```
Player Makes Move
           ↓
    Update Board State
           ↓
    Check Win Condition
           ↓
    If AI Turn:
      ├─ Run Minimax Algorithm
      ├─ Evaluate All Possible Moves
      ├─ Score Each Move (-1, 0, +1)
      ├─ Select Best Move
      └─ Make Move
           ↓
    Update Display
           ↓
    Check Game Over
```

---

## 🎯 Feature Breakdown

### **Game Launcher** ⭐ NEW
- **Unified Game Selection Interface**: Beautiful dual-card interface for game selection
- **Tic Tac Toe Card**: Shows features, tech stack, and AI difficulty info
- **Snake Game Card**: Displays setup instructions and gameplay features  
- **Interactive Cards**: Hover animations with gradient overlays and glow effects
- **Responsive Layout**: 2-column on desktop, 1-column on mobile
- **Quick Navigation**: One-click access to both games
- **Smooth Transitions**: Framer Motion animations between game selection and gameplay

### **Hero Section**
- **Animated Background**: Floating elements with continuous animation
- **Gradient Text**: Main heading with blue-to-purple gradient
- **Call-to-Action**: Buttons linking to GitHub, Projects, Resume
- **Scroll Indicator**: Animated arrow showing more content below

### **Tech Stack Section**
- **3 Categories**: Frontend, Backend, Tools
- **Interactive Cards**: Hover animation with scale and y-axis movement
- **Icons**: lucide-react icons for each technology
- **Staggered Animation**: Children animate in sequence

### **Projects Section**
- **Grid Layout**: 2-column on desktop, 1-column on mobile
- **Project Cards**: Name, description, technologies, links
- **Architecture Modal**: Click to view system design
- **AnimatePresence**: Smooth modal open/close animation

### **Architecture Diagram**
- **3-Layer System**: Frontend → API → Database
- **Animated Arrows**: SVG paths that draw on scroll
- **Layer Details**: Hover to see component details
- **Responsive**: Horizontal on desktop, vertical on mobile

### **Interactive Terminal**
- **Commands**: help, projects, skills, about, contact, clear
- **Auto-scroll**: Terminal scrolls to latest output
- **Quick Buttons**: Shortcuts for common commands
- **Loading State**: Visual feedback while processing

### **Games Showcase Section**
- **Game Collection Cards**: Display both Tic Tac Toe and Snake games
- **Features & Technologies**: Each game showcases its tech stack
- **Play Integration**: Direct links to play games from portfolio
- **How to Play Guide**: Detailed instructions for both games
- **Desktop vs Browser**: Clear distinction between Snake (desktop) and Tic Tac Toe (browser)

### **GitHub Activity**
- **Stats Grid**: Public repos, stars, forks, contributions
- **Weekly Chart**: Bar chart showing activity by day
- **Recent Projects**: 4 featured projects with metadata
- **External Link**: Button to full GitHub profile

### **Contact Section**
- **Social Links**: GitHub, LinkedIn, Email
- **Hover Effects**: Cards scale and glow on hover
- **CTA Button**: "Send me an email" call-to-action
- **Open in New Tab**: All external links use target="_blank"

---

## 🎮 Games Collection Overview

### **Game Launcher Interface** ⭐ NEW
The unified game selection interface that users see when they click "Play Games" from the portfolio:
- Beautiful dual-card layout with game information
- Tic Tac Toe card (Browser-based)
- Snake Game card (Desktop-based)
- Interactive hover animations
- Clear setup instructions for each game

### **Tic Tac Toe Game** (React + TypeScript)

#### **Single Player Mode**
- Play against AI bot
- AI uses Minimax algorithm for optimal moves
- Nearly unbeatable difficulty
- Win, lose, or draw outcomes
- Real-time board status display

#### **Multiplayer Mode**
- Local multiplayer on same device
- X vs O turn-based gameplay
- Visual indication of current player turn
- Same win/draw detection logic
- Perfect for challenging a friend

#### **Game Logic - Minimax Algorithm**
```typescript
// Algorithm: Minimax with Alpha-Beta Pruning
// - Evaluates all possible board states recursively
// - Scores: +10 (AI wins), 0 (draw), -10 (player wins)
// - Finds the best move for AI
// - Time Complexity: O(9!) = O(362,880) worst case
// - In practice: Optimized with memoization
```

#### **UI/UX Features**
- Dark slate theme matching portfolio (slate-900/950)
- Blue-purple gradient accents
- Interactive game board with hover states
- Real-time status showing current player
- "Play Again" button after game ends
- Smooth animations and transitions

### **Python Snake Game** (Python + Pygame)

#### **Location & Files**
```
games/
├── snake_game.py          # Main game (400+ lines)
├── launcher.py            # Python menu system
├── launcher.bat           # Windows batch launcher
├── setup.bat              # Pygame auto-installer
└── README.md              # Full documentation
```

#### **Gameplay Features**
- Classic snake movement mechanics
- Apple collection for score
- Progressive difficulty (speed increases with score)
- Grid-based collision detection
- Pause/Resume during gameplay
- Restart functionality
- Score tracking and statistics display

#### **Visual Features**
- Color-coded game elements (snake, apple, barriers)
- Smooth animation at 60+ FPS
- Clear score and difficulty display
- Game state indicators (Playing, Paused, Game Over)

#### **Technical Stack**
- **Language**: Python 3.8+
- **Framework**: Pygame (Game engine)
- **Features**: 2D graphics, real-time input, collision detection
- **Performance**: Optimized rendering loop

#### **Setup Instructions**
```bash
# Automatic setup (Windows)
games/launcher.bat

# Manual setup (Cross-platform)
pip install pygame
python games/snake_game.py

# Interactive menu (if launcher.py installed)
python games/launcher.py
```

#### **Controls**
- **WASD** or **Arrow Keys**: Move snake
- **Space**: Pause/Resume
- **R**: Restart game
- **Esc**: Quit

---

## 🌐 Responsive Design

### **Mobile First Approach**
- Base styles for mobile (< 640px)
- Tablet breakpoint (`md:` = 768px)
- Desktop breakpoint (`lg:` = 1024px)
- Ultra-wide breakpoint (`xl:` = 1280px)

### **Responsive Examples**
```html
<!-- Column on mobile, 2 columns on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2">

<!-- Hidden on mobile, visible on desktop -->
<nav class="hidden md:flex">

<!-- Font size adjusts by screen -->
<h1 class="text-2xl md:text-4xl lg:text-5xl">
```

---

## 🔐 Security & Best Practices

### **Type Safety**
- Full TypeScript strict mode
- Interface definitions for all data
- Props validation with React.FC<Props>

### **Performance**
- Code splitting with Vite
- Lazy component loading with React.lazy
- Tailwind CSS purging unused styles
- Efficient re-renders with React.memo (where applicable)

### **Accessibility**
- Semantic HTML structure
- ARIA labels for icons
- Keyboard navigation support
- Color contrast compliance

---

## 📦 Dependencies Breakdown

| Package | Version | Purpose |
|---------|---------|---------|
| react | 18.3.1 | UI Framework |
| react-dom | 18.3.1 | React DOM rendering |
| typescript | 4.0.0 | Type safety |
| vite | 7.3.1 | Build tool |
| tailwindcss | 3.4.19 | Styling |
| postcss | 8.5.6 | CSS processing |
| framer-motion | ^4.0 | Animations |
| lucide-react | ^0.x | Icon library |
| autoprefixer | 10.4.24 | Browser prefixes |

---

## 🚢 Deployment Guide

### **Deploy to Vercel**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Authorize GitHub
   - Select repository
   - Vercel auto-detects Vite project
   - Click Deploy

3. **Automatic Deployments**
   - Every push to `main` branch triggers build
   - Automatic previews for pull requests
   - Environment variables in Vercel dashboard

4. **Custom Domain**
   - Add domain in Vercel project settings
   - Update DNS records (details provided by Vercel)

---

## 🐛 Troubleshooting

### **Issue: Port already in use**
```bash
# Open dev server on different port
npm run dev -- --port 3003
```

### **Issue: TypeScript errors**
```bash
# Run type checking
npm run type-check

# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### **Issue: Tailwind styles not applying**
- Ensure `content` paths in `tailwind.config.js` include all component files
- Restart dev server after config changes
- Check class names are in included paths

### **Issue: Animations not smooth**
- Ensure Framer Motion is installed: `npm list framer-motion`
- Check GPU acceleration in hardware settings
- Use Chrome DevTools Performance tab to diagnose

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Parth Upadhyay**
- GitHub: [@parthupadhyay038](https://github.com/parthupadhyay038)
- Portfolio: [Your Portfolio URL]
- Email: parth@example.com

---

## 🔧 Project Maintenance Guide

### **Code Quality Standards**

#### **TypeScript Practices**
- Always use strict mode (`strict: true` in tsconfig.json)
- Define interfaces for all component props
- Use `React.FC<Props>` for functional components
- Avoid `any` type - use `unknown` with type guards if needed
- Document complex types with JSDoc comments

#### **Component Organization**
```
src/
├── components/              (Reusable UI components)
│   ├── GameLauncher.tsx    (Game selection interface)
│   ├── Welcome.tsx         (Game mode selection)
│   ├── TicTacToe.tsx       (Game logic and board)
│   └── Portfolio/          (Portfolio sub-components)
│       └── *.tsx           (Individual portfolio sections)
├── App.tsx                 (Main router/orchestrator)
├── main.tsx                (Entry point)
└── index.css               (Global styles)
```

#### **Naming Conventions**
- **Components**: PascalCase (e.g., `GameLauncher.tsx`)
- **Functions**: camelCase (e.g., `handleSelectGame`)
- **Variables**: camelCase (e.g., `appMode`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_BOARD_SIZE`)
- **Interfaces**: Prefix with `I` or use `Props` suffix (e.g., `GameLauncherProps`)

### **Code Review Checklist**

Before committing code:
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] All imports are used (no unused variables)
- [ ] Components follow naming conventions
- [ ] Props are properly typed with interfaces
- [ ] Animations use Framer Motion patterns
- [ ] Responsive classes included (mobile-first)
- [ ] Accessibility considered (alt text, ARIA labels)
- [ ] No console.log() statements in production code
- [ ] Git commit message is descriptive

### **Adding New Features**

1. **Create Component File**
   ```bash
   # Create new component in appropriate folder
   touch src/components/MyComponent.tsx
   ```

2. **Define Interface**
   ```typescript
   interface MyComponentProps {
     title: string;
     onAction?: (value: string) => void;
   }
   ```

3. **Implement Component**
   ```typescript
   const MyComponent: React.FC<MyComponentProps> = ({ title, onAction }) => {
     // Component code
   };
   ```

4. **Export Component**
   ```typescript
   export default MyComponent;
   ```

5. **Test Build**
   ```bash
   npm run build  # Verify no errors
   ```

6. **Commit & Push**
   ```bash
   git add .
   git commit -m "Add MyComponent feature"
   git push origin main
   ```

### **Updating Dependencies**

1. **Check for Updates**
   ```bash
   npm outdated
   ```

2. **Update Specific Package**
   ```bash
   npm update package-name@latest
   ```

3. **Test Build**
   ```bash
   npm run build
   npm run type-check
   ```

4. **Commit Update**
   ```bash
   git commit -m "Update package-name to version X.X.X"
   ```

### **Performance Optimization**

- Keep component re-renders minimal
- Use `React.memo` for expensive components
- Lazy load components with `React.lazy` if needed
- Monitor bundle size: `npm run build` shows gzipped size
- Target: Keep JS bundle under 350KB gzipped

### **Documentation Updates**

Update DOCS.md when:
- Adding new components or features
- Changing architecture or data flow
- Adding new games or portfolio sections
- Updating deployment process
- Changes to TypeScript configuration

### **Git Workflow**

1. **For New Features**
   ```bash
   git checkout -b feature/feature-name
   # ... make changes ...
   git commit -m "Add feature: description"
   git push origin feature/feature-name
   ```

2. **For Bug Fixes**
   ```bash
   git checkout -b bugfix/bug-name
   # ... make changes ...
   git commit -m "Fix: description"
   git push origin bugfix/bug-name
   ```

3. **Merge to Main**
   - Create Pull Request on GitHub
   - Verify build passes
   - Merge to main
   - Vercel auto-deploys

### **Common Maintenance Tasks**

#### **Add New Portfolio Section**
1. Create component in `src/components/Portfolio/SectionName.tsx`
2. Add to Portfolio.tsx layout
3. Update theme colors to match (slate-900 base, blue-purple accents)
4. Update DOCS.md with new section info
5. Build and test

#### **Update Game Logic**
1. Modify `src/components/TicTacToe.tsx` for browser game
2. Modify `games/snake_game.py` for desktop game
3. Test functionality
4. Update Games.tsx showcase if needed
5. Commit with descriptive message

#### **Change Theme Colors**
1. Update Tailwind classes in components
2. Update `tailwind.config.js` if changing custom colors
3. Verify contrast ratios for accessibility
4. Build and test all pages

### **Monitoring & Logs**

- **Build Logs**: Check `npm run build` output for warnings
- **Type Errors**: Run `npm run type-check` to catch TS errors
- **Browser Console**: Check DevTools console for runtime errors
- **Network Tab**: Monitor asset loading and API calls

### **Backup & Version Control**

- Push to GitHub regularly: `git push origin main`
- Tag releases: `git tag v1.0.0 && git push origin v1.0.0`
- Keep commit history clean and descriptive
- Review git log: `git log --oneline -10`

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

---

**Last Updated**: March 7, 2026
**Project Status**: Active Development ✅
**Latest Features**: Game Launcher Interface, Python Snake Game, Dark Theme

