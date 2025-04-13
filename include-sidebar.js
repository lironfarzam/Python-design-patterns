// פונקציה לכלול את התפריט הצדדי
function includeSidebar() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            // החלף את התפריט הצדדי הקיים
            const sideNav = document.querySelector('.side-nav');
            if (sideNav) {
                sideNav.outerHTML = data;
            } else {
                // אם אין תפריט צדדי קיים, הוסף אותו לפני התוכן הראשי
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    mainContent.insertAdjacentHTML('beforebegin', data);
                }
            }
            
            // הוסף את המחלקה active לקישור הנוכחי
            const currentPage = window.location.pathname.split('/').pop();
            const currentLink = document.querySelector(`.side-nav a[href="${currentPage}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }
        })
        .catch(error => console.error('Error loading sidebar:', error));
}

// הרץ את הפונקציה כאשר הדף נטען
document.addEventListener('DOMContentLoaded', includeSidebar); 