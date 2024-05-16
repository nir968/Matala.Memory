
let matchedPairs = 0;
let gameWon = false;


function duplicateArrayElements(arr) {
    var duplicated = [];
    for (var i = 0; i < arr.length; i++) {
        duplicated.push(arr[i]);
        duplicated.push(arr[i]);
    }
    return duplicated;
}


function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}



//the picture of the flipped card
const imgs = [
/*1*/ "https://www.showmetech.com.br/wp-content/uploads//2023/06/image-30-1024x650.png", // Gustavo Fring
/*2*/"https://static.wikia.nocookie.net/breakingbad/images/3/34/TioSalamanca.jpg/revision/latest?cb=20100516195603", //Hector Salamanca
/*3*/"https://upload.wikimedia.org/wikipedia/en/c/c5/Kim_Wexler_BCS_S5.png", // kim Wexler
/*4*/"https://ynet-pic1.yit.co.il/picserver5/wcm_upload/2022/04/20/HkzW3hdaEq/bcs_600_gl_0325_0151_rt.jpg", //Saul Goodman
/*5*/"https://upload.wikimedia.org/wikipedia/he/e/ea/Mike_Ehrmantraut_BCS_S3.png", // Mike Ehrmantraut
/*6*/"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGCe8m7bPK-beHdsBp5M3YJTWseRa-N7s2W3FD10w1g&s", // Howard Hamlin
/*7*/"https://media.gq.com/photos/625d7a92a4ce27678356e23f/16:9/w_2990,h_1682,c_limit/TCDBECA_IZ056.jpeg", // Lalo Salamanca
/*8*/"https://upload.wikimedia.org/wikipedia/en/c/ca/ChuckMcGillBCS.jpg", //Chuck McGill
/*9*/"https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Nacho_Varga_BCS_S5.png/220px-Nacho_Varga_BCS_S5.png", // Nacho Varga
/*10*/"https://static.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445", //Tuco Salamanca
/*11*/"https://vignette.wikia.nocookie.net/breakingbad/images/f/f7/Cast_bb_800x600_hank-schrader.jpg/revision/latest?cb=20170613184022", //Hank Schrader 
/*12*/"https://upload.wikimedia.org/wikipedia/he/0/03/Walter_White_S5B.png", // Walter White
/*13*/"https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwf02aad9d/images/3/5/5/7/355776d-emp.jpg?sfrm=png", //Los Pollos Hermanos
/*14*/"https://i.pinimg.com/1200x/11/3e/a8/113ea8e152f158630838a5c9d4e163d2.jpg", //Statue of Liberty
/*15*/"https://static.wikia.nocookie.net/breakingbad/images/a/af/Huell_BCS_S3.png/revision/latest?cb=20210610231000" //Huell Babineaux
];


const duplicatedImages = duplicateArrayElements(imgs);

const shuffledImages = shuffleArray(duplicatedImages);

const container = document.getElementById('container');

let selectedCardId;


function resetGame() {
    // Reset timer
    clearInterval(timerInterval);
    startTimer();
    
    // Reset matched pairs count
    matchedPairs = 0;
    
    // Enable all cards and hide their images
    const cardImages = document.querySelectorAll('.card-image');
    cardImages.forEach(card => {
        card.style.display = 'none';
        card.classList.remove('disabled');
    });
    
    // Shuffle the images for a new game
    shuffledImages.forEach((img, i) => {
        const cardContainer = document.getElementById(i);
        cardContainer.querySelector('.card-image').src = img;
    });
    
    // Reset game won flag
    gameWon = false;
}


const disableCards = (id1, id2) => {
    const img1 = document.getElementById(id1);
    const img2 = document.getElementById(id2);
    img1.classList.add('disabled');
    img2.classList.add('disabled');
}


const checkIfSameImg = (id1, id2) => {
    const img1 = document.getElementById(id1);
    const img2 = document.getElementById(id2);
    if (img1.src === img2.src) {
        disableCards(id1, id2)
        matchedPairs++;
        checkGameWon();  // If cards match, disable them
        return true ;
    } else {
        return false;
    }
};


const resetFlipedCards = (id1, id2) => {
    const img1 = document.getElementById(id1);
    const img2 = document.getElementById(id2);
    setTimeout(() => {
        img1.style.display = 'none';
        img2.style.display = 'none';
    }, 500)
    
}


shuffledImages.forEach((img, i) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const imgElement = document.createElement('img');
    imgElement.classList.add('card-image');
    imgElement.src = img;
    imgElement.id = i;
    imgElement.style.display = 'none';


    cardContainer.onclick = () => {
        if (imgElement.style.display === 'none') {
            imgElement.style.display = 'block';
            if (!selectedCardId) {
                selectedCardId = imgElement.id;
            } else {
                if (checkIfSameImg(selectedCardId, imgElement.id)) {
                    disableCards(selectedCardId, imgElement.id);
                } else {
                    resetFlipedCards(selectedCardId, imgElement.id);
                }
                selectedCardId = null;
            }
        }
    };
    cardContainer.appendChild(imgElement);
    container.appendChild(cardContainer);
});


var storedName = sessionStorage.getItem("nameDisplay") || ""; // Use an empty string as the default value


    // Display the stored input value on Page 2
var nameDisplay = document.getElementById("nameDisplay"); // Get the element where you want to display the name
if (nameDisplay) {
      nameDisplay.innerText = "Hello, " + storedName + "!";
 }

  
window.addEventListener('DOMContentLoaded', () => {
  const nameDisplay = document.getElementById('nameDisplay');
  const storedName = sessionStorage.getItem('userName') || '';
  nameDisplay.innerText = `Hello ${storedName}!`;

  // Remove the stored name from sessionStorage after displaying it
  sessionStorage.removeItem('userName');
});


const checkGameWon = () => {
    if (matchedPairs === shuffledImages.length / 2) {
        setTimeout(() => {
            clearInterval(timerInterval); // Stop the timer
            const storedName = sessionStorage.getItem('userName');
            const formattedTime = formatElapsedTime(elapsedTime);
            const confirmRestart = confirm(`Congrats ! You won the memory game in ${formattedTime}! Would you like to play again?`);
            if (confirmRestart) {
                resetGame();
            }
        }, 1000); // Delay the confirmation dialog by 1 second (1000 milliseconds)
    }
};


//timer
let startTime;
let elapsedTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
    return number.toString().padStart(2, '0');
}

function formatElapsedTime(elapsedTime) {
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    return `${padZero(minutes)}:${padZero(seconds)}`;
}

startTimer();



