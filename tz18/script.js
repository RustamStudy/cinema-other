initCalculator();
let  input = document.querySelector(".screen"),
     ind = 0;
     ind1 = false,
     ind2 = true;
function initCalculator() {
    let keys = document.querySelectorAll("#calculator span");

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = callBack;
    }
}

function callBack(e) {
    e.preventDefault();

    let operators = ["+", "-", "x", "÷"],
        decimalAdded = false,
        total = 0,
       
        btnVal = this.innerHTML,
        inputVal = input.innerHTML;

    if (btnVal == "=") {
        calculate();
    } else if (operators.indexOf(btnVal) > -1) {
        showOperator();
    } else if (btnVal == ".") {
        showDecimal();
    } else if (btnVal == "C") {
        reset();
    } else {
        showDigit(btnVal);
    }

    /** Обработчики */
    function showOperator() {
        let lastChar = inputVal[inputVal.length - 1];

        if (inputVal != "" && operators.indexOf(lastChar) == -1)
            input.innerHTML += btnVal;
        else if (inputVal == "" && btnVal == "-") input.innerHTML += btnVal;
        if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
            input.innerHTML = inputVal.replace(/.$/, btnVal);
        }
        decimalAdded = false;
        ind = inputVal.length+1;
        ind1 = false;
        ind2 = false;
    }

    function showDigit() {
        ind2 = true;
        //Проверка на несколько нулей там где нужен один после матзнаков
        if(inputVal.length == ind+1 && inputVal[ind] == '0' && inputVal[ind+1] != '.')
        {
            
            input.innerHTML = input.innerText.slice(0,-1);
        }
        //Сброс экрана при вводе цифр после знака равно
        if(ind1)
        {
            input.innerHTML = btnVal;
            ind=0;
            ind1=false
            inputVal = '';
        }
        else
        input.innerHTML += btnVal;
        
    }

    function showDecimal() {
        if (!decimalAdded) {
            //установка нуля перед точкой, если это необходимо
            if(!ind2)
                {
                    input.innerHTML +=0;     
                    ind2 = true;             
                }
            input.innerHTML += btnVal;
            decimalAdded = true;
        }
        ind2 = true 
    }

    function calculate() {
        let equation = inputVal,
            lastChar = equation[equation.length - 1];

        equation = equation.replace(/x/g, "*").replace(/÷/g, "/");
        if (operators.indexOf(lastChar) > -1 || lastChar == ".")
            equation = equation.replace(/.$/, "");
        if (equation) {
            total = eval(equation);
            if (total.toString().indexOf(".") != -1)
                total = total.toFixed(2);
            input.innerHTML = total;
        }
        decimalAdded = false;
        ind1 = true;
        
    }
}

function reset() {
    console.warn("Function Reset started");
    input.innerHTML = "0";
    ind = 0;
}