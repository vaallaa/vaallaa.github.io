document.addEventListener('DOMContentLoaded', function() {
    // --- Typewriter Effect ---
    const titleElement = document.getElementById('main-title');
    if (titleElement) {
        const text = titleElement.innerText;
        titleElement.innerText = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                const span = document.createElement('span');
                span.textContent = text.charAt(i);
                span.style.opacity = '0';
                titleElement.appendChild(span);

                // Fade-in animation
                setTimeout(() => {
                    span.style.transition = 'opacity 0.3s';
                    span.style.opacity = '1';
                }, 10);

                i++;
                setTimeout(typeWriter, 100);
            } else {
                const cursor = document.createElement('span');
                cursor.className = 'blinking-cursor';
                cursor.textContent = '_';
                titleElement.appendChild(cursor);
            }
        }
        
        typeWriter();
    }

    // Smooth scroll for nav links
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
