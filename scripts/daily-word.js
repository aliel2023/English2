// ===== Word Database =====
const wordDatabase = [
    {
        word: "ACCOMPLISH",
        pronunciation: "/əˈkʌmplɪʃ/",
        type: "verb",
        level: "A2",
        translation: "Başarmaq, həyata keçirmək, nail olmaq",
        definition: "To succeed in doing or completing something, especially something difficult",
        examples: [
            {
                en: "She accomplished her goal of learning English in one year.",
                az: "O, bir il ərzində ingilis dili öyrənmək məqsədinə çatdı."
            },
            {
                en: "The team accomplished a lot during the project.",
                az: "Komanda layihə zamanı çox şey bacardı."
            }
        ],
        synonyms: ["achieve", "complete", "fulfill", "succeed"],
        date: "2025-01-15"
    },
    {
        word: "CHALLENGE",
        pronunciation: "/ˈtʃælɪndʒ/",
        type: "noun",
        level: "A2",
        translation: "Çətinlik, sınaq, problem",
        definition: "Something new and difficult that requires great effort and determination",
        examples: [
            {
                en: "Learning a new language is a big challenge.",
                az: "Yeni dil öyrənmək böyük bir sınaqdır."
            },
            {
                en: "She faced many challenges in her career.",
                az: "O, karyerasında bir çox çətinliklərlə üzləşdi."
            }
        ],
        synonyms: ["difficulty", "problem", "obstacle", "test"],
        date: "2025-01-14"
    },
    {
        word: "OPPORTUNITY",
        pronunciation: "/ˌɒpəˈtjuːnəti/",
        type: "noun",
        level: "B1",
        translation: "Fürsət, imkan",
        definition: "A time or situation that makes it possible to do something you want to do",
        examples: [
            {
                en: "This job offers great opportunities for growth.",
                az: "Bu iş inkişaf üçün əla fürsətlər təklif edir."
            },
            {
                en: "Don't miss this opportunity to learn!",
                az: "Bu öyrənmə fürsətini qaçırmayın!"
            }
        ],
        synonyms: ["chance", "possibility", "occasion", "opening"],
        date: "2025-01-13"
    },
    {
        word: "ENTHUSIASM",
        pronunciation: "/ɪnˈθjuːziæzəm/",
        type: "noun",
        level: "B1",
        translation: "Həvəs, coşğu, şövq",
        definition: "A feeling of energetic interest in something and eagerness to be involved in it",
        examples: [
            {
                en: "She showed great enthusiasm for the project.",
                az: "O, layihəyə böyük həvəs göstərdi."
            },
            {
                en: "His enthusiasm is contagious.",
                az: "Onun həvəsi başqalarına da keçir."
            }
        ],
        synonyms: ["excitement", "passion", "eagerness", "zeal"],
        date: "2025-01-12"
    },
    {
        word: "DETERMINE",
        pronunciation: "/dɪˈtɜːmɪn/",
        type: "verb",
        level: "A2",
        translation: "Qərara gəlmək, müəyyən etmək",
        definition: "To decide definitely to do something or find out the facts about something",
        examples: [
            {
                en: "She determined to learn English fluently.",
                az: "O, ingilis dilini səlis öyrənməyə qərar verdi."
            },
            {
                en: "We need to determine the cause.",
                az: "Səbəbi müəyyən etməliyik."
            }
        ],
        synonyms: ["decide", "resolve", "establish", "conclude"],
        date: "2025-01-11"
    }
];

// ===== Initialize Page =====
document.addEventListener('DOMContentLoaded', function() {
    // Set today's date
    const today = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('dailyDate').textContent = today.toLocaleDateString('az-AZ', dateOptions);
    
    // Load today's word (first in database)
    loadWordOfDay();
    
    // Load statistics
    loadStatistics();
    
    // Load archive
    loadArchive();
    
    // Check and update streak
    updateStreak();
});

// ===== Load Word of Day =====
function loadWordOfDay() {
    const todayWord = wordDatabase[0]; // In production, fetch from API
    
    document.getElementById('wordLevel').textContent = `${todayWord.level} LEVEL`;
    document.getElementById('wordTitle').textContent = todayWord.word;
    document.getElementById('wordPronunciation').textContent = todayWord.pronunciation;
    document.getElementById('wordType').textContent = todayWord.type;
    document.getElementById('wordTranslation').textContent = todayWord.translation;
    document.getElementById('wordDefinition').textContent = todayWord.definition;
    
    // Examples
    document.getElementById('example1En').textContent = todayWord.examples[0].en;
    document.getElementById('example1Az').textContent = todayWord.examples[0].az;
    document.getElementById('example2En').textContent = todayWord.examples[1].en;
    document.getElementById('example2Az').textContent = todayWord.examples[1].az;
    
    // Synonyms
    const synonymTags = todayWord.synonyms.map(syn => 
        `<span class="tag">${syn}</span>`
    ).join('');
    document.querySelector('.synonym-tags').innerHTML = synonymTags;
    
    // Mark as seen today
    markWordAsSeen(todayWord.word);
}

