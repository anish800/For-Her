
const slides = document.getElementById('slides');
const slideElements = slides.children;
const totalSlides = slideElements.length;
let currentIndex = 0;

function revealContent() {
    const content = document.getElementById('mainContent');
    content.style.display = 'block';
    content.classList.add('fade-in');



    const music = document.getElementById('bgMusic');
    music.volume = 0.4;
    music.playbackRate = 0.89;
    music.play().catch(() => {
        alert("Please tap the screen to enable music.");
    });

    typeCurrentSlide(); // Show first slide with typing
}

function typeCurrentSlide() {
    const slide = slideElements[currentIndex];
    const text = slide.dataset.fullText || slide.textContent;
    slide.dataset.fullText = text;
    slide.textContent = '';

    let i = 0;
    function type() {
        if (i < text.length) {
            slide.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50); // Typing speed
        }
    }
    type();
    updateSlide();
}

function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        typeCurrentSlide();
    } else {
        showFinalMessage();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        typeCurrentSlide();
    }
}

function showFinalMessage() {
    const message = "Thank you for being my everything. ❤️";
    const typingElement = document.getElementById('typingText');
    typingElement.innerHTML = "";
    let index = 0;

    function type() {
        if (index < message.length) {
            typingElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(type, 70);
        }
    }

    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'block';
    type();
}

function backToHeart() {
    currentIndex = 0;
    updateSlide();
    document.getElementById('finalMessage').style.display = 'none';
    document.getElementById('startingContent').style.display = 'block';
}
