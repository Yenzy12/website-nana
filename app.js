// Make the continue button work immediately
document.addEventListener('DOMContentLoaded', function() {
    // Set up the continue button on the welcome screen
    document.getElementById('continueButton').addEventListener('click', function() {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('question').style.display = 'flex';
    });
    
    // Button event listeners
    document.getElementById('btnYes').addEventListener('click', () => {
        document.getElementById('question').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        document.getElementById('hearts').style.display = 'block';
        createHearts();
        animateLetterParagraphs();
    });

    document.getElementById('btnNo').addEventListener('click', () => {
        alert('Session ending... Goodbye!');
        window.close(); // This may not work in all browsers due to security restrictions
        // Alternative approach
        document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;"><h1>Session ended. Please close this tab.</h1></div>';
    });

    // Hide scroll indicator when scrolled
    const letterContainer = document.querySelector('.letter-container');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (letterContainer && scrollIndicator) {
        letterContainer.addEventListener('scroll', () => {
            if (letterContainer.scrollTop > 30) {
                scrollIndicator.style.opacity = '0.5';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
});

// Create falling hearts animation
function createHearts() {
    const container = document.getElementById('hearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// Animate letter paragraphs
function animateLetterParagraphs() {
    const paragraphs = document.querySelectorAll('.letter p');
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.style.opacity = 1;
        }, 500 + (index * 200));
    });
}