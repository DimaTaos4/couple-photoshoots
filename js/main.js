const images = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=1600&q=80"
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function changeImage(index) {
    sliderImage.classList.add("fade-out");

    setTimeout(() => {
        sliderImage.src = images[index];
        sliderImage.classList.remove("fade-out");
        sliderImage.classList.add("fade-in");
    }, 200);
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
});