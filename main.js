const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// select Tab Item
function selectItem(e) {
    removeBorder();
    removeShow();
    // add border to current tab
    this.classList.add('tab-border');
    // grab content
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    // show class
    tabContentItems.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// listem for tab click?
tabItems.forEach(item => item.addEventListener('click', selectItem));