
const input = document.getElementById('nameInput');
const numCardsInput = document.getElementById('numCardsInput');
const acceptedValues = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];


function goToPage2() {
    const name = input.value;
    const numCards = parseInt(numCardsInput.value);

    if (acceptedValues.includes(numCards)) {
        sessionStorage.setItem('userName', name);
        sessionStorage.setItem('numCards', numCards);
        window.location.href = 'page2.html';
    } else {
        alert('Please enter an even number between 8-30.');
    }
}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.code === 'Enter') {
        goToPage2();
    }
});

const goToPage2Button = document.getElementById('goToPage2');
goToPage2Button.addEventListener('click', goToPage2);

