//The program initializes an array of at least two freelancers with names, occupations, and starting prices.
//define an initial array of freelancers
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];
//The program initializes an array of possible names and an array of possible occupations.
//
const Occupations =["Electrician","RN","Laborer","Truck Driver","Firefighter","Management","Engineer","teacher","programmer","gardener"];

const freelancerName=["James","Noah","Elizabeth","John","Benjamin","Michael","Emma","Thomas","Henry"];


//render initial freelancers array data to webpage
function renderInitialFreelancerData(){
    //document.querySelector is correctly used to select existing DOM elements.
    const current = document.querySelector("#Freelancers");
    const squareElements = freelancers.map((lancers) => {
      const element = document.createElement("li");
      element.textContent=JSON.stringify(lancers)
      element.classList.add(lancers.price);
      return element;
    });
    current.replaceChildren(...squareElements);
}


//geberate a new random freelancer
//A function is written that generates a freelancer with a random name, occupation, 
//and starting price. This object is pushed into the freelancers array.
function NewRandomFreelancer(){
    
}
//A function is written that correctly calculates the average starting price of the freelancers array.
function AveragePrice(arr){
    const newArr=[]
    arr.forEach((Element)=>{
        newArr.push(Element.price)
    })
    let sum = newArr.reduce((a,b)=>a+b)
    //newArr is an array contains only number of prices
    return sum/newArr.length;
}

// testing to see if AveragePrice work properly
//console.log(AveragePrice(freelancers));

//const addFreelancerInterval= setInterval(theFunction,5000)