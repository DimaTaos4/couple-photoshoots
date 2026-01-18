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

/**
 * ============================================
 * MAIN JAVASCRIPT FILE
 * Photographer Landing Page
 * ============================================
 *
 * Содержит:
 * FAQ Accordion - кастомный аккордеон
 */

document.addEventListener('DOMContentLoaded', function () {
    // ========================================
    // FAQ ACCORDION
    // ========================================
    // [НАСТРОЙКА] Позволяет открывать несколько вопросов одновременно
    // Чтобы открывать только один вопрос: смотрите COMPONENTS-GUIDE.md

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        // Initially hide all answers
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.4s ease';

        // Add click event listener
        question.addEventListener('click', function () {
            toggleFAQ(item, answer, icon);
        });

        // Add keyboard support (Enter and Space)
        question.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ(item, answer, icon);
            }
        });

        // Add ARIA attributes
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', `faq-answer-${index}`);
        answer.setAttribute('id', `faq-answer-${index}`);
    });

    /**
     * Toggle FAQ item open/close
     * @param {HTMLElement} item - FAQ item element
     * @param {HTMLElement} answer - Answer element
     * @param {HTMLElement} icon - Icon element (+ or −)
     */
    function toggleFAQ(item, answer, icon) {
        const isOpen = item.classList.contains('active');

        if (isOpen) {
            // Close the item
            item.classList.remove('active');
            answer.style.maxHeight = '0';
            icon.textContent = '+';
            item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        } else {
            // Open the item
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.textContent = '−';
            item.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
        }
    }

});
