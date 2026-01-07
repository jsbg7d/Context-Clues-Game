# Context Clues - Daily Vocabulary Challenge

A daily word game where players identify word meanings from context alone. Test your vocabulary skills through 10 levels of progressive difficulty!

## 🎮 Game Features

- **Daily Challenge**: New words every day at midnight
- **10 Progressive Levels**: Easy (1-3) → Medium (4-7) → Hard (8-10)
- **One Strike**: One wrong answer ends your challenge
- **Social Sharing**: Share your results with friends
- **Mobile Friendly**: Responsive design works on all devices

## 🚀 How to Deploy on GitHub Pages

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for a free account

### Step 2: Create a New Repository
1. Click the "+" icon in the top right
2. Select "New repository"
3. Name it `context-clues-game` (or any name you prefer)
4. Make it **Public**
5. Click "Create repository"

### Step 3: Upload Your Files
1. On your repository page, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `app.js`
   - `words.js`
   - `styles.css`
   - `README.md` (this file)
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Scroll down to "Pages" section (left sidebar)
3. Under "Source", select `main` branch
4. Click "Save"
5. Wait 1-2 minutes for deployment

### Step 5: Get Your URL
Your game will be live at:
```
https://[your-username].github.io/[repository-name]
```

For example: `https://jsmith.github.io/context-clues-game`

### Step 6: Update Share URL
1. Open `app.js` in GitHub (or locally)
2. Find line 362: `shareText += `\n\nPlay at: [Your URL Here]`;`
3. Replace `[Your URL Here]` with your actual URL
4. Commit the change

## 📱 Files Included

- **index.html** - Main game structure
- **app.js** - Game logic and mechanics
- **words.js** - Word database (12 easy, 14 medium, 13 hard words)
- **styles.css** - Modern blue/purple styling
- **README.md** - This file

## 🎯 How to Play

1. Read a sentence with a hidden word
2. Choose the definition that best fits based on context clues
3. Progress through 10 levels of increasing difficulty
4. One wrong answer ends the challenge
5. Come back tomorrow for a new challenge!

## 🛠️ Customization

### Add More Words
Edit `words.js` and add entries to `wordDatabase.easy`, `wordDatabase.medium`, or `wordDatabase.hard`

### Change Colors
Edit `styles.css` - main colors are defined in gradient backgrounds using `#3b82f6` (blue) and `#8b5cf6` (purple)

### Adjust Difficulty Distribution
Edit `app.js`, function `selectTodayChallenge()` - change how many words from each difficulty level

## 📊 Analytics (Optional)

To track visitors, add Google Analytics:
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking code
3. Add to `index.html` before `</head>`

## 🔧 Testing Locally

To test before deploying:
1. Open `index.html` in a web browser
2. The game runs entirely client-side (no server needed)

## 📝 License

Free to use and modify for personal or educational purposes.

## 🐛 Troubleshooting

**Game not loading?**
- Check browser console for errors (F12)
- Ensure all 4 files are in the same directory

**Already played today message won't reset?**
- Change `TEST_MODE` to `true` in `app.js` line 11
- Test your changes
- Change back to `false` before deploying

**Share button not working?**
- On desktop, it copies to clipboard automatically
- On mobile, it uses native share menu
- Ensure you're using HTTPS (GitHub Pages provides this)

## 🎉 That's It!

Your game is now live and ready to share with the world!
