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
class people{
    constructor(name,price,occupation){
        this.name=name;
        this.price =price;
        this.occupation=occupation;
    }
    helper(){
        //do nothing
    }
}
//The program initializes an array of possible names and an array of possible occupations.
//
const Occupations =["Electrician","RN","Laborer","Truck Driver","Firefighter","Management","Engineer","teacher","programmer","gardener"];

const freelancerName=["James","Noah","Elizabeth","John","Benjamin","Michael","Emma","Thomas","Henry"];


//render initial freelancers array data to webpage
function renderInitialFreelancerData(){
    //document.querySelector is correctly used to select existing DOM elements.
    
    const squareElements = freelancers.map((lancers) => {

        const current = document.querySelector("#Name");
        const element=document.createElement("li");
        element.textContent=lancers.name;
        current.append(element);

        const current1 = document.querySelector("#occupation");
        const element1=document.createElement("li");
        element1.textContent=lancers.occupation;
        current1.append(element1);

        const current2 = document.querySelector("#price");
        const element2=document.createElement("li");
        element2.textContent=lancers.price;
        current2.append(element2);
        
      //return element;

    });
    //current.replaceChildren(...squareElements);
    
    //newLancer=NewRandomFreelancer();

}


//geberate a new random freelancer
//A function is written that generates a freelancer with a random name, occupation, 
//and starting price. This object is pushed into the freelancers array.
function NewRandomFreelancer(){
    const newLancer=new people(freelancerName[Math.floor(Math.random()*freelancerName.length)],Math.floor(Math.random()*100),Occupations[Math.floor(Math.random()*Occupations.length)]);

    const current = document.querySelector("#Name");
    const element=document.createElement("li");
    element.textContent=newLancer.name;
    current.append(element);

    const current1 = document.querySelector("#occupation");
    const element1=document.createElement("li");
    element1.textContent=newLancer.occupation;
    current1.append(element1);

    const current2 = document.querySelector("#price");
    const element2=document.createElement("li");
    element2.textContent=newLancer.price;
    current2.append(element2);

    freelancers.push({name: newLancer.name, price: newLancer.price, occupation: newLancer.occupation})
    if(freelancers.length>=35){
        clearInterval(addFreelancerInterval)
    }

    updateAverage()
}

function updateAverage(){
    document.getElementById("AveragePrice").textContent=AveragePrice(freelancers)
}

//A function is written that correctly calculates the average starting price of the freelancers array.
function AveragePrice(arr){
    const newArr=[]
    arr.forEach((Element)=>{
        newArr.push(Element.price)
    })
    let sum = newArr.reduce((a,b)=>a+b)
    //newArr is an array contains only number of prices
    return (sum/newArr.length).toFixed(2);
}

// testing to see if AveragePrice work properly
//console.log(AveragePrice(freelancers));

