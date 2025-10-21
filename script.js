document.addEventListener('DOMContentLoaded', () => {

    // --- SMOOTH SCROLL & ACTIVE LINK HIGHLIGHTING ---
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu on click
                document.getElementById("navMenu").classList.remove("active");
            }
        });
    });

    // --- MOBILE MENU TOGGLE ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // --- ANIMATED COUNTERS ON SCROLL ---
    const statsSection = document.querySelector('.stats-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    const animateCounters = () => {
        if (countersAnimated) return;
        countersAnimated = true;
        statNumbers.forEach(element => {
            const target = parseInt(element.getAttribute('data-count'));
            const duration = 2000;
            let current = 0;
            const stepTime = 16; // roughly 60fps
            const increment = target / (duration / stepTime);

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current).toLocaleString();
                }
            }, stepTime);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) observer.observe(statsSection);

    // --- DAILY WORD AUDIO ---
    const audioBtn = document.querySelector('.word-audio-btn');
    if(audioBtn) {
        audioBtn.addEventListener('click', () => {
            // Placeholder for text-to-speech functionality
            alert("Səsləndirmə funksiyası tezliklə aktiv olacaq!");
        });
    }

    // --- LEVEL TEST LOGIC ---
    const testQuestions = {
        A1: [
            { question: "What ___ your name?", options: ["is", "are", "am", "be"], correct: 0 },
            { question: "I ___ a student.", options: ["am", "is", "are", "be"], correct: 0 },
            { question: "They ___ from Azerbaijan.", options: ["is", "are", "am", "be"], correct: 1 }
        ],
        A2: [
            { question: "I ___ to the cinema yesterday.", options: ["go", "went", "gone", "goes"], correct: 1 },
            { question: "She ___ English for 3 years.", options: ["learns", "learning", "has learned", "learned"], correct: 2 },
            { question: "There isn't ___ milk in the fridge.", options: ["some", "any", "a", "an"], correct: 1 }
        ],
        B1: [
            { question: "If I ___ rich, I would travel the world.", options: ["am", "was", "were", "be"], correct: 2 },
            { question: "The book ___ by millions of people.", options: ["is reading", "is read", "has read", "reads"], correct: 1 },
            { question: "I suggest ___ a doctor.", options: ["to see", "seeing", "see", "saw"], correct: 1 }
        ],
        B2: [
            { question: "By the time you arrive, I ___ the work.", options: ["finish", "finished", "will have finished", "am finishing"], correct: 2 },
            { question: "Had I known, I ___ differently.", options: ["act", "acted", "would act", "would have acted"], correct: 3 },
            { question: "She is renowned ___ her innovative research.", options: ["for", "of", "with", "by"], correct: 0 }
        ],
        C1: [
            { question: "Not only ___ the exam, but she also got the highest score.", options: ["did she pass", "she passed", "has she passed", "she has passed"], correct: 0 },
            { question: "The company is on the ___ of a major breakthrough.", options: ["edge", "verge", "side", "limit"], correct: 1 }
        ],
        C2: [
            { question: "The politician's speech was ___ with platitudes.", options: ["rife", "full", "abundant", "plenty"], correct: 0 },
            { question: "He was ___ in the performance of his duties.", options: ["assiduous", "dubious", "precarious", "fatuous"], correct: 0 }
        ]
    };

    const levelButtons = document.querySelectorAll('.level-btn');
    const quizContainer = document.getElementById('quizContainer');
    let currentTest = null;
    let currentQuestionIndex = 0;
    let score = 0;

    levelButtons.forEach(button => {
        button.addEventListener('click', () => startTest(button.dataset.level));
    });

    function startTest(level) {
        currentTest = testQuestions[level];
        currentQuestionIndex = 0;
        score = 0;
        quizContainer.classList.add('active');
        showQuestion();
    }

    function showQuestion() {
        const question = currentTest[currentQuestionIndex];
        quizContainer.innerHTML = `
            <div id="questionText" class="question">Sual ${currentQuestionIndex + 1}/${currentTest.length}: ${question.question}</div>
            <div class="options" id="optionsContainer">
                ${question.options.map((opt, idx) => `<button class="option-btn" data-index="${idx}">${opt}</button>`).join('')}
            </div>
            <div class="test-nav-buttons">
                <button class="cta-button" id="nextQuestionBtn" disabled>Növbəti Sual</button>
            </div>
        `;
        document.querySelectorAll('.option-btn').forEach(btn => btn.addEventListener('click', selectAnswer));
        document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const selectedIndex = parseInt(selectedButton.dataset.index);
        const correctIndex = currentTest[currentQuestionIndex].correct;

        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (parseInt(btn.dataset.index) === correctIndex) {
                btn.classList.add('correct');
            }
        });
        
        if (selectedIndex === correctIndex) {
            score++;
        } else {
            selectedButton.classList.add('wrong');
        }

        document.getElementById('nextQuestionBtn').disabled = false;
        if (currentQuestionIndex === currentTest.length - 1) {
            document.getElementById('nextQuestionBtn').textContent = 'Nəticəni Gör';
        }
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentTest.length) {
            showQuestion();
        } else {
            showResults();
        }
    }
    
    function showResults() {
        const percentage = (score / currentTest.length) * 100;
        const passMessage = percentage >= 70 ? 'Təbriklər! Siz bu səviyyəni keçdiniz! 🎉' : 'Daha çox təlim lazımdır. 💪';
        quizContainer.innerHTML = `
            <div class="test-result-box">
                <h3 style="font-size: 2rem;">Nəticə: ${score}/${currentTest.length} (${percentage.toFixed(0)}%)</h3>
                <p style="font-size: 1.2rem;">${passMessage}</p>
                <button class="cta-button" onclick="location.reload()">Yenidən Başla</button>
            </div>
        `;
    }

    // --- FLASHCARD LOGIC ---
    const flashcards = [
        { front: "ACHIEVEMENT", back: "Nailiyyət, uğur" },
        { front: "AMBITION", back: "İddia, məqsəd" },
        { front: "CONFIDENT", back: "Özünə inamlı" },
        { front: "DETERMINED", back: "Qərarlı" },
        { front: "ENTHUSIASTIC", back: "Həvəsli, coşğun" }
    ];
    let currentCardIndex = 0;
    const flashcardEl = document.getElementById('flashcard');
    const cardNumberEl = document.getElementById('cardNumber');
    const totalCardsEl = document.getElementById('totalCards');

    totalCardsEl.textContent = flashcards.length;

    const updateCard = () => {
        const card = flashcards[currentCardIndex];
        flashcardEl.querySelector('.flashcard-front .flashcard-content').textContent = card.front;
        flashcardEl.querySelector('.flashcard-back .flashcard-content').textContent = card.back;
        cardNumberEl.textContent = currentCardIndex + 1;
        flashcardEl.classList.remove('flipped');
    };

    flashcardEl.addEventListener('click', () => flashcardEl.classList.toggle('flipped'));

    document.getElementById('nextCardBtn').addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        updateCard();
    });

    document.getElementById('prevCardBtn').addEventListener('click', () => {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        updateCard();
    });
    
    // --- MODAL LOGIC ---
    const modal = document.getElementById('emailModal');
    const openModalBtns = document.querySelectorAll('.open-modal-btn, #openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

    const openModal = () => modal.classList.add('active');
    const closeModal = () => modal.classList.remove('active');

    openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.getElementById('emailForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Təşəkkür edirik! E-kitab email ünvanınıza göndəriləcək.');
        closeModal();
        e.target.reset();
    });

    // --- CONTACT FORM LOGIC ---
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const successMsg = document.getElementById('successMessage');
        successMsg.style.display = 'block';
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 3000);
        this.reset();
    });
});
