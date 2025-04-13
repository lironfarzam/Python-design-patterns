// פונקציה להדגשת קוד
function highlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

// פונקציה לחיפוש בתפריט הצדדי
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const links = document.querySelectorAll('.pattern-group a');
            
            links.forEach(link => {
                const text = link.textContent.toLowerCase();
                const li = link.parentElement;
                if (text.includes(searchTerm)) {
                    li.style.display = '';
                } else {
                    li.style.display = 'none';
                }
            });
        });
    }
}

// פונקציה להפעלת מצב לילה
function setupDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
}

// הפעל את כל הפונקציות כאשר הדף נטען
document.addEventListener('DOMContentLoaded', () => {
    highlightCode();
    setupSearch();
    setupDarkMode();
}); 