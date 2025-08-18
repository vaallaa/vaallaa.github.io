document.addEventListener('DOMContentLoaded', function() {
    // --- Typewriter Effect ---
    const titleElement = document.getElementById('main-title');
    if (titleElement) {
        const text = titleElement.innerText;
        titleElement.innerText = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                titleElement.innerHTML += text.charAt(i);
                i++;
                // Adjust typing speed here (in milliseconds)
                setTimeout(typeWriter, 100); 
            } else {
                // Add a blinking cursor at the end
                titleElement.innerHTML += '<span class="blinking-cursor">_</span>';
            }
        }
        
        typeWriter();
    }
});

// Adding the CSS for the blinking cursor dynamically
const style = document.createElement('style');
style.innerHTML = `
.blinking-cursor {
    font-weight: 400;
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: white;
    }
}
`;
document.head.appendChild(style);
