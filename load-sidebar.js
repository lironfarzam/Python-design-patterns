// Define the sidebar structure with icons and paths
const sidebarData = {
    "תבניות יצירה": {
        icon: "fa-puzzle-piece",
        patterns: [
            { name: "Abstract Factory", icon: "fa-industry", path: "patterns/abstract-factory.html" },
            { name: "Builder", icon: "fa-hammer", path: "patterns/builder.html" },
            { name: "Factory Method", icon: "fa-industry", path: "patterns/factory-method.html" },
            { name: "Prototype", icon: "fa-clone", path: "patterns/prototype.html" },
            { name: "Singleton", icon: "fa-cube", path: "patterns/singleton.html" }
        ]
    },
    "תבניות מבנה": {
        icon: "fa-sitemap",
        patterns: [
            { name: "Adapter", icon: "fa-plug", path: "patterns/adapter.html" },
            { name: "Bridge", icon: "fa-link", path: "patterns/bridge.html" },
            { name: "Composite", icon: "fa-sitemap", path: "patterns/composite.html" },
            { name: "Decorator", icon: "fa-gift", path: "patterns/decorator.html" },
            { name: "Facade", icon: "fa-building", path: "patterns/facade.html" },
            { name: "Flyweight", icon: "fa-feather", path: "patterns/flyweight.html" },
            { name: "Proxy", icon: "fa-shield-alt", path: "patterns/proxy.html" }
        ]
    },
    "תבניות התנהגות": {
        icon: "fa-exchange-alt",
        patterns: [
            { name: "Chain of Responsibility", icon: "fa-link", path: "patterns/chain-of-responsibility.html" },
            { name: "Command", icon: "fa-terminal", path: "patterns/command.html" },
            { name: "Interpreter", icon: "fa-code", path: "patterns/interpreter.html" },
            { name: "Iterator", icon: "fa-sync", path: "patterns/iterator.html" },
            { name: "Mediator", icon: "fa-comments", path: "patterns/mediator.html" },
            { name: "Memento", icon: "fa-history", path: "patterns/memento.html" },
            { name: "Observer", icon: "fa-eye", path: "patterns/observer.html" },
            { name: "State", icon: "fa-toggle-on", path: "patterns/state.html" },
            { name: "Strategy", icon: "fa-chess", path: "patterns/strategy.html" },
            { name: "Template Method", icon: "fa-file-alt", path: "patterns/template-method.html" },
            { name: "Visitor", icon: "fa-user-check", path: "patterns/visitor.html" }
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
            link.href = pattern.path;
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