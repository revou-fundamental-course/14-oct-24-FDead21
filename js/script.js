document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const fields = ['nama', 'tanggal', 'gender', 'pesan'];
    

    const welcomeMessage = document.querySelector('.welcome-message');
    const welcomeName = document.getElementById('welcomeName');
    const newName = formData.get('nama');

    welcomeMessage.classList.add('updating');
    
    setTimeout(() => {
        welcomeName.textContent = newName;
        welcomeMessage.classList.remove('updating');
    }, 300);


    fields.forEach((field, index) => {
        const displayElement = document.getElementById(`display-${field}`);
        const value = formData.get(field);
        
        setTimeout(() => {
            displayElement.textContent = value || '-';
            displayElement.parentElement.classList.add('active');
        }, index * 200);
    });


    e.target.reset();
});

document.querySelectorAll('.display-field').forEach((field, index) => {
    setTimeout(() => {
        field.classList.add('active');
    }, index * 200);
});