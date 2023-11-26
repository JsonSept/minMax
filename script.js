
let array = Math.max(2,3,4,5);
max.addEventListener('click', function() {
    document.getElementById("answer").innerHTML = `The max value is ${array}`
})

let array1 = Math.min(2,3,4,5);
btn1.addEventListener('click', function(){
    document.getElementById('answer1').innerText = `The min value is ${array1}`
})