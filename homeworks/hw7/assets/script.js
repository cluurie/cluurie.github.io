function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let average = sum / 3;
    return average;
}

function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}


function getRandomNum(max) {
    return Math.random() * max;
}
  

let x = Math.floor(getRandomNum(20));
let y = Math.floor(getRandomNum(10));
let z = Math.floor(getRandomNum(13));

let avg = Math.floor(averageThreeNumbers(x, y, z));

let sentence = createSentence(Math.floor(avg), "dog");

console.log(sentence);
