
const btn = document.getElementById('btn')

function calculateAverage() {
    let input = document.getElementById('numbersInput').value;
    // Split the input string and convert each element to a number
    var numbers = input.split(":").map(Number); 
    
    var sum = numbers.reduce(function (acc, num) {
      return acc + num; // Calculate the sum of all numbers
    }, 0);
    var average = sum / numbers.length; // Calculate the average
    
    document.getElementById("result").textContent = "The average is: " + average;
  }

  btn.addEventListener('click', calculateAverage)
   