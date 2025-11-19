// ===== MAIN.JS - Language System & Core Functions =====

// ===== Language Switcher =====
function switchLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save to localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update active button
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        const btnLang = btn.getAttribute('onclick').match(/'([a-z]{2})'/)[1];
        btn.classList.toggle('active', btnLang === lang);
    });
    
    // Translate page
    translatePage(lang);
}

// ===== Translate Page Content =====
function translatePage(lang) {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Translate navigation manually (for pages without data-i18n)
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navKeys = ['nav-home', 'nav-daily', 'nav-test', 'nav-resources', 'nav-pricing', 'nav-contact'];
    navLinks.forEach((link, index) => {
        if (translations[lang] && translations[lang][navKeys[index]]) {
            link.textContent = translations[lang][navKeys[index]];
        }
    });
}

// ===== Mobile Menu Toggle =====
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.querySelector('.mobile-toggle');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
    if (mobileToggle) {
        mobileToggle.classList.toggle('active');
    }
}

// ===== Email Modal =====
function openEmailModal() {
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeEmailModal() {
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// ===== Email Form Submission =====
function handleEmailFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName')?.value;
    const email = document.getElementById('userEmail')?.value;
    
    if (!name || !email) {
        alert('Please fill in all fields');
        return;
    }
    
    // Save to localStorage
    const userData = {
        name: name,
        email: email,
        date: new Date().toISOString(),
        progress: {
            level: 'A1',
            completedLessons: 0,
            testScore: 0
        }
    };
    
    localStorage.setItem('alielUser', JSON.stringify(userData));
    
    // Get current language for alert
    const lang = document.documentElement.lang || 'az';
    const messages = {
        az: `Təşəkkürlər ${name}! Pulsuz e-kitab email ünvanınıza göndəriləcək.`,
        en: `Thank you ${name}! The free e-book will be sent to your email.`,
        ru: `Спасибо ${name}! Бесплатная электронная книга будет отправлена на ваш email.`,
        tr: `Teşekkürler ${name}! Ücretsiz e-kitap email adresinize gönderilecek.`
    };
    
    alert(messages[lang] || messages.az);
    
    // Track download
    let downloads = parseInt(localStorage.getItem('totalDownloads') || '0');
    downloads++;
    localStorage.setItem('totalDownloads', downloads.toString());
    
    closeEmailModal();
    e.target.reset();
    
    // Redirect to resources page
    setTimeout(() => {
        window.location.href = 'resources.html';
    }, 1500);
}

// ===== Progress Tracker =====
function getUserProgress() {
    const userData = localStorage.getItem('alielUser');
    if (userData) {
        return JSON.parse(userData).progress;
    }
    return null;
}

function updateProgress(level, lessons, score) {
    const userData = JSON.parse(localStorage.getItem('alielUser') || '{}');
    if (userData.progress) {
        userData.progress.level = level;
        userData.progress.completedLessons = lessons;
        userData.progress.testScore = score;
        localStorage.setItem('alielUser', JSON.stringify(userData));
    }
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Active Navigation Highlight =====
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== Download Statistics =====
function showDownloadStats() {
    const downloads = parseInt(localStorage.getItem('totalDownloads') || '0');
    if (downloads > 0) {
        console.log(`Total downloads: ${downloads}`);
    }
}

// ===== FAQ Toggle (for pricing and contact pages) =====
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// ===== Keyboard Accessibility =====
function initKeyboardAccessibility() {
    document.addEventListener('keydown', function(e) {
        // Escape key closes modals
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal.active');
            modals.forEach(modal => modal.classList.remove('active'));
        }
    });
}

// ===== Initialize on DOM Load =====
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language or default to 'az'
    const savedLang = localStorage.getItem('selectedLanguage') || 'az';
    switchLanguage(savedLang);
    
    // Set active navigation
    setActiveNav();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize keyboard accessibility
    initKeyboardAccessibility();
    
    // Show download stats in console
    showDownloadStats();
    
    // Email modal close on outside click
    const emailModal = document.getElementById('emailModal');
    if (emailModal) {
        emailModal.addEventListener('click', function(e) {
            if (e.target === emailModal) {
                closeEmailModal();
            }
        });
    }
    
    // Email form submission
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', handleEmailFormSubmit);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('navMenu');
        const toggle = document.querySelector('.mobile-toggle');
        
        if (navMenu && toggle) {
            if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
                navMenu.classList.remove('active');
                toggle.classList.remove('active');
            }
        }
    });
});