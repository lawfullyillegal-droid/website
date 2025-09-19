// Game State Management
let gameState = {
    currentScreen: 'welcome-screen',
    playerLevel: 1,
    playerXP: 350,
    maxXP: 1000,
    achievements: ['first-program', 'creative-spark'],
    selectedPath: null,
    particles: []
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    updateHUD();
    setupEventListeners();
    showScreen('welcome-screen');
});

// Particle System
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    // Random animation duration
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    
    container.appendChild(particle);
}

// Screen Management
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        gameState.currentScreen = screenId;
        
        // Play screen transition sound effect (simulated)
        playSound('transition');
        
        // Update HUD based on current screen
        updateHUD();
    }
}

// Learning Path Selection
function selectPath(pathType) {
    gameState.selectedPath = pathType;
    
    // Add visual feedback
    const pathCards = document.querySelectorAll('.path-card');
    pathCards.forEach(card => {
        card.classList.remove('selected');
    });
    
    // Highlight selected path
    event.target.closest('.path-card').classList.add('selected');
    
    // Add XP for path selection
    gainXP(50);
    
    // Play selection sound
    playSound('select');
    
    // Show feedback message
    showNotification(`Selected ${pathType.charAt(0).toUpperCase() + pathType.slice(1)} path! +50 XP`);
    
    // Auto-advance to dashboard after a short delay
    setTimeout(() => {
        showScreen('dashboard-screen');
    }, 1500);
}

// Start Learning Journey
function startJourney() {
    playSound('start');
    showNotification('Welcome to your learning adventure!');
    gainXP(25);
    
    setTimeout(() => {
        showScreen('framework-screen');
    }, 1000);
}

// HUD Updates
function updateHUD() {
    // Update level and XP
    const levelElement = document.querySelector('.level');
    const xpFill = document.querySelector('.xp-fill');
    const xpText = document.querySelector('.xp-text');
    
    if (levelElement) {
        levelElement.textContent = `LVL ${gameState.playerLevel}`;
    }
    
    if (xpFill) {
        const xpPercentage = (gameState.playerXP / gameState.maxXP) * 100;
        xpFill.style.width = xpPercentage + '%';
    }
    
    if (xpText) {
        xpText.textContent = `${gameState.playerXP}/${gameState.maxXP} XP`;
    }
    
    // Update achievement count
    const achievementCount = document.querySelector('.stat span');
    if (achievementCount) {
        achievementCount.textContent = gameState.achievements.length;
    }
}

// XP System
function gainXP(amount) {
    gameState.playerXP += amount;
    
    // Check for level up
    if (gameState.playerXP >= gameState.maxXP) {
        levelUp();
    }
    
    updateHUD();
    
    // Animate XP gain
    animateXPGain(amount);
}

function levelUp() {
    gameState.playerLevel++;
    gameState.playerXP -= gameState.maxXP;
    gameState.maxXP = Math.floor(gameState.maxXP * 1.5); // Increase XP requirement
    
    playSound('levelup');
    showNotification(`🎉 LEVEL UP! You are now Level ${gameState.playerLevel}!`);
    
    // Grant achievement for leveling up
    if (!gameState.achievements.includes('level-up')) {
        gameState.achievements.push('level-up');
        showNotification('🏆 Achievement Unlocked: Level Up!');
    }
}

function animateXPGain(amount) {
    const xpAnimation = document.createElement('div');
    xpAnimation.style.cssText = `
        position: fixed;
        top: 80px;
        right: 300px;
        color: #ffff00;
        font-family: 'Press Start 2P', cursive;
        font-size: 14px;
        z-index: 2000;
        pointer-events: none;
        text-shadow: 0 0 10px #ffff00;
    `;
    xpAnimation.textContent = `+${amount} XP`;
    document.body.appendChild(xpAnimation);
    
    // Animate upward movement and fade
    let opacity = 1;
    let yPos = 80;
    const interval = setInterval(() => {
        yPos -= 2;
        opacity -= 0.05;
        xpAnimation.style.top = yPos + 'px';
        xpAnimation.style.opacity = opacity;
        
        if (opacity <= 0) {
            clearInterval(interval);
            document.body.removeChild(xpAnimation);
        }
    }, 50);
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 255, 136, 0.9);
        color: #0f051a;
        padding: 15px 30px;
        border-radius: 10px;
        font-family: 'Press Start 2P', cursive;
        font-size: 12px;
        z-index: 3000;
        box-shadow: 0 5px 20px rgba(0, 255, 136, 0.5);
        animation: slideDown 0.5s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.5s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 3000);
}

// Sound System (simulated)
function playSound(soundType) {
    // In a real implementation, you would play actual audio files
    console.log(`Playing sound: ${soundType}`);
    
    // Visual feedback for sound
    switch (soundType) {
        case 'transition':
            document.body.style.animation = 'none';
            setTimeout(() => {
                document.body.style.animation = 'flash 0.3s ease-out';
            }, 10);
            break;
        case 'select':
            // Add a brief color flash to the selected element
            if (event && event.target) {
                const element = event.target.closest('.path-card, .tool-card, .nav-button');
                if (element) {
                    element.style.boxShadow = '0 0 20px #ffff00';
                    setTimeout(() => {
                        element.style.boxShadow = '';
                    }, 300);
                }
            }
            break;
        case 'start':
            // Screen flash effect
            const flash = document.createElement('div');
            flash.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 255, 136, 0.3);
                z-index: 4000;
                pointer-events: none;
                animation: flashEffect 0.5s ease-out;
            `;
            document.body.appendChild(flash);
            setTimeout(() => {
                document.body.removeChild(flash);
            }, 500);
            break;
        case 'levelup':
            // Special level up effect
            const levelUpEffect = document.createElement('div');
            levelUpEffect.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #ffff00;
                font-family: 'Press Start 2P', cursive;
                font-size: 24px;
                z-index: 4000;
                text-shadow: 0 0 20px #ffff00;
                animation: levelUpPulse 2s ease-out;
            `;
            levelUpEffect.textContent = 'LEVEL UP!';
            document.body.appendChild(levelUpEffect);
            setTimeout(() => {
                document.body.removeChild(levelUpEffect);
            }, 2000);
            break;
    }
}

