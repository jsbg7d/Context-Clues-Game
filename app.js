// Game state
let gameState = {
    currentLevel: 0,
    maxLevel: 10,
    challengeWords: [],
    gameOver: false,
    won: false
};

// Test mode - set to true to allow unlimited plays
const TEST_MODE = false;

// Get today's date string (YYYY-MM-DD)
function getTodayDateString() {
    const today = new Date();
    if (TEST_MODE) {
        // In test mode, add random suffix so each play is treated as a new day
        return today.toISOString().split('T')[0] + '-' + Math.random().toString(36).substr(2, 9);
    }
    return today.toISOString().split('T')[0];
}

// Get formatted date for display
function getFormattedDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
}

// Seed random number generator for daily consistency
function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Get today's seed from date
function getTodaySeed() {
    const dateStr = getTodayDateString();
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// Select today's challenge words (deterministic based on date)
function selectTodayChallenge() {
    const seed = getTodaySeed();
    let rng = seed;

    const challenges = [];

    // Level 1-3: Easy words
    const easyWords = [...wordDatabase.easy];
    for (let i = 0; i < 3; i++) {
        rng = seededRandom(rng) * 10000;
        const index = Math.floor(seededRandom(rng) * easyWords.length);
        challenges.push(easyWords.splice(index, 1)[0]);
    }

    // Level 4-7: Medium words
    const mediumWords = [...wordDatabase.medium];
    for (let i = 0; i < 4; i++) {
        rng = seededRandom(rng) * 10000;
        const index = Math.floor(seededRandom(rng) * mediumWords.length);
        challenges.push(mediumWords.splice(index, 1)[0]);
    }

    // Level 8-10: Hard words
    const hardWords = [...wordDatabase.hard];
    for (let i = 0; i < 3; i++) {
        rng = seededRandom(rng) * 10000;
        const index = Math.floor(seededRandom(rng) * hardWords.length);
        challenges.push(hardWords.splice(index, 1)[0]);
    }

    return challenges;
}

// Load/save today's result
function getTodayResult() {
    const today = getTodayDateString();
    const stored = localStorage.getItem(`contextClues_${today}`);
    return stored ? JSON.parse(stored) : null;
}

function saveTodayResult(level, won) {
    const today = getTodayDateString();
    const result = {
        date: today,
        level: level,
        won: won,
        timestamp: Date.now()
    };
    localStorage.setItem(`contextClues_${today}`, JSON.stringify(result));
}

// Initialize game
document.addEventListener('DOMContentLoaded', function() {
    showStartScreen();
});

function showStartScreen() {
    document.getElementById('startScreen').style.display = 'block';
    document.querySelector('.progress-bar').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'none';

    // Set today's date
    document.getElementById('challengeDate').textContent = getFormattedDate();

    // Check if already played today
    const todayResult = getTodayResult();
    const statsDiv = document.getElementById('todayStats');
    const startButton = document.getElementById('startButton');

    if (todayResult) {
        // Already played
        statsDiv.innerHTML = `
            <h4>Today's Result</h4>
            <p>You reached <strong>Level ${todayResult.level}</strong></p>
            <p>${todayResult.won ? '🏆 Challenge Complete!' : '❌ Better luck tomorrow!'}</p>
        `;
        startButton.textContent = 'Come Back Tomorrow';
        startButton.disabled = true;
        updateCountdown();
    } else {
        statsDiv.innerHTML = '';
        startButton.textContent = "Start Today's Challenge";
        startButton.disabled = false;
    }
}

function startChallenge() {
    gameState.currentLevel = 0;
    gameState.challengeWords = selectTodayChallenge();
    gameState.gameOver = false;
    gameState.won = false;

    document.getElementById('startScreen').style.display = 'none';
    document.querySelector('.progress-bar').style.display = 'block';

    loadNextLevel();
}

function loadNextLevel() {
    if (gameState.currentLevel >= gameState.maxLevel) {
        // Won!
        gameState.won = true;
        saveTodayResult(gameState.maxLevel, true);
        showEndScreen();
        return;
    }

    gameState.currentLevel++;

    const currentWord = gameState.challengeWords[gameState.currentLevel - 1];

    // Update progress bar
    updateProgressBar();

    // Display sentence with blank
    document.getElementById('sentence').innerHTML = currentWord.sentence.replace(
        '_____',
        '<span class="blank">_____</span>'
    );

    // Shuffle all definitions
    const allDefinitions = [
        { text: currentWord.correctDefinition, correct: true },
        ...currentWord.wrongDefinitions.map(def => ({ text: def, correct: false }))
    ];

    // Fisher-Yates shuffle
    for (let i = allDefinitions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allDefinitions[i], allDefinitions[j]] = [allDefinitions[j], allDefinitions[i]];
    }

    // Create choice buttons
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    allDefinitions.forEach((definition, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = definition.text;
        button.onclick = () => selectAnswer(definition.correct, button, currentWord);
        choicesContainer.appendChild(button);
    });

    // Show game screen
    document.getElementById('gameScreen').style.display = 'block';
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('endScreen').style.display = 'none';
}

function updateProgressBar() {
    const percentage = (gameState.currentLevel / gameState.maxLevel) * 100;
    document.getElementById('currentLevel').textContent = gameState.currentLevel;
    document.getElementById('progressFill').style.width = percentage + '%';

    // Update difficulty indicator
    let difficultyText = '';
    if (gameState.currentLevel <= 3) {
        difficultyText = 'Easy';
    } else if (gameState.currentLevel <= 7) {
        difficultyText = 'Medium';
    } else {
        difficultyText = 'Hard';
    }
    document.getElementById('difficultyIndicator').textContent = difficultyText;
}

