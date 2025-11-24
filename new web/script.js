document.addEventListener('DOMContentLoaded', function() {
    // Gallery section ke liye code.
    
    // Gallery mein maujood saare art frames (divs) ko select karein.
    const frames = document.querySelectorAll('.art-frame');
    let currentFrameIndex = 0; 

    // Agar frames nahi hain, toh ruk jayen.
    if (frames.length === 0) {
        return; 
    }

    // Frames ko chhipane/dikhane ka function.
    function showFrame(index) {
        frames.forEach((frame, i) => {
            if (i === index) {
                frame.style.display = 'block'; 
            } else {
                frame.style.display = 'none'; 
            }
        });
    }

    // Agla frame.
    function nextFrame() {
        currentFrameIndex = (currentFrameIndex + 1) % frames.length;
        showFrame(currentFrameIndex);
    }

    // Pichla frame.
    function prevFrame() {
        currentFrameIndex = (currentFrameIndex - 1 + frames.length) % frames.length;
        showFrame(currentFrameIndex);
    }

    // Shuruat mein pehla frame dikhayein.
    showFrame(currentFrameIndex);

    // Buttons ko Gallery section mein jodein.
    const gallerySection = document.getElementById('gallery');
    
    // Buttons container.
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'slider-controls';

    // Pichla button.
    const prevButton = document.createElement('button');
    prevButton.textContent = '◀ Previous';
    prevButton.onclick = prevFrame;

    // Agla button.
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next ▶';
    nextButton.onclick = nextFrame;

    // Buttons ko container mein jodein.
    buttonContainer.appendChild(prevButton);
    buttonContainer.appendChild(nextButton);

    // Button Container ko Gallery Grid se pehle jodein.
    const galleryGrid = document.querySelector('.gallery-grid');
    gallerySection.insertBefore(buttonContainer, galleryGrid);
    
    // Gallery Grid ke style ko block mein badal dein.
    galleryGrid.style.display = 'block'; 

});