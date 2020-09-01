//////////////////////////////////////////////////// задача 1
function function1(){
    task1.value = `Нарекаю тебя ${inp1.value}, живи теперь с этим))))`;
}

//////////////////////////////////////////////////// задача 2
function function2(){
    if(inp2_1.value.length >= 1 || inp2_2.value.length >= 1)
    {
        if(+inp2_1.value >= +inp2_2.value){
            task2.value = inp2_1.value
        }
        else{
            task2.value = inp2_2.value
        }
    }
    else
    {
        task2.value = 'Введите значение хотя бы в одно из полей';
    }
}

//////////////////////////////////////////////////// задача 3
function function3(){
    if(inp3_1.value.length >= 1 || inp3_2.value.length >= 1)
    {
        if(+inp3_1.value >= +inp3_2.value){
            task3.value = inp3_1.value
        }
        else{
            task3.value = inp3_2.value
        }
    }
    else
    {
        task3.value = 'Введите значение хотя бы в одно из полей';
    }
}

//////////////////////////////////////////////////// задача 4
function function4(){
    if(inp4_1.value.length >= 1 || inp4_2.value.length >= 1)
    {
        task4.value = Math.floor(Math.random() * (+inp4_2.value - +inp4_1.value)) + +inp4_1.value
    }
    else
    {
        task4.value = 'Введите значение хотя бы в одно из полей';
    }
}