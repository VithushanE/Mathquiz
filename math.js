// To generate random numbers

function random() {
    console.log('randomizing numbers')
    // For number 1 
    let x = Math.random()*100
    let y = Math.round(x)
    document.getElementById('num1').innerHTML=y

    let a = Math.random()*100
    let b = Math.round(a)
    document.getElementById('num2').innerHTML=b;

    // Clearing current answer
    document.getElementById('answer').value=""
}


// to check if answer is correct 

// first, submit answer

function submit (){
    console.log('submitted answer')
   let a = document.getElementById('answer').value 
   document.getElementById('urAnswer').innerHTML = a
}


function verify (){
    console.log('Correct answer must be same as one submitted!')
   let x = document.getElementById('num1').innerHTML
   let y = document.getElementById('num2').innerHTML
   let z = parseInt(x) + parseInt(y)
   console.log(z)
   document.getElementById('correctAnswer').innerHTML = z
}