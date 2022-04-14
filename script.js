
// 1
function doubleValues(arr) {
    let newArr = [];
    arr.forEach((val)=> {
        newArr.push(val*2);
    });
    return newArr
} 


// 2
 function onlyEvenValues(arr){
    let arrNew = []
    arr.forEach((val)=> {
        if(val % 2 === 0){
            arrNew.push(val)
        }
    })
    return arrNew
}


// 3
function showFirstAndLAst(arr){
    let firstLast = []
    arr.forEach((val)=>{
        firstLast.push(val[0]+val[val.length-1])
    })
    return firstLast
}

// 4
function addKEyAndValue(arr,key,value){
    arr.forEach((val)=>{
        val[key] === val
    })
    return arr
}

// 5
function vowelCount(str){
    let strNew = str.split('')
    let obj = {}
    let vowels = 'aeiou'
    strNew.forEach((lowLet)=>{
        let lowerCase = lowLet.toLowerCase()
        if(vowels.indexOf(lowerCase) !== -1){
            if (obj[lowerCase]){
                obj(lowerCase)++
            }
        }
    })
    return obj
}

// 5
function doublesValuesWithMap(arr){
    return arr.map((val)=>{
       return val * 2 
    })
}

// 6
function valTimesIndex(arr){
    return arr.map((val, index)=>{
        return val * index
    })
}

// 7
function extractKey(arr,key){
    return arr.map((val)=>{
        return val[key]
    })
}

// 8
function extractFullName(arr){
    return arr.map((val)=>{
        return `${val.first} ${val.last}`
    })
}

// 9
function filterByValue(arr,key){
    return arr.filter((val)=>{
        return val[key] !== undefined
    })
}

// 10
function find(arr,key,searchVal){
    arr.filter((val)=>{
        return val[key]===searchVal
    })
}

// 11
function findInObj(arr,key,searchVal){
    return arr.filter((val)=>{
        return val[key]===searchVal
    })[0]
}

// 12
function removeVowels(str){
    let vowels = 'aeiou'
    return toLowerCase().split('').filter((val)=>{
        return vowels.indexOf(val) === -1
    })
}

// 13
function doubleOddNumbers(arr){
    return arr.filter((val)=>{
        return val % 2 !== 0
    }).map((val)=>{
        return val * 2
    })
}