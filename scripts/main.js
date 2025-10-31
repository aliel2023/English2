// ===== Mobile Menu Toggle =====
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// ===== Email Modal =====
function openEmailModal() {
    const modal = document.getElementById('emailModal');
    modal.classList.add('active');
}

function closeEmailModal() {
    const modal = document.getElementById('emailModal');
    modal.classList.remove('active');
}

// Close modal on outside click
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeEmailModal();
            }
        });
    }
});

// ===== Email Form Submission =====
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            
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
            
            // Show success message
            alert(`Təşəkkürlər ${name}! Pulsuz e-kitab email ünvanınıza göndəriləcək.`);
            
            // Track download (increment counter)
            let downloads = parseInt(localStorage.getItem('totalDownloads') || '0');
            downloads++;
            localStorage.setItem('totalDownloads', downloads.toString());
            
            closeEmailModal();
            emailForm.reset();
            
            // Redirect to resources page
            setTimeout(() => {
                window.location.href = 'resources.html';
            }, 1500);
        });
    }
});

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
document.addEventListener('DOMContentLoaded', function() {
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
});

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

document.addEventListener('DOMContentLoaded', setActiveNav);

// ===== Download Statistics Alert =====
function showDownloadStats() {
    const downloads = parseInt(localStorage.getItem('totalDownloads') || '0');
    if (downloads > 0) {
        console.log(`Ümumi yükləmələr: ${downloads}`);
    }
}

// ===== Keyboard Accessibility =====
document.addEventListener('keydown', function(e) {
    // Escape key closes modal
    if (e.key === 'Escape') {
        const modal = document.getElementById('emailModal');
        if (modal && modal.classList.contains('active')) {
            closeEmailModal();
        }
    }
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
    showDownloadStats();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('navMenu');
        const toggle = document.querySelector('.mobile-toggle');
        
        if (navMenu && toggle) {
            if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        }
    });
});
