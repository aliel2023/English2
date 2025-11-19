// ===== MULTILINGUAL i18n SYSTEM =====

let currentLang = 'az';
let translations = {};

// ===== Load Language JSON =====
async function loadLanguage(lang) {
    try {
        const response = await fetch(`i18n/${lang}.json`);
        if (!response.ok) throw new Error('Language file not found');
        translations = await response.json();
        currentLang = lang;
        return true;
    } catch (error) {
        console.error(`Failed to load language: ${lang}`, error);
        return false;
    }
}

// ===== Switch Language =====
async function switchLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save to localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('onclick').match(/'([a-z]{2})'/)?.[1];
        btn.classList.toggle('active', btnLang === lang);
    });
    
    // Load language file
    const loaded = await loadLanguage(lang);
    
    if (loaded) {
        translatePage();
    }
}

// ===== Translate Page =====
function translatePage() {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getNestedTranslation(key);
        
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.innerHTML = translation;
            }
        }
    });
}

// ===== Get Nested Translation (e.g., "nav.home") =====
function getNestedTranslation(key) {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// ===== Get Translation (helper for JS) =====
function t(key, replacements = {}) {
    let translation = getNestedTranslation(key) || key;
    
    // Replace placeholders like {level}
    Object.keys(replacements).forEach(placeholder => {
        translation = translation.replace(`{${placeholder}}`, replacements[placeholder]);
    });
    
    return translation;
}

// ===== Initialize i18n on Page Load =====
async function initI18n() {
    // Get saved language or default to 'az'
    const savedLang = localStorage.getItem('selectedLanguage') || 'az';
    
    // Load language
    await loadLanguage(savedLang);
    
    // Update HTML lang
    document.documentElement.lang = savedLang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('onclick').match(/'([a-z]{2})'/)?.[1];
        btn.classList.toggle('active', btnLang === savedLang);
    });
    
    // Translate page
    translatePage();
}

// ===== Auto-init when DOM ready =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}