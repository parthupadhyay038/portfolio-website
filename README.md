# 🚀 Portfolio + Tic Tac Toe App

A modern, interactive **Full Stack Developer Portfolio** combined with an AI-powered **Tic Tac Toe Game**. Built with React 18, TypeScript, Tailwind CSS, Vite, and Framer Motion.

## ✨ Features

### Portfolio Sections
- **Hero**: Animated landing section with gradient text and CTAs
- **Tech Stack**: Interactive card showcase of frontend, backend, and tools
- **Projects**: Featured projects with architecture modal
- **Architecture**: System design visualization with animated data flow
- **Terminal**: Interactive CLI interface with 5+ commands
- **GitHub Activity**: Stats, weekly chart, and popular projects
- **Contact**: Social links and email call-to-action
- **Responsive Design**: Perfect on desktop, tablet, and mobile

### Tic Tac Toe Game
- **Single Player**: Play against AI bot (Minimax algorithm)
- **Multi Player**: Local multiplayer on same device
- **Clean UI**: Smooth animations and transitions
- **Game States**: Win, lose, and draw detection

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1, TypeScript 4.0
- **Build Tool**: Vite 7.3.1 (Lightning-fast)
- **Styling**: Tailwind CSS 3.4.19
- **Animations**: Framer Motion 4.0+
- **Icons**: lucide-react
- **Deployment**: Vercel

## 📋 Quick Start

### 1. **Clone & Install**
```bash
git clone https://github.com/parthupadhyay038/portfolio-website.git
cd my-app-1

npm install
```

### 2. **Development Server**
```bash
npm run dev
```
Opens on `http://localhost:3002` (or next available port)

### 3. **Build for Production**
```bash
npm run build
```

### 4. **Type Check**
```bash
npm run type-check
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Welcome.tsx                    # Game mode selection
│   ├── TicTacToe.tsx                  # Game logic
│   └── Portfolio/
│       ├── Portfolio.tsx              # Main container
│       ├── Hero.tsx                   # Landing section
│       ├── TechStack.tsx              # Skills showcase
│       ├── Projects.tsx               # Project cards
│       ├── Architecture.tsx           # System diagram
│       ├── Terminal.tsx               # Interactive CLI
│       ├── GitHubActivity.tsx         # Stats & activity
│       └── Contact.tsx                # Social links
├── App.tsx                            # Mode switcher
├── main.tsx                           # Entry point
└── index.css                          # Global styles
```

## 🎨 Component Highlights

### **Framer Motion Animations**
- Staggered container/item animations
- Scroll-triggered reveals with `whileInView`
- Smooth hover effects and transitions
- SVG path animations for architecture diagram

### **Responsive Design**
- Mobile-first approach
- Tailwind breakpoints: `sm`, `md`, `lg`, `xl`
- Flexible grid layouts

### **Interactive Features**
- Terminal with 6 commands: `help`, `projects`, `skills`, `about`, `contact`, `clear`
- Modal system with AnimatePresence
- Real-time stats display
- Weekly activity chart

## 📚 Documentation

For detailed component breakdown, architecture diagrams, and customization guide, see [DOCS.md](./DOCS.md).

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub (already configured)
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Vercel auto-detects Vite configuration
5. Click Deploy

Every push to `main` branch auto-deploys!

## 🎮 Game AI Algorithm

The Tic Tac Toe bot uses the **Minimax Algorithm**:
- Evaluates all possible game states
- Recursively scores moves (-10 to +10)
- Selects optimal move instantly
- Provides challenging gameplay

## 🔧 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run type-check` | Check TypeScript types |

## 🎯 Key Accomplishments

✅ Full responsive design (mobile, tablet, desktop)
✅ 7 interactive portfolio sections
✅ Smooth animations with Framer Motion
✅ Production-ready build (315KB JS gzipped)
✅ TypeScript strict mode compliance
✅ AI-powered Tic Tac Toe game
✅ Vercel deployment ready
✅ Comprehensive documentation

## 📊 Build Stats

- **Production Bundle**: 315.65 KB (98.27 KB gzipped)
- **Modules**: 2,149 transformed
- **Build Time**: ~5 seconds
- **Development**: Hot Module Replacement (HMR) enabled

## 💡 Customization

### Change Social Links
Edit [Contact.tsx](src/components/Portfolio/Contact.tsx) and [Portfolio.tsx](src/components/Portfolio/Portfolio.tsx)

### Modify Tech Stack
Edit categories and items in [TechStack.tsx](src/components/Portfolio/TechStack.tsx)

### Add Projects
Update projects array in [Projects.tsx](src/components/Portfolio/Projects.tsx)

### Adjust Colors
Modify Tailwind classes or update [tailwind.config.js](tailwind.config.js)

## 🔒 Security

- TypeScript strict mode for type safety
- No external API calls (static data)
- Security headers via Vercel
- HTTPS by default on Vercel

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3003
```

**Build fails?**
```bash
npm install
npm run build
```

**TypeScript errors?**
```bash
npm run type-check
```

## 📦 Dependencies

All dependencies are listed in [package.json](package.json). Key packages:
- `react`: UI framework
- `framer-motion`: Animations
- `tailwindcss`: Styling
- `typescript`: Type safety
- `vite`: Build tool

## 📝 License

MIT License - feel free to use this project as a template!

## 👤 Author

**Parth Upadhyay**
- GitHub: [@parthupadhyay038](https://github.com/parthupadhyay038)
- Portfolio: [Your Portfolio URL]
- Email: parth@example.com

## 🙏 Credits

Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion.

---

**Status**: ✅ Production Ready | **Last Updated**: March 7, 2024

## Usage

This project serves as a starter template for building React applications with TypeScript and Tailwind CSS. You can modify the `App.tsx` file to create your own components and styles.

## License

This project is open-source and available under the [MIT License](LICENSE).