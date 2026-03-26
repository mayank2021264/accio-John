/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.filter((element) => {
    if(element.profession === "developer"){
      console.log(element);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element) => {
    if(element.profession === "developer"){
      console.log(element);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newEntry = {
    id: 4,
    name: "Neel",
    age: "27",
    profession: "Engineer"
  }
  arr.push(newEntry);
  for(let element of arr){
    console.log(element);
  }
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((element) => {
    if(element.profession !== "admin"){
      console.log(element);
    }
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    {id : 5, Name : "Kumar", Age : 24, Profession : "admin"},
    {id : 6, Name : "Lokesh", Age : 28, Profession : "manager"},
    {id : 7, Name : "Ravi", Age : 28, Profession : "developer"}
  ];
  let result = arr.concat(arr2);
  for(let element of result){
    console.log(element);
  }
}
