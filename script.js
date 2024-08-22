const input = document.querySelector('input');
    const hints = document.querySelector('.hints');
    input.addEventListener('focus', () => {
        hints.classList.add('active');
    })
    input.addEventListener('blur', () => {
        hints.classList.remove('active');
    })

    input.addEventListener('keyup', (e) => {
        let value = e.target.value.trim();
        value.length >= 8 ? hints.querySelector('span:nth-child(1)').classList.add('green') : hints.querySelector('span:nth-child(1)').classList.remove('green');
        value.match(/[0-9]/) ? hints.querySelector('span:nth-child(2)').classList.add('green') : hints.querySelector('span:nth-child(2)').classList.remove('green');
        value.match(/[!@#$%^&*]/) ? hints.querySelector('span:nth-child(3)').classList.add('green') : hints.querySelector('span:nth-child(3)').classList.remove('green');
        value.match(/[A-Z]/) ? hints.querySelector('span:nth-child(4)').classList.add('green') : hints.querySelector('span:nth-child(4)').classList.remove('green');
        value.match(/[a-z]/) ? hints.querySelector('span:nth-child(5)').classList.add('green') : hints.querySelector('span:nth-child(5)').classList.remove('green');
    })