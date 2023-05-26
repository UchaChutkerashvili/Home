//11111111111111111111111111111111111111111
//html
<div>
  <div id="div">random text</div>
  <button id="btn"></button>
</div>;
//js
document.getElementById("btn").addEventListener("click", hide);
function hide() {
  let x = document.getElementById("div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//22222222222222222222222222222222222222222
const divEl = document.createElement('div')
divEl.setAttribute('id',"card")

const h2El = document.createElement('h2')
const textEl = document.createTextNode('Gandalf')

const aEl = document.createElement('a')
aEl.setAttribute('href',"#")
const aText = document.createTextNode('Go to profile')

h2El.append(textEl)
aEl.append(aText)
divEl.append(h2El,aEl)

document.body.append(divEl)
//33333333333333333333333333333333333333333
//html
<body>
  <div>
    <div class="panel">
        
        <div class="question-container" id="question">
            Question goes here.
        </div>
        <div class="option-container">
            <button class="option" onclick="" id="op1" >option1</button>
     
            <button class="option" id="op2" >option2</button>
     
            <button class="option" id="op3">option3</button>
     
            
        </div>
        <div class="navigation">            
            <button class="next">Next</button>
        </div>
    </div>
    <script src="script.js"></script>
    </div>
</body>

//JS
const Questions = [{
  id: 0,
  q: "Am I the best developer?",
  a: [{ text: "No", isCorrect: false },
      { text: "Maybe", isCorrect: false },
      { text: "Of Course", isCorrect: true }
  ]
},
{
  id: 1,
  q: "Will I be hired after 3 month?",
  a: [{ text: "Yes", isCorrect: false, },
      { text: "Maybe", isCorrect: false },
      { text: "In less than 3 month", isCorrect: true }
  ]
}
]

var start = true;

function iterate(id) {
  // Getting the question
  const question = document.getElementById("question")
  // Setting the question text
  question.innerText = Questions[id].q;
  //Getting the options
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  //Selection
  
  op1.addEventListener("click", () => {
    if (op1.value == "true") {
      op1.innerText.style.color = "green"
    } else {
      op1.innerText.style.color = "red"
    }
})

op2.addEventListener("click", () => {
  if (op2.value == "true") {
    op2.innerText.style.color = "green"
  } else {
    op2.innerText.style.color = "red"
  }
})

op3.addEventListener("click", () => {
  if (op3.value == "true") {
    op3.innerText.style.color = "green"
  } else {
    op3.innerText.style.color = "red"
  }
})
}

if (start) {
  iterate("0");
}
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
 
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        
    }
})