let screenText = document.querySelector('.output_number_text');
let cachedNum = null;
let operator = "";

function typeNum(numberr){
    if (screenText.innerText.length >= 17) {

    }
    else if (screenText.innerText === "0") {
        screenText.innerText = numberr;
    }
    else {
        screenText.innerText += numberr;
        //= screenText.innerText + '' + numberr;
    }
}

// Add numbers to the display when typed //
document.querySelector('.container').addEventListener('click', function(event) {
    if ((event.target.tagName === 'BUTTON') && (event.target.classList.contains("num"))) 
    {
        typeNum(event.target.innerText);
    }
});

// Clear display when C is pressed//
document.querySelector('.container').addEventListener('click', function(event) {
    if ((event.target.tagName === 'BUTTON') && (event.target.classList.contains("clear"))) 
    {
        screenText.innerText = 0;
        cachedNum = null;
    }
});

// make backspace work //
document.querySelector('.container').addEventListener('click', function(event) {
    if ((event.target.tagName === 'BUTTON') && (event.target.classList.contains("back"))) 
    {
        if (screenText.innerText != 0) {
            if (screenText.innerText.length > 1) {
                screenText.innerText = 	screenText.innerText.substring(0, screenText.innerText.length - 1);
            }
            else {
                screenText.innerText = 0;
            }
        }
    }
});

// When user selects an operator, cache current number and allow new number to be typed
document.querySelector('.container').addEventListener('click', function(event) {
    if ((event.target.tagName === 'BUTTON') && (event.target.classList.contains("op"))) 
    {
        if(cachedNum === null){
            cachedNum = screenText.innerText;
            screenText.innerText = "";
            operator = event.target.classList[0];
        }
        else {
        }
    }
});

//do the operation
document.querySelector('.container').addEventListener('click', function(event) {
    if ((event.target.tagName === 'BUTTON') && (event.target.classList.contains("equal"))) 
    {
        if (cachedNum === null){
        }
        else {
            //checking if number on screen is an int or a float
            let parseCachedNum = null;
            if (cachedNum.includes(".")){
                parseCachedNum = parseFloat(cachedNum);
            }
            else {
                parseCachedNum = parseInt(cachedNum);
            }
            let parseDisp = parseInt(screenText.innerText);
            let result = 0;

            //performing operation
            if (operator === "plus"){
                result = parseCachedNum + parseDisp;
            }
            else if (operator === "minus") {
                result = parseCachedNum - parseDisp;
            }
            else if (operator === "div") {
                result = parseCachedNum / parseDisp;
            }
            else if (operator === "times") {
                result = parseCachedNum * parseDisp;
            }

            //outputting operation result to screen
            screenText.innerText = result;
            if (screenText.innerText === "Infinity") {
                screenText.innerText = ":(";
            }
            if (screenText.innerText.length >= 15){
                screenText.innerText = screenText.innerText.substring(0,15) + "...";
            }
            operator = "";
            cachedNum = null;
        }
    }
});