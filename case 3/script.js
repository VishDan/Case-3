document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById("slider-image");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const imageCounter = document.getElementById("image-counter");

    function updateImage() {
        imageElement.src = images[currentIndex];
        imageCounter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    updateImage();
});
