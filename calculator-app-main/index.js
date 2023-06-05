// Themes controlled by range slider
$('.slider').on('change', function () {
    const changeBodyColor = document.getElementById("body");
    const changeInfoTextColor = document.getElementById("info_container");
    const changeResultTextColor = document.getElementById("result_container");
    const sliderColor = document.getElementById("slider");
    const buttonsContainerColor = document.getElementById("buttons_container");
    const deleteBtn = document.getElementById("delete");
    const resetBtn = document.getElementById("reset");
    const elem = document.getElementsByTagName("button");
    const elemY = document.getElementById("equals");
    let value = $(this).val();
    if (value == 2) {
        changeBodyColor.style.backgroundColor = "hsl(0, 0%, 90%)";
        changeInfoTextColor.style.color = "hsl(60, 10%, 19%)";
        changeResultTextColor.style.color = "hsl(60, 10%, 19%)";
        changeResultTextColor.style.backgroundColor = "hsl(0, 0%, 93%)";
        sliderColor.style.backgroundColor = "hsl(0, 5%, 81%)";
        buttonsContainerColor.style.backgroundColor = "hsl(0, 5%, 81%)";
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.backgroundColor = "hsl(45, 7%, 89%)";
            elem[i].style.color = "hsl(60, 10%, 19%)";
            elem[i].style.boxShadow = "0 4px hsl(35, 11%, 61%)";
            elem[i].addEventListener(
                "mouseover",
                (event) => {
                  // highlight the mouseover target
                  event.target.style.backgroundColor = "hsl(45, 7%, 100%)";
                },
                false
            );
            elem[i].addEventListener(
                "mouseout",
                (event) => {
                  // highlight the mouseout target
                  event.target.style.backgroundColor = "hsl(45, 7%, 89%)";
                },
                false
              );
        }
        elemY.style.backgroundColor = "hsl(25, 98%, 40%)";
        elemY.style.color = "hsl(0, 0%, 100%)";
        elemY.style.boxShadow = "0 4px hsl(25, 99%, 27%)";
        deleteBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
        deleteBtn.style.color = "hsl(0, 0%, 100%)";
        deleteBtn.style.boxShadow = "0 4px hsl(185, 58%, 25%)";
        deleteBtn.addEventListener(
            "mouseover",
            (event) => {
              // highlight the mouseover target
              event.target.style.backgroundColor = "hsl(185, 42%, 50%)";
            },
            false
        );
        deleteBtn.addEventListener(
            "mouseout",
            (event) => {
              // highlight the mouseout target
              event.target.style.backgroundColor = "hsl(185, 42%, 37%)";
            },
            false
          );
        resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
        resetBtn.style.color = "hsl(0, 0%, 100%)";
        resetBtn.style.boxShadow = "0 4px hsl(185, 58%, 25%)";
        resetBtn.addEventListener(
            "mouseover",
            (event) => {
              // highlight the mouseover target
              event.target.style.backgroundColor = "hsl(185, 42%, 50%)";
            },
            false
        );
        resetBtn.addEventListener(
            "mouseout",
            (event) => {
              // highlight the mouseout target
              event.target.style.backgroundColor = "hsl(185, 42%, 37%)";
            },
            false
          );
        sliderColor.style.setProperty('--sliderCircleColor', 'hsl(25, 98%, 40%)');
        sliderColor.style.setProperty('--sliderCircleHover', 'hsl(25, 98%, 65%)');
        elemY.addEventListener(
            "mouseover",
            (event) => {
              // highlight the mouseover target
              event.target.style.backgroundColor = "hsl(25, 98%, 65%)";
            },
            false
        );
        elemY.addEventListener(
            "mouseout",
            (event) => {
              // highlight the mouseout target
              event.target.style.backgroundColor = "hsl(25, 98%, 40%)";
            },
            false
          );
    }
    else if (value == 1) {
        changeBodyColor.style.backgroundColor = "hsl(222, 26%, 31%)";
        changeInfoTextColor.style.color = "hsl(0, 0%, 100%)";
        changeResultTextColor.style.color = "hsl(0, 0%, 100%)";
        changeResultTextColor.style.backgroundColor = "hsl(224, 36%, 15%)";
        sliderColor.style.backgroundColor = "hsl(223, 31%, 20%)";
        buttonsContainerColor.style.backgroundColor = "hsl(223, 31%, 20%)";
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.backgroundColor = "hsl(30, 25%, 89%)";
            elem[i].style.color = "hsl(221, 14%, 31%)";
            elem[i].style.boxShadow = "0 4px hsl(28, 16%, 65%)";
            elem[i].addEventListener(
                "mouseover",
                (event) => {
                  // highlight the mouseover target
                  event.target.style.backgroundColor = "hsl(30, 25%, 100%)";
                },
                false
            );
            elem[i].addEventListener(
                "mouseout",
                (event) => {
                  // highlight the mouseout target
                  event.target.style.backgroundColor = "hsl(30, 25%, 89%)";
                },
                false
              );
        } 
        elemY.style.backgroundColor = "hsl(6, 63%, 50%)";
        elemY.style.color = "hsl(0, 0%, 100%)";
        elemY.style.boxShadow = "0 4px hsl(6, 70%, 34%)";
        deleteBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
        deleteBtn.style.color = "hsl(0, 0%, 100%)";
        deleteBtn.style.boxShadow = "0 4px hsl(224, 28%, 35%)";
        deleteBtn.addEventListener(
            "mouseover",
            (event) => {
              // highlight the mouseover target
              event.target.style.backgroundColor = "hsl(225, 21%, 70%)";
            },
            false
        );
        deleteBtn.addEventListener(
            "mouseout",
            (event) => {
              // highlight the mouseout target
              event.target.style.backgroundColor = "hsl(225, 21%, 49%)";
            },
            false
          );
        resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
        resetBtn.style.color = "hsl(0, 0%, 100%)";
        resetBtn.style.boxShadow = "0 4px hsl(224, 28%, 35%)";
        resetBtn.addEventListener(
            "mouseover",
            (event) => {
              // highlight the mouseover target
              event.target.style.backgroundColor = "hsl(225, 21%, 70%)";
            },
            false
        );
        resetBtn.addEventListener(
            "mouseout",
            (event) => {
              // highlight the mouseout target
              event.target.style.backgroundColor = "hsl(225, 21%, 49%)";
            },
            false
          );
        sliderColor.style.setProperty('--sliderCircleColor', 'hsl(6, 63%, 50%)');
        sliderColor.style.setProperty('--sliderCircleHover', 'hsl(6, 63%, 60%)');
        elemY.addEventListener(
            "mouseover",
            (event) => {
              // highlight the mouseover target
              event.target.style.backgroundColor = "hsl(6, 63%, 65%)";
            },
            false
        );
        elemY.addEventListener(
            "mouseout",
            (event) => {
              // highlight the mouseout target
              event.target.style.backgroundColor = "hsl(6, 63%, 50%)";
            },
            false
          );
    }
    else {
        changeBodyColor.style.backgroundColor = "hsl(268, 75%, 9%)";
        changeInfoTextColor.style.color = "hsl(52, 100%, 62%)";
        changeResultTextColor.style.color = "hsl(52, 100%, 62%)";
        changeResultTextColor.style.backgroundColor = "hsl(268, 71%, 12%)";
        sliderColor.style.backgroundColor = "hsl(268, 71%, 12%)";
        buttonsContainerColor.style.backgroundColor = "hsl(268, 71%, 12%)";
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.backgroundColor = "hsl(268, 47%, 21%)";
            elem[i].style.color = "hsl(52, 100%, 62%)";
            elem[i].style.boxShadow = "0 4px hsl(290, 70%, 36%)";
            elem[i].addEventListener(
                "mouseover",
                (event) => {
                  // highlight the mouseover target
                  event.target.style.backgroundColor = "hsl(268, 47%, 50%)";
                },
                false
            );
            elem[i].addEventListener(
                "mouseout",
                (event) => {
                  // highlight the mouseout target
                  event.target.style.backgroundColor = "hsl(268, 47%, 21%)";
                },
                false
              );
        } 
        elemY.style.backgroundColor = "hsl(176, 100%, 44%)";
        elemY.style.color = "hsl(198, 20%, 13%)";
        elemY.style.boxShadow = "0 4px hsl(177, 92%, 70%)";
        deleteBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
        deleteBtn.style.color = "hsl(0, 0%, 100%)";
        deleteBtn.style.boxShadow = "0 4px hsl(285, 91%, 52%)";
        deleteBtn.addEventListener(
            "mouseover",
            (event) => {
              // highlight the mouseover target
              event.target.style.backgroundColor = "hsl(281, 89%, 40%)";
            },
            false
        );
        deleteBtn.addEventListener(
            "mouseout",
            (event) => {
              // highlight the mouseout target
              event.target.style.backgroundColor = "hsl(281, 89%, 26%)";
            },
            false
          );
        resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
        resetBtn.style.color = "hsl(0, 0%, 100%)";
        resetBtn.style.boxShadow = "0 4px hsl(285, 91%, 52%)";
        resetBtn.addEventListener(
            "mouseover",
            (event) => {
              // highlight the mouseover target
              event.target.style.backgroundColor = "hsl(281, 89%, 40%)";
            },
            false
        );
        resetBtn.addEventListener(
            "mouseout",
            (event) => {
              // highlight the mouseout target
              event.target.style.backgroundColor = "hsl(281, 89%, 26%)";
            },
            false
          );
        sliderColor.style.setProperty('--sliderCircleColor', 'hsl(176, 100%, 44%)');
        sliderColor.style.setProperty('--sliderCircleHover', 'hsl(176, 100%, 80%)');
        elemY.addEventListener(
            "mouseover",
            (event) => {
              // highlight the mouseover target
              event.target.style.backgroundColor = "hsl(176, 100%, 70%)";
            },
            false
        );
        elemY.addEventListener(
            "mouseout",
            (event) => {
              // highlight the mouseout target
              event.target.style.backgroundColor = "hsl(176, 100%, 44%)";
            },
            false
          );
    }
});

