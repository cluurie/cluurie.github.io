
// pop-up show
document.getElementById('popup-cta').addEventListener('click', function() {
    // hiide
    document.getElementById('popup-overlay').style.display = 'none';
});



// WATERERERRRRRR // 
const waterer = document.getElementById('waterer');
let isDragging = false; 

// mousedown
waterer.addEventListener('mousedown', function (event) {
    isDragging = true; 
    document.body.style.cursor = 'grabbing'; 
    event.preventDefault();
});

// mouseup
document.addEventListener('mouseup', function () {
    isDragging = false; 
    document.body.style.cursor = 'default'; 
});

// mousemove
document.addEventListener('mousemove', function (event) {
    if (isDragging) {
        waterer.style.left = `${event.clientX - waterer.offsetWidth / 2}px`;
        waterer.style.top = `${event.clientY - waterer.offsetHeight / 2}px`;
        checkForFlowerHover(event.clientX, event.clientY);
    }
});

// is waterer hovering over flower?
function checkForFlowerHover(x, y) {
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach((flower, index) => {
        const flowerRect = flower.getBoundingClientRect();
        if (
            x > flowerRect.left &&
            x < flowerRect.right &&
            y > flowerRect.top &&
            y < flowerRect.bottom
        ) {
            growFlower(index);
        }
    });
}




// flower growing
const flowers = document.querySelectorAll('.flower');
const flowerStates = Array.from(flowers).map(() => ({
    growthLevel: 1,
    timer: null
}));

// is water hovering over flower?
function checkForFlowerHover(x, y) {
    flowers.forEach((flower, index) => {
        const flowerRect = flower.getBoundingClientRect();
        if (
            x > flowerRect.left &&
            x < flowerRect.right &&
            y > flowerRect.top &&
            y < flowerRect.bottom
        ) {growFlower(index);}
    });
}

function growFlower(index) {
    clearTimeout(flowerStates[index].timer);

    // make flower grow
    if (flowerStates[index].growthLevel < 2.0) {
        flowerStates[index].growthLevel += 0.1;
        updateFlowerSize(index);
    }

    // timer shrinking flower
    flowerStates[index].timer = setTimeout(() => {
        const shrinkInterval = setInterval(() => {
            flowerStates[index].growthLevel -= 0.05;
            updateFlowerSize(index);
            if (flowerStates[index].growthLevel <= 1) {
                flowerStates[index].growthLevel = 1;
                updateFlowerSize(index);
                clearInterval(shrinkInterval);
            }
        }, 100);
    }, 1000); 
}

// change size of flower
function updateFlowerSize(index) {
    const flower = flowers[index];
    const growthLevel = flowerStates[index].growthLevel;
    flower.style.transform = `scale(${growthLevel})`;
}
