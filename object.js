//Object creation
let user = {
    name: "Jeff",
}

user.surname = "Bob"
user.name = "Pete"
delete user.name

// empty Object
function isEmpty(x) {
    for (let key in object) {

        return false;
    }
    return true;
}

//sum of all salaries and store in variable Sum

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;

function sumSal(salaries) {

    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}

// multiply all numeric property values of pbj by 2
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof (menu[key]) == Number) {
            menu.key = 2 * menu[key];
        }
    }
    // alert(menu)
}

let a = {};
let b = { a: 1, b: 2, c: "apple", d: ["apple", 'Pear'], name: 'wap', age: 30 };
//  console.log(a,b);

//update
// console.log(b.c);
b.a = b.a + 2;
b.d.push('grapes');
// console.log(b.a,b.d);

//insert
b.e = "Earth";
// console.log(b);

//delete
delete b.a;
// console.log(b);

//update to different type
b.b = ['newarray'];
// console.log(b);

//Read property by variable name
// console.log(b.name);
// let propName = 'name';
// console.log(b[propName])

// let tempArray = [];
// for(let key in b){
// console.log(key, b[key]);
//     tempArray.push(b[key])
// }
// console.log(tempArray)

// Inverse
// let simpleObj ={name:'wap',age:30,skill:'javascript'};
// let newObj = {};
// for(let key in simpleObj){
//     newObj[simpleObj[key]]=key;
// }
// console.log(newObj);

// Collect names
// let objArray = [{name:'wap',id:'472'},{name:'ea',id:'568'}];
// let nameArray = [];
// for(let ele of objArray){
//     console.log(ele);
//     nameArray.push(ele.name);
// }
// console.log(nameArray);

//Find the course that has greater id 
// let objArray = [{name:'wap',id:'472'},{name:'ea',id:'568'}];
// let maxCourseId=0;
// let maxCourseObj ;
// for(let ele of objArray){
//     // console.log(ele);
//     if(maxCourseId<ele.id){
//         maxCourseId=ele.id;
//         maxCourseObj = ele;
//     }
// }
// console.log(maxCourseObj);



// console.log(typeof {a:1,b:2});
// console.log(typeof [10,20]);

let arr1 = [3, 4];
// let arr2 = arr1;
// arr1.push(9);
// let arr2 = [];
// for(let ele of arr1){
//     arr2.push(ele);
// }
// let arr2 = [...arr1];

// console.log(arr1,arr2);
// arr2.push(9);
// console.log(arr1,arr2)
// console.log(arr1,arr2);

// let num1= 10;
// let num2 = num1;
// num2=num2+1;
// console.log(num1,num2);

// convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}} 

let obj = { a: 1, b: 2, c: [10, 20], d: { x: 1, y: 2 } }
//[a1,b2]
function convert(obj) {
    let array = [];
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            let str = '';
            for (let ele of obj[key]) {
                str += ele;
            }
            console.log(str)
            array.push(key + str);
        } else if (typeof obj[key] == 'object') {
            let objValue = obj[key];
            for (let key1 in objValue) {
                array.push(key + key1 + objValue[key1])
            }
        }
        else
            array.push(key + obj[key]);
    }
    return array;
}
// console.log(convert(obj));

// destructureArray([50,”apple”,{a:1}])=>
// {number0:50,string1:”apple”,object2:{a:1}}

function destructureArray(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[typeof array[i] + i] = array[i];
    }
    return obj
}
// console.log(destructureArray([50,'apple',{a:1}]));

function arrayToString(array) {
    let stringOutput = '';
    for (let ele of array) {
        stringOutput += ele + ",";
    }
    let string = stringOutput.substring(0, stringOutput.length - 1)
    return string;
}
// console.log(arrayToString(['a','b','c']));

// function minifyObject(objArray){
//     let finalArray = [];
//     for(let ele of objArray){
//         finalArray.push({a:ele.a});
//     }
//     return finalArray;
// }
// console.log(minifyObject([{a:1,b:2,c:2},{a:2,b:3,c:4}]))


// function minifyObject(objArray) {
//     let finalArray = [];
//     for (let ele of objArray) {
//         let tempObj = {};
//         for (let key in ele) {
//             if (key != 'a'){
//                 tempObj[key]=ele[key];
//             }
//        }
//        finalArray.push(tempObj);
//     }
//     return finalArray;
// }
// console.log(minifyObject([{ a: 1, b: 2, c: 2 }, { a: 2, b: 3, c: 4 }]))

