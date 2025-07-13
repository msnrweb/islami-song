const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');
const countDisplay = document.getElementById('countDisplay');

const itemsArray = Array.from(itemList.querySelectorAll('li'));

// Sort items
itemsArray.sort((a, b) => a.textContent.trim().localeCompare(b.textContent.trim(), 'bn'));

// Re-append sorted items
itemList.innerHTML = '';
itemsArray.forEach(item => itemList.appendChild(item));

// Count visible items
function updateCount() {
    const visibleCount = itemsArray.filter(item => item.style.display !== 'none').length;
    countDisplay.textContent = `🎵 মোট ${visibleCount}টি গান পাওয়া গেছে`;
}

// Initial count
updateCount();

// Search functionality
searchInput.addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    itemsArray.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
    });
    updateCount();
});

// Click navigation
itemsArray.forEach(item => {
    item.addEventListener('click', () => {
        const filename = item.getAttribute('data-filename');
        window.location.href = `lyrics/${filename}.html`;
    });
});
