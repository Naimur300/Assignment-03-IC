// Map,filter,foreach,find Practice


// 01

const snakedPrice = [30,45,20,60,10]

const result = snakedPrice.map(price=>price+13)

console.log(result);

// 02

const playerName = ['Messi' , 'Meradona' ,'Pele' , 'Zidane' , 'Ronaldo']

const newListName = playerName.filter(pname => pname.length > 5)

console.log(newListName);

// 03

const numbers = [10,15,0,25,30,35]

const findNumber = numbers.find(num=> num>20)

console.log(findNumber);

// 04

const heightsData = [65,70,68,72,68,73]

const filterHeight = heightsData.filter(h=>h>69)

console.log(filterHeight);

// 05

const someNumbers = [7,10,15,20,25,30]

const divideNumbers =someNumbers.map(sn=>(sn/3))

console.log(divideNumbers);

// 06

const freindsName = ['Leonardo' , 'Brade Pitt' ,'Kate Winslet' , 'Audrey Hepburn' ,'Johnny Depp']

const newList = freindsName.map(l=>l[2])

console.log(newList);

// 07

const listName = ['Tom' ,'Harry' , 'sam', 'Jack','Henry','hugo']

const findName = listName.find(ln=>ln[0]=='H')

console.log(findName);

// 08

const listNum = [1,2,3,4,5]

function printNum(number){
    const result = number.forEach(n => {
        console.log(n)
        
    });
    return result
}

printNum(listNum)

// 08

const animalName = ['cow','goat','sheep','Horse']

function printAnimalName(animaleName){
    const result = animalName.forEach(n => {
        console.log(n)
        
    });
    return result
}

const print = printAnimalName(animalName)

console.log(print)

// const number = [1, 5, 6, 4, 15];
// const results = numbers.forEach(n => console.log(n));
// console.log(results);