// <------- Math calculations  ------>

// Numbers
const allNumberButtons = document.getElementsByClassName('number-button');
console.log(allNumberButtons);

// Operators
const allOperators = document.getElementsByClassName('operator');

// Others
const deleteSign = document.getElementById('delete');
const resetSign = document.getElementById('reset');
const equals = document.getElementById('equals');
let result = document.getElementById('result_container');

// Loop numbers and display

for (let i = 0; i < allNumberButtons.length; i++) {
  allNumberButtons[i].addEventListener('click', function () {
    result.textContent += allNumberButtons[i].textContent;
  });
}

// Loop operators and display

for (let j = 0; j < allOperators.length; j++) {
  allOperators[j].addEventListener('click', function () {
    const operator = allOperators[j].textContent;
    const currentResult = result.textContent;
    const regularExpression = /[+\-*/]+$/; // All the operators
    const updatedResult = currentResult.replace(regularExpression, '') + operator;
    result.textContent = updatedResult;
  })
}

// Evaluate result logic

function evaluateResult() {
  const regExp = /\d+\s*[-+*/]\s*\d+$/; // Number Operator Number
  const checkNumber = regExp.test(result.textContent);
  if (checkNumber) {
    let myResult = eval(result.textContent);
    result.textContent = myResult;
  }
  else {
    result.textContent = displayErrorResult(); 
  }
}

// Reset button logic

function resetExpression() {
  result.textContent = '';
}

// Delete button logic

function deleteCharacter() {
  const result = document.getElementById('result_container');
  const currentResult = result.textContent;
  const updatedResult = currentResult.slice(0, -1);
  result.textContent = updatedResult;
}

// Display random results on weird behavior

function displayErrorResult() {
  let array = [
    'Lasa prostiile',
    'Pune mana pe carte',
    'Fii serios',
    'Glumetule',
    'Altceva ?!??!?',
    'Ai mai utilizat un calculator?',
    'Bro.....',
    'Bitch ... please',
  ];
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomString = array[randomIndex];

  return randomString;
}

//Event listeners

equals.addEventListener('click', evaluateResult);
resetSign.addEventListener('click', resetExpression);
deleteSign.addEventListener('click', deleteCharacter);

