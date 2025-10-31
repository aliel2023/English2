// ===== Test Questions Database =====
const testQuestions = {
    A1: [
        { q: "What is your name?", opts: ["My name is John", "I am 25", "I live in Baku", "Yes"], correct: 0 },
        { q: "How _____ you?", opts: ["is", "are", "am", "be"], correct: 1 },
        { q: "I _____ a student.", opts: ["am", "is", "are", "be"], correct: 0 },
        { q: "This is _____ book.", opts: ["a", "an", "the", "my"], correct: 3 },
        { q: "She _____ English.", opts: ["speak", "speaks", "speaking", "to speak"], correct: 1 },
        { q: "They _____ from Turkey.", opts: ["is", "am", "are", "be"], correct: 2 },
        { q: "_____ is your teacher?", opts: ["What", "Who", "Where", "When"], correct: 1 },
        { q: "I _____ coffee every morning.", opts: ["drink", "drinks", "drinking", "drank"], correct: 0 },
        { q: "There _____ two cats.", opts: ["is", "are", "am", "be"], correct: 1 },
        { q: "My sister _____ tall.", opts: ["am", "is", "are", "be"], correct: 1 },
        { q: "_____ you like pizza?", opts: ["Do", "Does", "Is", "Are"], correct: 0 },
        { q: "We _____ to school.", opts: ["go", "goes", "going", "went"], correct: 0 },
        { q: "The book is _____ the table.", opts: ["in", "on", "at", "under"], correct: 1 },
        { q: "I have _____ apple.", opts: ["a", "an", "the", "some"], correct: 1 },
        { q: "_____ are you from?", opts: ["What", "Who", "Where", "When"], correct: 2 }
    ],
    A2: [
        { q: "I _____ to the cinema yesterday.", opts: ["go", "went", "going", "goes"], correct: 1 },
        { q: "She _____ English for 3 years.", opts: ["learn", "learning", "has learned", "learned"], correct: 2 },
        { q: "They _____ in London since 2020.", opts: ["live", "lived", "have lived", "are living"], correct: 2 },
        { q: "I _____ my homework now.", opts: ["do", "did", "am doing", "have done"], correct: 2 },
        { q: "He is _____ than his brother.", opts: ["tall", "taller", "tallest", "more tall"], correct: 1 },
        { q: "We _____ go there tomorrow.", opts: ["will", "would", "can", "must"], correct: 0 },
        { q: "She told me _____ wait.", opts: ["to", "for", "at", "of"], correct: 0 },
        { q: "I have _____ finished.", opts: ["yet", "already", "still", "just"], correct: 3 },
        { q: "_____ you ever been to Paris?", opts: ["Did", "Do", "Have", "Are"], correct: 2 },
        { q: "He _____ play guitar when he was young.", opts: ["can", "could", "should", "would"], correct: 1 },
        { q: "If it rains, I _____ stay home.", opts: ["will", "would", "can", "must"], correct: 0 },
        { q: "She is good _____ mathematics.", opts: ["in", "at", "on", "for"], correct: 1 },
        { q: "I'm looking _____ my keys.", opts: ["at", "for", "after", "forward"], correct: 1 },
        { q: "The meeting was _____ 3 PM.", opts: ["in", "on", "at", "by"], correct: 2 },
        { q: "He _____ here since morning.", opts: ["is", "was", "has been", "had been"], correct: 2 },
        { q: "I'd like _____ water, please.", opts: ["a", "an", "some", "any"], correct: 2 },
        { q: "She speaks _____ fluently.", opts: ["English", "english", "the English", "an English"], correct: 0 },
        { q: "We _____ each other for 5 years.", opts: ["know", "knew", "have known", "are knowing"], correct: 2 },
        { q: "The book _____ by J.K. Rowling.", opts: ["wrote", "written", "was written", "has written"], correct: 2 },
        { q: "I'm _____ forward to the trip.", opts: ["look", "looks", "looked", "looking"], correct: 3 }
    ],
    B1: [
        { q: "If I _____ rich, I would travel the world.", opts: ["am", "was", "were", "be"], correct: 2 },
        { q: "The book _____ by millions.", opts: ["reads", "is read", "has read", "reading"], correct: 1 },
        { q: "I wish I _____ speak Chinese.", opts: ["can", "could", "will", "would"], correct: 1 },
        { q: "She suggested _____ early.", opts: ["leave", "to leave", "leaving", "left"], correct: 2 },
        { q: "By next year, I _____ here for 10 years.", opts: ["work", "worked", "will work", "will have worked"], correct: 3 },
        { q: "The house _____ needs painting.", opts: ["badly", "bad", "worse", "worst"], correct: 0 },
        { q: "I'd rather you _____ come.", opts: ["don't", "didn't", "won't", "wouldn't"], correct: 1 },
        { q: "He _____ have left by now.", opts: ["can", "may", "must", "should"], correct: 2 },
        { q: "Having _____ the letter, she felt relieved.", opts: ["send", "sent", "sending", "to send"], correct: 1 },
        { q: "_____ the rain, we went out.", opts: ["Despite", "Although", "However", "But"], correct: 0 },
        { q: "She's used to _____ alone.", opts: ["live", "living", "lived", "lives"], correct: 1 },
        { q: "The sooner we start, _____ we'll finish.", opts: ["the earlier", "the more early", "earlier", "early"], correct: 0 },
        { q: "I'm not _____ to make that decision.", opts: ["qualified", "qualifying", "qualification", "qualify"], correct: 0 },
        { q: "It's high time you _____ a job.", opts: ["get", "got", "getting", "to get"], correct: 1 },
        { q: "_____ he studied hard, he failed.", opts: ["Despite", "Although", "However", "But"], correct: 1 },
        { q: "The machine _____ properly.", opts: ["doesn't work", "isn't working", "hasn't worked", "didn't work"], correct: 0 },
        { q: "I'd prefer _____ at home.", opts: ["stay", "to stay", "staying", "stayed"], correct: 1 },
        { q: "She _____ have been surprised.", opts: ["can", "may", "must", "should"], correct: 2 },
        { q: "_____ my knowledge, he's retired.", opts: ["To", "For", "With", "By"], correct: 0 },
        { q: "The report needs _____ by Friday.", opts: ["finish", "finished", "finishing", "to finish"], correct: 2 },
        { q: "I'm _____ interested in history.", opts: ["quite", "quiet", "quit", "quite a"], correct: 0 },
        { q: "He's _____ intelligent to believe that.", opts: ["too", "very", "so", "enough"], correct: 0 },
        { q: "_____ losing, they celebrated.", opts: ["Despite", "Although", "However", "In spite"], correct: 0 },
        { q: "She's _____ of three children.", opts: ["a mother", "mother", "the mother", "mothers"], correct: 2 },
        { q: "I _____ seen him in years.", opts: ["haven't", "didn't", "wasn't", "don't"], correct: 0 }
    ],
    B2: [
        { q: "By the time you arrive, I _____ the work.", opts: ["finish", "finished", "will have finished", "am finishing"], correct: 2 },
        { q: "Had I known, I _____ differently.", opts: ["act", "acted", "would act", "would have acted"], correct: 3 },
        { q: "Rarely _____ such dedication.", opts: ["I have seen", "have I seen", "I saw", "did I see"], correct: 1 },
        { q: "The proposal _____ under consideration.", opts: ["is", "has", "being", "been"], correct: 0 },
        { q: "_____ to the report, sales increased.", opts: ["According", "Due", "Owing", "Thanks"], correct: 0 },
        { q: "She's _____ to be the best candidate.", opts: ["likely", "liked", "likelihood", "liking"], correct: 0 },
        { q: "No sooner _____ than it started raining.", opts: ["we arrived", "had we arrived", "we had arrived", "did we arrive"], correct: 1 },
        { q: "The issue _____ resolved yet.", opts: ["hasn't been", "isn't been", "wasn't been", "didn't been"], correct: 0 },
        { q: "_____ circumstances, I'd agree.", opts: ["In other", "Under other", "With other", "At other"], correct: 1 },
        { q: "He's not _____ he used to be.", opts: ["as energetic as", "energetic as", "so energetic", "energetic so"], correct: 0 },
        { q: "The more I learn, _____ I realize I don't know.", opts: ["the more", "more", "most", "the most"], correct: 0 },
        { q: "_____ being late, he was also unprepared.", opts: ["Besides", "Beside", "Despite", "Although"], correct: 0 },
        { q: "She _____ have completed the project by now.", opts: ["must", "should", "would", "could"], correct: 1 },
        { q: "The decision _____ after careful deliberation.", opts: ["took", "was taken", "had taken", "has taken"], correct: 1 },
        { q: "_____ the difficulties, we persevered.", opts: ["Despite", "Although", "However", "Nevertheless"], correct: 0 },
        { q: "The data _____ carefully analyzed.", opts: ["need", "needs", "needed", "needing"], correct: 2 },
        { q: "It's imperative that he _____ on time.", opts: ["is", "be", "will be", "being"], correct: 1 },
        { q: "The committee _____ a decision yesterday.", opts: ["reached", "arrived", "got", "came"], correct: 0 },
        { q: "_____ your assistance, we couldn't have succeeded.", opts: ["Without", "With", "Besides", "Despite"], correct: 0 },
        { q: "The phenomenon _____ extensively.", opts: ["studied", "has studied", "was studied", "has been studied"], correct: 3 },
        { q: "_____ the circumstances, it was inevitable.", opts: ["Given", "Giving", "Give", "Gave"], correct: 0 },
        { q: "She's _____ capable of handling it.", opts: ["more than", "more as", "as more", "than more"], correct: 0 },
        { q: "The project _____ considerable investment.", opts: ["requires", "requests", "demands", "needs"], correct: 0 },
        { q: "_____ to say, he was furious.", opts: ["Needless", "Useless", "Hopeless", "Careless"], correct: 0 },
        { q: "The findings _____ our hypothesis.", opts: ["confirm", "conforms", "conform", "confirmed"], correct: 0 },
        { q: "It's _____ that immediate action be taken.", opts: ["vital", "vitally", "vitality", "vitalize"], correct: 0 },
        { q: "The proposal met with _____ resistance.", opts: ["fierce", "fiercely", "fierceness", "fiercer"], correct: 0 },
        { q: "_____ the evidence, the verdict was clear.", opts: ["In light of", "In spite of", "Because of", "Due to"], correct: 0 },
        { q: "The atmosphere was _____ tense.", opts: ["distinctly", "distinct", "distinction", "distinctive"], correct: 0 },
        { q: "His contribution _____ acknowledged.", opts: ["was", "were", "has", "have"], correct: 0 }
    ],
    C1: [
        { q: "Scarcely _____ arrived when the meeting started.", opts: ["had we", "we had", "have we", "we have"], correct: 0 },
        { q: "The implications _____ far-reaching.", opts: ["are", "is", "was", "were"], correct: 0 },
        { q: "He _____ have been more explicit.", opts: ["couldn't", "mustn't", "shouldn't", "wouldn't"], correct: 0 },
        { q: "The policy _____ considerable scrutiny.", opts: ["underwent", "undertook", "overcome", "overtook"], correct: 0 },
        { q: "_____ were the circumstances, we had no choice.", opts: ["Such", "So", "These", "Those"], correct: 0 }
    ],
    C2: [
        { q: "The nuances _____ subtle yet significant.", opts: ["are", "is", "was", "were"], correct: 0 },
        { q: "His erudition _____ apparent.", opts: ["was", "were", "is", "are"], correct: 0 },
        { q: "The discourse _____ sophisticated analysis.", opts: ["requires", "require", "requiring", "required"], correct: 0 },
        { q: "_____ the paradigm shift, adaptation is essential.", opts: ["Given", "Giving", "Gave", "Give"], correct: 0 },
        { q: "The methodology _____ rigorous examination.", opts: ["warrants", "warrant", "warranting", "warranted"], correct: 0 }
    ]
};