// Tool Interactions
function launchTool(toolType) {
    playSound('select');
    showNotification(`Launching ${toolType} tool...`);
    gainXP(10);
    
    // Simulate tool launch
    setTimeout(() => {
        showNotification(`${toolType} tool ready! Complete activities to gain more XP.`);
    }, 1500);
}

// Event Listeners
function setupEventListeners() {
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        switch (e.key) {
            case 'ArrowLeft':
                navigateBack();
                break;
            case 'ArrowRight':
                navigateForward();
                break;
            case 'Escape':
                showScreen('welcome-screen');
                break;
            case 'Enter':
                if (gameState.currentScreen === 'welcome-screen') {
                    startJourney();
                }
                break;
        }
    });
    
    // Tool button interactions
    document.querySelectorAll('.tool-button').forEach(button => {
        button.addEventListener('click', function() {
            const toolCard = this.closest('.tool-card');
            const toolName = toolCard.querySelector('h3').textContent;
            launchTool(toolName);
        });
    });
    
    // Path card hover effects
    document.querySelectorAll('.path-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            gainXP(1); // Small XP for exploration
        });
    });
    
    // Community link interactions
    document.querySelectorAll('.community-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            playSound('select');
            showNotification('Community feature coming soon! Stay tuned.');
            gainXP(5);
        });
    });
}

// Navigation Helpers
function navigateBack() {
    const screenOrder = ['welcome-screen', 'framework-screen', 'dashboard-screen', 'ai-tools-screen', 'community-screen'];
    const currentIndex = screenOrder.indexOf(gameState.currentScreen);
    
    if (currentIndex > 0) {
        showScreen(screenOrder[currentIndex - 1]);
    }
}

function navigateForward() {
    const screenOrder = ['welcome-screen', 'framework-screen', 'dashboard-screen', 'ai-tools-screen', 'community-screen'];
    const currentIndex = screenOrder.indexOf(gameState.currentScreen);
    
    if (currentIndex < screenOrder.length - 1) {
        showScreen(screenOrder[currentIndex + 1]);
    }
}

// Achievement System
function checkAchievements() {
    // Check for exploration achievement
    if (gameState.playerXP >= 100 && !gameState.achievements.includes('explorer')) {
        gameState.achievements.push('explorer');
        showNotification('🏆 Achievement Unlocked: Explorer!');
    }
    
    // Check for path master achievement
    if (gameState.selectedPath && !gameState.achievements.includes('path-master')) {
        gameState.achievements.push('path-master');
        showNotification('🏆 Achievement Unlocked: Path Master!');
    }
    
    // Check for community member achievement
    if (gameState.playerLevel >= 2 && !gameState.achievements.includes('community-member')) {
        gameState.achievements.push('community-member');
        showNotification('🏆 Achievement Unlocked: Community Member!');
    }
}

// Auto-save game state
setInterval(() => {
    localStorage.setItem('fastTrackAcademyState', JSON.stringify(gameState));
    checkAchievements();
}, 5000);

// Load game state on startup
function loadGameState() {
    const savedState = localStorage.getItem('fastTrackAcademyState');
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            gameState = { ...gameState, ...parsed };
        } catch (e) {
            console.log('Could not load saved state');
        }
    }
}

// Initialize saved state
loadGameState();

// CSS Animations (added via JavaScript)
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translate(-50%, -100%); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
    
    @keyframes slideUp {
        from { transform: translate(-50%, 0); opacity: 1; }
        to { transform: translate(-50%, -100%); opacity: 0; }
    }
    
    @keyframes flash {
        0%, 100% { background: linear-gradient(135deg, #0f051a 0%, #1a0533 25%, #2d1b5e 50%, #0f051a 100%); }
        50% { background: linear-gradient(135deg, #1a0533 0%, #2d1b5e 25%, #0f051a 50%, #1a0533 100%); }
    }
    
    @keyframes flashEffect {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes levelUpPulse {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    }
    
    .path-card.selected {
        border-color: #ffff00 !important;
        box-shadow: 0 0 30px rgba(255, 255, 0, 0.5) !important;
        background: rgba(255, 255, 0, 0.1) !important;
    }
`;
document.head.appendChild(style);

// Performance optimization: Reduce particle count on mobile
if (window.innerWidth < 768) {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        if (index > 25) { // Keep only first 25 particles on mobile
            particle.remove();
        }
    });
}

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function(e) {
        // Add touch feedback
        if (e.target.matches('.path-card, .tool-card, .nav-button, .start-button')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });
}

console.log('🚀 Fast Track Academy - Video Game Classroom Initialized!');
console.log('Use arrow keys to navigate, Enter to start, Escape to go home.');
console.log('Current state:', gameState);