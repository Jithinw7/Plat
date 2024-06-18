document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.content-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.dataset.title;
            const description = card.dataset.description;
            const imageUrl = card.dataset.image;
            showDetails(title, description, imageUrl);
        });
    });
});

function showDetails(title, description, imageUrl) {
    document.getElementById('content-title').innerText = title;
    document.getElementById('content-description').innerText = description;
    document.getElementById('content-image').src = imageUrl;
    showPage('details');
}

function searchContent(event) {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll('.content-card').forEach(card => {
        const title = card.dataset.title.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(page).classList.remove('hidden');
    if (page === 'details') {
        document.getElementById('details').classList.add('fade-in');
    }
}

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('show');
}

function authenticateUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        toggleModal('login-modal');
        showPage('home');
    } else {
        alert('Login failed. Please check your credentials.');
    }
}