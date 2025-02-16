// Select all dropdown elements
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    // Find all dropdown-menus inside the current dropdown
    const dropdownMenus = dropdown.querySelectorAll('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        dropdownMenus.forEach(menu => {
            menu.style.display = 'block';
        });
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdownMenus.forEach(menu => {
            menu.style.display = 'none';
        });
    });
});
