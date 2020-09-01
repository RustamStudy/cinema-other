//////////////////////////////////////////////////// задача 1
const arrr = [
    'тут может быть ваша реклама',
    123456789,
    true,
    false,
    null
]
console.log(arrr);
task1.value = JSON.stringify(arrr);

//////////////////////////////////////////////////// задача 2
const a3 = {
            3 : 'hello',
            'one' : 'hi',
            'testt' : 'vodoley',
            'ivan' : 'ivanov'
};
let result = {};
for(let key in a3){
    if(String(key).length>4) 
        result[key]=a3[key];
};
task2.value = JSON.stringify(result);
//////////////////////////////////////////////////// задача 3
let obj = {}
function task3(){
    obj[inp1.value] = inp2.value;

    task3_1.value = JSON.stringify(obj);
    
}


//////////////////////////////////////////////////// задача 4
const a = ['Tor', 'Lokki', 'Odin', 34, 'privet'];
task4.value = a.length;


//////////////////////////////////////////////////// задача 5
const d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
let a1 = [], a2 = [];
for (let i = 0; i < d.length; i++)
{
    if(d[i]%2 == 0)
    {
        a1.push(d[i])
    }
    else
    {
        a2.push(d[i])
    }
}
task5_1.value = a1;
task5_2.value = a2;


//////////////////////////////////////////////////// задача 6
const e = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78]
let result6 = '';
for (let i = 0; i < e.length; i++)
{
    result6 += `Порядок - ${i}, значение - ${e[i]} \n`
}

task6.value = result6;