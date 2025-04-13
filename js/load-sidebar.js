// Define the sidebar structure with icons and paths
const sidebarData = {
    "תבניות יצירה": {
        icon: "fa-puzzle-piece",
        patterns: [
            { name: "Abstract Factory", icon: "fa-industry", path: "abstract-factory.html" },
            { name: "Builder", icon: "fa-hammer", path: "builder.html" },
            { name: "Factory Method", icon: "fa-industry", path: "factory-method.html" },
            { name: "Prototype", icon: "fa-clone", path: "prototype.html" },
            { name: "Singleton", icon: "fa-cube", path: "singleton.html" }
        ]
    },
    "תבניות מבנה": {
        icon: "fa-sitemap",
        patterns: [
            { name: "Adapter", icon: "fa-plug", path: "adapter.html" },
            { name: "Bridge", icon: "fa-link", path: "bridge.html" },
            { name: "Composite", icon: "fa-sitemap", path: "composite.html" },
            { name: "Decorator", icon: "fa-gift", path: "decorator.html" },
            { name: "Facade", icon: "fa-building", path: "facade.html" },
            { name: "Flyweight", icon: "fa-feather", path: "flyweight.html" },
            { name: "Proxy", icon: "fa-shield-alt", path: "proxy.html" }
        ]
    },
    "תבניות התנהגות": {
        icon: "fa-exchange-alt",
        patterns: [
            { name: "Chain of Responsibility", icon: "fa-link", path: "chain-of-responsibility.html" },
            { name: "Command", icon: "fa-terminal", path: "command.html" },
            { name: "Interpreter", icon: "fa-code", path: "interpreter.html" },
            { name: "Iterator", icon: "fa-sync", path: "iterator.html" },
            { name: "Mediator", icon: "fa-comments", path: "mediator.html" },
            { name: "Memento", icon: "fa-history", path: "memento.html" },
            { name: "Observer", icon: "fa-eye", path: "observer.html" },
            { name: "State", icon: "fa-toggle-on", path: "state.html" },
            { name: "Strategy", icon: "fa-chess", path: "strategy.html" },
            { name: "Template Method", icon: "fa-file-alt", path: "template-method.html" },
            { name: "Visitor", icon: "fa-user-check", path: "visitor.html" }
        ]
    }
};

// Function to create the sidebar HTML
function createSidebar() {
    const sidebarContainer = document.querySelector('.side-nav-container');
    const sidebar = document.createElement('nav');
    sidebar.className = 'side-nav';

    // Create search box
    const searchBox = document.createElement('div');
    searchBox.className = 'search-box';
    searchBox.innerHTML = `
        <input type="text" placeholder="חיפוש תבניות...">
    `;
    sidebar.appendChild(searchBox);

    // Check if we're in the patterns directory
    const isInPatternsDir = window.location.pathname.includes('/patterns/');
    const pathPrefix = isInPatternsDir ? '' : 'patterns/';

    // Create pattern groups
    for (const [groupName, groupData] of Object.entries(sidebarData)) {
        const group = document.createElement('div');
        group.className = 'pattern-group';
        
        const heading = document.createElement('h3');
        heading.innerHTML = `<i class="fas ${groupData.icon}"></i> ${groupName}`;
        group.appendChild(heading);

        const list = document.createElement('ul');
        groupData.patterns.forEach(pattern => {
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = pathPrefix + pattern.path;
            link.innerHTML = `<i class="fas ${pattern.icon}"></i> ${pattern.name}`;
            link.className = 'flex-center';
            item.appendChild(link);
            list.appendChild(item);
        });
        
        group.appendChild(list);
        sidebar.appendChild(group);
    }

    sidebarContainer.appendChild(sidebar);

    // Add search functionality
    const searchInput = sidebar.querySelector('.search-box input');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const allLinks = document.querySelectorAll('.pattern-group a');
        
        allLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                link.parentElement.style.display = '';
            } else {
                link.parentElement.style.display = 'none';
            }
        });
    });
}

// Initialize the sidebar when the DOM is loaded
document.addEventListener('DOMContentLoaded', createSidebar); 