// const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
// const correctAnswers = [3, 1, 2,4];
// let result = [];
// function getScore(studentAnswers, correctAnswers) {
//     for (let i = 0; i < studentAnswers.length; i++) {
//         let score = 0;
//      for (let j = 0; j < studentAnswers[i].length; j++) {
//         if (studentAnswers[i][j] == correctAnswers[j]) {
//            score += 1;
//          } 
//      }
//      result.push(score);
//     }
//     console.log(result);
//     return result;
// }

// getScore(studentAnswers, correctAnswers);

// const forecast2 = [80, 80, 80];
// const observed2 = [82, 85, 74]; 
// scoreForecasts(forecast2, observed2);
// 1st Temp (80,82) - 2 degrees – 100%
// 2nd Temp (90,95) - 5 degrees – 80%
// 3rd Temp (85,70) - 15 degrees – 0% 

// function scoreForecasts(forecast2, observed2) {
//     let avg = 0;
//     let sum = [];
    
//     for (let i = 0; i < forecast2.length; i++) {
//         let diff = observed2[i] - forecast2[i];
//         if(diff <0){
//         diff = diff * -1;
//         }
//         console.log(diff);
//         if (diff >=0 && diff <=2) {
//             sum.push(100);
//         }
//         else if (diff > 2 && diff <= 5) {
//             sum.push(80);
//         }
//         else if (diff > 5 && diff <= 10) {
//             sum.push(60);
//         }
//         else {
//             sum.push(0);
//         }
//     }
//     console.log(sum);
//     for (let ele of sum) {
//         avg += ele;
//     }
//     avg = avg / sum.length;
//     console.log(avg);
//     return avg;
// }

testArr1 = [ [1,2,3], [5,2,3], [9,2,3] ]
// first row Sum = 1+2+3 = 6
// first column Sum = 1+5+9 ->15
// firstRowColSum (testArr1) à [6, 15]

// function firstRowColSum(testArr1) {
//     let firstRowSum = 0;
//     let firstColSum = 0;
//     let firstRowColSum = [];
//     for (let i = 0; i < testArr1.length; i++) {
//         for (let j = 0; j < testArr1[i].length; j++) {
//             if (i == 0) {
//                 firstRowSum += testArr1[i][j];
//             }
//             if (j == 0) {
//                 firstColSum += testArr1[i][j];
//             }
//         }      
//     }
//     firstRowColSum.push(firstRowSum);
//     firstRowColSum.push(firstColSum);
//     console.log(firstRowColSum);
//     return firstRowColSum;
// }
// firstRowColSum(testArr1);

 const arr = [50, "apple",{a:1}];
// let objs = [];
// function printTypeofEl(arr){
// for (const key in arr) {
//    objs.push(typeof arr[key]);
// }
// console.log(objs);
// return objs;
// }

// printTypeofEl(arr);

//implement push method
// let arr3 = ["a","b","c","d"];

// function strToArr(arr){
//     let end = arr.length;
//     for(let i = 0; i<end; i++){
//         if(i == 3){
//             arr[end] = "e";
//         }
     
//     }
//       console.log(arr)
// }

// strToArr(arr)

// let tataTiago = {name:"Tata Tiago",manufacturer:"Tata",fuelType:"petrol",bodyType:"hatchback",seatingCapacity:5,price:5000}
// let nexon = {name:"Tata Nexon",manufacturer:"Tata",fuelType:"diesel",bodyType:"SUV",
// seatingCapacity:5,price:7000};
// let mahindra = {name:"Mahindra XUV700",manufacturer:"Mahindra",fuelType:"petrol",
// bodyType:"SUV", seatingCapacity:5,price:7500};
// let mg = {name:"MG ZS EV",manufacturer:"Mahindra",fuelType:"Electric",bodyType:"SUV",
// seatingCapacity:5,price:25000};
// let volvo ={name:"Volvo XC90",manufacturer:"Volvo",fuelType:"petrol",bodyType:"hybrid",
// seatingCapacity:7,price:35000};

// let list = [tataTiago,nexon,mahindra,mg,volvo]
// let newList = [];

