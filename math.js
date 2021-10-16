// To generate random numbers

function random() {
  console.log('randomizing numbers');
  // For number 1
  let x = Math.random() * 100;
  let y = Math.round(x);
  document.getElementById('num1').innerHTML = y;

  let a = Math.random() * 100;
  let b = Math.round(a);
  document.getElementById('num2').innerHTML = b;

  // Clearing current answer
  document.getElementById('answer').value = '';
}

// to check if answer is correct

// first, submit answer

function submit() {
  console.log('submitted answer');
  let a = document.getElementById('answer').value;
  document.getElementById('urAnswer').innerHTML = a;
  let x = document.getElementById('answer').value
  console.log(x)
}

function verify() {
  console.log('Correct answer must be same as one submitted!');
  let x = document.getElementById('num1').innerHTML;
  let y = document.getElementById('num2').innerHTML;
  let z = parseInt(x) + parseInt(y);
  console.log(z);
  document.getElementById('correctAnswer').innerHTML = z;

}

 // To keep count of how many was answered correctly

function tally() {
  let x = document.getElementById('urAnswer').innerHTML
  let z = document.getElementById('correctAnswer').innerHTML 
  if (x = z){
    let count = 0
    count += 1
    console.log('You have ' + y + 'correct')
  } 
}


// Subtraction

function verify2() {
  console.log('Correct answer must be same as one submitted!');
  let x = document.getElementById('num1').innerHTML;
  let y = document.getElementById('num2').innerHTML;
  let z = parseInt(x) - parseInt(y);
  console.log(z);
  document.getElementById('correctAnswer').innerHTML = z;
}

// Multiply

function random3() {
  console.log('randomizing numbers');
  // For number 1
  let x = Math.random() * 10;
  let y = Math.round(x);
  document.getElementById('num1').innerHTML = y;

  let a = Math.random() * 10;
  let b = Math.round(a);
  document.getElementById('num2').innerHTML = b;

  // Clearing current answer
  document.getElementById('answer').value = '';
}

function verify3() {
  console.log('Correct answer must be same as one submitted!');
  let x = document.getElementById('num1').innerHTML;
  let y = document.getElementById('num2').innerHTML;
  let z = parseInt(x) * parseInt(y);
  console.log(z);
  document.getElementById('correctAnswer').innerHTML = z;
}

// Divide
function random4() {
    console.log('randomizing numbers')
    // For number 1 
    let x = Math.random()*10
    let y = Math.round(x)
    document.getElementById('num1').innerHTML=y

    let a = Math.random()*10
    let b = Math.round(a)
    document.getElementById('num2').innerHTML=b;

    // Clearing current answer
    document.getElementById('answer').value=""
}

function verify4() {
    console.log('Correct answer must be same as one submitted!');
    let x = document.getElementById('num1').innerHTML;
    let y = document.getElementById('num2').innerHTML;
    let z = parseInt(x) / parseInt(y);
    console.log(z);
    document.getElementById('correctAnswer').innerHTML = z;
  }
  



// To verfiy correct answer in console 

function getAnswer() {
  let x = document.getElementById('answer').value
  console.log(x)
  }



  // timer

  function timer(){
    let 
  }