const allBtn = document.getElementById('all-btn');
const openBtn = document.getElementById('open-btn');
const closedBtn = document.getElementById('closed-btn');

function filterBtn(id) {
    allBtn.classList.remove('btn-primary');
    openBtn.classList.remove('btn-primary');
    closedBtn.classList.remove('btn-primary');

    allBtn.classList.add('btn-outline');
    openBtn.classList.add('btn-outline');
    closedBtn.classList.add('btn-outline');

    const selectBtn = document.getElementById(id);
    selectBtn.classList.remove('btn-outline');
    selectBtn.classList.add('btn-primary');

    
}