// function getPetrol(list,prices){
//     for(let obj of list){
//         if(obj.price<prices && obj.fuelType == "petrol"){
//             newList.push(obj);
//         }
       
//     }
//     console.log(newList)
//     return newList;
// }
// let price = 8000;

// getPetrol(list,price);

// let tatacount =0;
// let mahindracount =0;
// let volvocount =0;

// function getPetrol(list){
//     for(let obj of list){
//        if(obj.manufacturer == "Tata"){
//            tatacount+=1;
//        }
//        if(obj.manufacturer == "Volvo"){
//            volvocount+=1;
//        }
//        if(obj.manufacturer == "Mahindra"){
//            mahindracount+=1;
//        }
//     }
//     console.log("Tata: "+tatacount + " Volvo: "+ volvocount + " Mahindra: " + mahindracount)
//     return tatacount + volvocount + mahindracount;
// }

// getPetrol(list);

// add another property to an object

// let newObj = [];

// function addServiceCostToAllCars(list,value){
//     for(let obj of list){
//         obj.serviceCost = value;
//         newObj.push(obj)
//     }
//     console.log(newObj)
// }

// addServiceCostToAllCars(list,100)

//Sensor
// let frontDoor = {id:1,name:"Front Door Sensor",type:34,manufacturer:"Climax",
// events:[{time:"100",name:"Door Closed"}, {time:"101",name:"Door Opened"}]};
// let motionSensor = {id:2,name:"Motion Sensor",type:43,manufacturer:"NYCE",
// events:[{time:"100",name:"Motion Detected"}]};
// let porticoLight ={id:3,name:"Portico Light",type:54,manufacturer:"Osram",
// events:[{time:"100",name:"Light off"}]};
// let mainEntrance = {id:4,name:"Main Entrance",type:34,manufacturer:"Climax",
// events:[{time:"100",name:"Door Closed"}]};
// let list = [frontDoor, motionSensor, porticoLight, mainEntrance] ;
//{ Climax: 2, NYCE: 1, Osram: 1 } 
// let new_obj = {};
// let count =0;
// let c_climax=0;
// let c_NYCE=0;
// let c_Osram=0;

// function groupSensorsByManufacturer(list){
//     for(let obj of list){
//         if(obj.manufacturer == "Climax"){
//             c_climax+=1;
//             new_obj[obj.manufacturer] = c_climax;
//         }
//         else if(obj.manufacturer == "NYCE"){
//             c_NYCE+=1;
//             new_obj[obj.manufacturer] = c_NYCE;
//         }
//         else if (obj.manufacturer == "Osram"){
//             c_Osram+=1;
//             new_obj[obj.manufacturer] = c_Osram;
//         }
//     }
//     console.log(new_obj)
//  return new_obj;
// }

// groupSensorsByManufacturer(list)

//get the most resent event of a sensor
// let new_obj=[]
// function getLatestEventofSensor(list,y){
//     for(let obj of list){
//         for(let key of obj.events){
//             new_obj.push(key);
        
//         } 
//     }
    
//     console.log(new_obj.sort((a,b)=>{
//         if(a.time > b.time){
//             return -1;
//         }
//         else if(a.time<b.time){
//             return +1;
//         }
//         else{
//             return 0;
//         }
//     }))
    
// }

// getLatestEventofSensor(list,1)

//find most popular event of a sensor
// let new_obj = {};
// let count =0;
// let c_climax=0;
// let c_NYCE=0;
// let c_Osram=0;
// let max =0;
// let temp;
// function groupSensorsByManufacturer(list){
//     for(let obj of list){
//         if(obj.manufacturer == "Climax"){
//             c_climax+=1;
//             new_obj[obj.manufacturer] = c_climax;
//         }
//         else if(obj.manufacturer == "NYCE"){
//             c_NYCE+=1;
//             new_obj[obj.manufacturer] = c_NYCE;
//         }
//         else if (obj.manufacturer == "Osram"){
//             c_Osram+=3;
//             new_obj[obj.manufacturer] = c_Osram;
//         }
//     }
//     for(let key in new_obj){
//         if(new_obj[key] > max){
//             max = new_obj[key];
//             temp = key;
//         }
        
        
//     }
//     console.log(new_obj)
//     console.log(temp)
    
//  return new_obj;
// }