// ===== Play Audio =====
function playAudio() {
    // In production, play real audio file
    alert('🔊 Audio oynatma funksiyası tezliklə əlavə olunacaq!\n\nPremium üzvlər üçün professional səsləndirmə mövcuddur.');
    
    // Track audio play
    const audioPlays = parseInt(localStorage.getItem('audioPlays') || '0');
    localStorage.setItem('audioPlays', (audioPlays + 1).toString());
    
    // Simulate audio with Web Speech API (if available)
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(wordDatabase[0].word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    }
}

// ===== Add to Favorites =====
function addToFavorites() {
    const word = wordDatabase[0].word;
    const favorites = JSON.parse(localStorage.getItem('favoriteWords') || '[]');
    
    if (favorites.includes(word)) {
        alert('❤️ Bu söz artıq sevimlilərinizdədir!');
        return;
    }
    
    favorites.push(word);
    localStorage.setItem('favoriteWords', JSON.stringify(favorites));
    
    alert('✅ Söz sevimlilərə əlavə edildi!');
    
    // Update favorite count
    document.getElementById('favoriteCount').textContent = favorites.length;
}

// ===== Share Word =====
function shareWord() {
    const word = wordDatabase[0];
    const shareText = `📚 Günün Sözü: ${word.word}\n\n${word.translation}\n\n${word.examples[0].en}\n\n🔗 Alielenglish ilə öyrən!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Günün Sözü - Alielenglish',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('📋 Mətn kopyalandı! İndi paylaşa bilərsiniz.');
        });
    }
}

// ===== Load Statistics =====
function loadStatistics() {
    const seenWords = JSON.parse(localStorage.getItem('seenWords') || '[]');
    const favorites = JSON.parse(localStorage.getItem('favoriteWords') || '[]');
    const streak = parseInt(localStorage.getItem('currentStreak') || '0');
    
    document.getElementById('totalWordsLearned').textContent = seenWords.length;
    document.getElementById('currentStreak').textContent = streak;
    document.getElementById('favoriteCount').textContent = favorites.length;
    
    // Animate counters
    animateCounter(document.getElementById('totalWordsLearned'), seenWords.length);
    animateCounter(document.getElementById('currentStreak'), streak);
    animateCounter(document.getElementById('favoriteCount'), favorites.length);
}

// ===== Animate Counter =====
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// ===== Mark Word as Seen =====
function markWordAsSeen(word) {
    const seenWords = JSON.parse(localStorage.getItem('seenWords') || '[]');
    
    if (!seenWords.includes(word)) {
        seenWords.push(word);
        localStorage.setItem('seenWords', JSON.stringify(seenWords));
    }
}

// ===== Update Streak =====
function updateStreak() {
    const lastVisit = localStorage.getItem('lastDailyWordVisit');
    const today = new Date().toDateString();
    
    if (lastVisit !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        let streak = parseInt(localStorage.getItem('currentStreak') || '0');
        
        if (lastVisit === yesterday) {
            streak++;
        } else {
            streak = 1;
        }
        
        localStorage.setItem('currentStreak', streak.toString());
        localStorage.setItem('lastDailyWordVisit', today);
    }
}

// ===== Load Archive =====
let displayedArchiveCount = 0;
const archivePerPage = 6;

function loadArchive() {
    const archiveGrid = document.getElementById('archiveGrid');
    const favorites = JSON.parse(localStorage.getItem('favoriteWords') || '[]');
    
    // Skip first word (today's word)
    const archiveWords = wordDatabase.slice(1);
    
    // Load initial batch
    for (let i = displayedArchiveCount; i < Math.min(displayedArchiveCount + archivePerPage, archiveWords.length); i++) {
        const word = archiveWords[i];
        const isFavorite = favorites.includes(word.word);
        
        const card = document.createElement('div');
        card.className = 'archive-card';
        card.dataset.level = word.level;
        card.dataset.favorite = isFavorite;
        card.onclick = () => viewArchivedWord(word);
        
        card.innerHTML = `
            <span class="word-badge">${word.level}</span>
            <h3>${word.word}</h3>
            <p class="pronunciation">${word.pronunciation}</p>
            <p class="translation">${word.translation}</p>
            <p class="date">${word.date}</p>
        `;
        
        archiveGrid.appendChild(card);
    }
    
    displayedArchiveCount += archivePerPage;
    
    // Hide load more button if all loaded
    if (displayedArchiveCount >= archiveWords.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
    }
}

// ===== Load More Archive =====
function loadMoreArchive() {
    loadArchive();
}

// ===== Filter Archive =====
function filterArchive(filter) {
    const cards = document.querySelectorAll('.archive-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards
    cards.forEach(card => {
        if (filter === 'all') {
            card.style.display = 'block';
        } else if (filter === 'favorites') {
            card.style.display = card.dataset.favorite === 'true' ? 'block' : 'none';
        } else {
            card.style.display = card.dataset.level === filter ? 'block' : 'none';
        }
    });
}

// ===== View Archived Word =====
function viewArchivedWord(word) {
    alert(`📚 ${word.word}\n\n${word.translation}\n\n${word.examples[0].en}\n\nPremium üzvlüklə bütün arxiv sözlərə tam giriş əldə edin!`);
}