function selectAnswer(isCorrect, selectedButton, currentWord) {
    // Disable all buttons
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.disabled = true;
    });

    if (isCorrect) {
        selectedButton.classList.add('correct');

        // Show result after a brief delay
        setTimeout(() => {
            showResult(true, currentWord);
        }, 800);
    } else {
        selectedButton.classList.add('incorrect');

        // Highlight the correct answer
        document.querySelectorAll('.choice-btn').forEach(btn => {
            if (btn.textContent === currentWord.correctDefinition) {
                btn.classList.add('correct');
            }
        });

        // Game over!
        gameState.gameOver = true;
        saveTodayResult(gameState.currentLevel, false);

        setTimeout(() => {
            showResult(false, currentWord);
        }, 1200);
    }
}

function showResult(isCorrect, currentWord) {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';

    // Set result icon and title
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');

    if (isCorrect) {
        resultIcon.textContent = '✓';
        resultIcon.className = 'result-icon correct';
        resultTitle.textContent = 'Correct!';
        resultTitle.className = 'result-title correct';
    } else {
        resultIcon.textContent = '✗';
        resultIcon.className = 'result-icon incorrect';
        resultTitle.textContent = 'Wrong Answer';
        resultTitle.className = 'result-title incorrect';
    }

    // Show the word
    document.getElementById('revealWord').textContent = currentWord.word.toUpperCase();

    // Show full sentence
    document.getElementById('fullSentence').textContent = currentWord.sentence.replace('_____', currentWord.word);

    // Show correct definition
    document.getElementById('correctDefinition').textContent = currentWord.correctDefinition;
}

function nextRound() {
    if (gameState.gameOver) {
        showEndScreen();
    } else {
        loadNextLevel();
    }
}

function showEndScreen() {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('endScreen').style.display = 'block';
    document.querySelector('.progress-bar').style.display = 'none';

    const finalLevel = gameState.currentLevel;
    const won = gameState.won;

    // Set icon and title
    const endIcon = document.getElementById('endIcon');
    const endTitle = document.getElementById('endTitle');

    if (won) {
        endIcon.textContent = '🏆';
        endTitle.textContent = 'Perfect Score!';
    } else {
        endIcon.textContent = '💪';
        endTitle.textContent = 'Nice Try!';
    }

    // Show final level
    document.getElementById('finalLevel').textContent = finalLevel;

    // Performance message
    const performanceMsg = document.getElementById('performanceMessage');
    if (finalLevel === 10) {
        performanceMsg.textContent = 'Outstanding! You conquered all 10 levels!';
    } else if (finalLevel >= 7) {
        performanceMsg.textContent = `Great job! You made it to level ${finalLevel}!`;
    } else if (finalLevel >= 4) {
        performanceMsg.textContent = `Not bad! You reached level ${finalLevel}. Try again tomorrow!`;
    } else {
        performanceMsg.textContent = `You reached level ${finalLevel}. Come back tomorrow for a new challenge!`;
    }

    // Start countdown
    updateCountdown();
}

function updateCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;

    function update() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);

        const diff = tomorrow - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    update();
    setInterval(update, 1000);
}

function getShareText() {
    const level = gameState.currentLevel;
    const won = gameState.won;
    const today = getFormattedDate();

    let shareText = `🎯 Context Clues - Daily Challenge\n`;
    shareText += `${today}\n\n`;
    shareText += `Score: ${level}/10 `;

    // Create visual representation with better spacing
    shareText += `\n`;
    for (let i = 1; i <= 10; i++) {
        if (i < level) {
            shareText += '✅';
        } else if (i === level && !won) {
            shareText += '❌';
        } else {
            shareText += '⬜';
        }
    }

    shareText += `\n\n${won ? '🏆 Perfect Score!' : '💪 Try again tomorrow!'}`;
    shareText += `\n\nPlay at: ${window.location.href}`;

    return shareText;
}

function shareResults() {
    const shareText = getShareText();
    const shareButton = document.querySelector('.btn-share');
    const originalText = shareButton.textContent;
    const socialButtons = document.getElementById('socialShareButtons');

    if (navigator.share) {
        navigator.share({
            title: 'Context Clues - Daily Challenge',
            text: shareText
        }).catch(err => {
            if (err.name !== 'AbortError') {
                // Show social media buttons instead
                socialButtons.style.display = 'flex';
                shareButton.textContent = 'Choose Platform:';
            }
        });
    } else {
        // Show social media buttons
        socialButtons.style.display = 'flex';
        shareButton.textContent = 'Choose Platform:';
    }
}

function shareToTwitter() {
    const shareText = getShareText();
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
}

function shareToFacebook() {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(getShareText())}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
}

function copyShareText() {
    const shareText = getShareText();
    const button = document.querySelector('.btn-social.copy');
    const originalText = button.innerHTML;

    navigator.clipboard.writeText(shareText).then(() => {
        button.innerHTML = '✓ Copied!';
        button.style.background = '#10b981';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Could not copy', err);
        button.innerHTML = '✗ Failed';
        button.style.background = '#ef4444';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    });
}

function copyToClipboard(text, button, originalText) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success feedback
        button.textContent = '✓ Copied to Clipboard!';
        button.style.background = '#10b981';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Could not copy', err);
        button.textContent = '✗ Copy Failed';
        button.style.background = '#ef4444';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
}

function viewStats() {
    showStartScreen();
}

function toggleInstructions() {
    const modal = document.getElementById('instructionsModal');
    if (modal.style.display === 'none') {
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}

// Show instructions on first visit
window.addEventListener('load', () => {
    const hasVisited = localStorage.getItem('contextCluesVisited');
    if (!hasVisited) {
        toggleInstructions();
        localStorage.setItem('contextCluesVisited', 'true');
    }
});