// ===== Test State =====
let currentLevel = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let timeRemaining = 0;

// ===== Start Test =====
function startTest(level) {
    currentLevel = level;
    currentQuestions = [...testQuestions[level]];
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    
    // Set timer based on level
    const timerMinutes = {
        'A1': 10, 'A2': 15, 'B1': 20,
        'B2': 25, 'C1': 30, 'C2': 35
    };
    timeRemaining = timerMinutes[level] * 60;
    
    // Hide level selection, show test interface
    document.getElementById('levelSelection').classList.add('hidden');
    document.getElementById('testInterface').classList.remove('hidden');
    
    // Start timer
    startTimer();
    
    // Show first question
    showQuestion();
}

// ===== Timer =====
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishTest();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timerDisplay').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ===== Show Question =====
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = 
        `Sual ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    
    // Update question
    document.getElementById('questionNumber').textContent = `Sual ${currentQuestionIndex + 1}`;
    document.getElementById('questionText').textContent = question.q;
    
    // Update options
    const optionsGrid = document.getElementById('optionsGrid');
    optionsGrid.innerHTML = '';
    
    question.opts.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => selectOption(index);
        
        if (userAnswers[currentQuestionIndex] === index) {
            btn.classList.add('selected');
        }
        
        optionsGrid.appendChild(btn);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = userAnswers[currentQuestionIndex] === null;
    document.getElementById('nextBtn').textContent = 
        currentQuestionIndex === currentQuestions.length - 1 ? 'Bitir' : 'Növbəti →';
}

// ===== Select Option =====
function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    
    // Update UI
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

// ===== Navigation =====
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        finishTest();
    }
}

// ===== Finish Test =====
function finishTest() {
    clearInterval(timerInterval);
    
    // Calculate score
    let correctAnswers = 0;
    currentQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) {
            correctAnswers++;
        }
    });
    
    const percentage = (correctAnswers / currentQuestions.length) * 100;
    
    // Save to localStorage
    updateProgress(currentLevel, correctAnswers, percentage);
    
    // Show results
    showResults(correctAnswers, percentage);
}

// ===== Show Results =====
function showResults(score, percentage) {
    document.getElementById('testInterface').classList.add('hidden');
    document.getElementById('testResults').classList.remove('hidden');
    
    // Animate score
    let currentScore = 0;
    const scoreInterval = setInterval(() => {
        currentScore++;
        document.getElementById('scoreNumber').textContent = currentScore;
        document.getElementById('scorePercentage').textContent = 
            `${Math.round((currentScore / currentQuestions.length) * 100)}%`;
        
        if (currentScore >= score) {
            clearInterval(scoreInterval);
        }
    }, 50);
    
    // Set level badge
    document.getElementById('levelBadge').textContent = currentLevel;
    
    // Set message and action based on score
    const resultsIcon = document.getElementById('resultsIcon');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsMessage = document.getElementById('resultsMessage');
    const resultsAction = document.getElementById('resultsAction');
    
    if (percentage >= 70) {
        resultsIcon.textContent = '🎉';
        resultsTitle.textContent = 'Təbriklər!';
        resultsMessage.innerHTML = `
            <p><strong>Əla nəticə!</strong> Siz ${currentLevel} səviyyəsini uğurla keçdiniz.</p>
            <p>İndi Premium materiallarımızla öyrənməni davam etdirin və növbəti səviyyəyə keçin!</p>
        `;
        resultsAction.textContent = 'Premium Planlara Bax';
        resultsAction.onclick = () => window.location.href = 'pricing.html';
    } else {
        resultsIcon.textContent = '💪';
        resultsTitle.textContent = 'Daha Çox Məşq Lazımdır';
        resultsMessage.innerHTML = `
            <p>Narahat olmayın! Hər kəs öz templini tapa bilər.</p>
            <p>Bizim pulsuz resurslarımızla təlimə davam edin və yenidən cəhd edin.</p>
        `;
        resultsAction.textContent = 'Pulsuz Resurslar';
        resultsAction.onclick = () => window.location.href = 'resources.html';
    }
}

// ===== Handle Results Action =====
function handleResultsAction() {
    const percentage = (userAnswers.filter((ans, i) => ans === currentQuestions[i].correct).length / currentQuestions.length) * 100;
    
    if (percentage >= 70) {
        window.location.href = 'pricing.html';
    } else {
        window.location.href = 'resources.html';
    }
}

// ===== Restart Test =====
function restartTest() {
    document.getElementById('testResults').classList.add('hidden');
    document.getElementById('levelSelection').classList.remove('hidden');
}