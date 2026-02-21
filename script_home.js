document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('likes_1');
    if (!el) return;
    const stored = parseInt(localStorage.getItem('likes_1'), 10);
    el.textContent = isNaN(stored) ? 0 : stored;
});

document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('likes_2');
    if (!el) return;
    const stored = parseInt(localStorage.getItem('likes_2'), 10);
    el.textContent = isNaN(stored) ? 0 : stored;
});

document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('likes_3');
    if (!el) return;
    const stored = parseInt(localStorage.getItem('likes_3'), 10);
    el.textContent = isNaN(stored) ? 0 : stored;
});



function addLike1() {
    const likes_item1 = document.getElementById('likes_1');
    if (!likes_item1) return;
    let value = parseInt(likes_item1.textContent, 10);
    if (isNaN(value)) value = 0;
    value += 1;
    likes_item1.textContent = value;
    localStorage.setItem('likes_1', value);
}

function addLike2() {
    const likes_item2 = document.getElementById('likes_2');
    if (!likes_item2) return;
    let value = parseInt(likes_item2.textContent, 10);
    if (isNaN(value)) value = 0;
    value += 1;
    likes_item2.textContent = value;
    localStorage.setItem('likes_2', value);
}

function addLike3() {
    const likes_item3 = document.getElementById('likes_3');
    if (!likes_item3) return;
    let value = parseInt(likes_item3.textContent, 10);
    if (isNaN(value)) value = 0;
    value += 1;
    likes_item3.textContent = value;
    localStorage.setItem('likes_3', value);
}
document.addEventListener("DOMContentLoaded", function () {
    // Likes
    const likesIds = ["likes_1","likes_2","likes_3"];
    likesIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const stored = parseInt(localStorage.getItem(id), 10);
        el.textContent = isNaN(stored) ? 0 : stored;
    });
