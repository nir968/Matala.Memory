
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

const imgs = [
  "https://www.showmetech.com.br/wp-content/uploads//2023/06/image-30-1024x650.png",
  "https://static.wikia.nocookie.net/breakingbad/images/3/34/TioSalamanca.jpg/revision/latest?cb=20100516195603",
"https://upload.wikimedia.org/wikipedia/en/c/c5/Kim_Wexler_BCS_S5.png",
"https://ynet-pic1.yit.co.il/picserver5/wcm_upload/2022/04/20/HkzW3hdaEq/bcs_600_gl_0325_0151_rt.jpg",
"https://upload.wikimedia.org/wikipedia/he/e/ea/Mike_Ehrmantraut_BCS_S3.png"
];

const duplicatedImages = duplicateArrayElements(imgs)
const shuffledImages = shuffleArray(duplicatedImages)

const container = document.getElementById('container')

let selectedCardId;

const disableCards = (id1, id2) => {
    const img1 = document.getElementById(id1);
    const img2 = document.getElementById(id2);
    img1.classList.add('disabled')
    img2.classList.add('disabled')
}

const checkIfSameImg = (id1, id2) => {
    const img1 = document.getElementById(id1);
    const img2 = document.getElementById(id2);
    return img1.src === img2.src;
}

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
    }
    cardContainer.appendChild(imgElement);
    container.appendChild(cardContainer);
})


    let startTime;
    let timerInterval;

    function startTimer() {
      startTime = Date.now();
      timerInterval = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
      const elapsedTime = Date.now() - startTime;
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      const timerElement = document.getElementById('timer');
      timerElement.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
    }

    function padZero(number) {
      return number.toString().padStart(2, '0');
    }

    startTimer();


     // Retrieve the stored input value from localStorage
     var storedName = sessionStorage.getItem("userName");
     // Display the stored input value on Page 2
     document.getElementById("userName").innerText = "Hello, " + storedName + "!";