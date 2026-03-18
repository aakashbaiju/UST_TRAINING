function checkArrival(hour:number,min:number):void{
    const examTime:number=9*60+30;
    const studentTime:number=hour*60+min;

    if (studentTime<examTime){
        console.log("Early");
    }
    else if(studentTime>examTime){
        console.log("Late");
    }
    else{
        console.log("On-time");
    }    

}

function personInfo(name:string,city:string,age?:number){    //optional varible
    if(age){
        console.log(`Name:${name},City:${city},Age:${age}`);
    }
    else{
        console.log(`Name:${name},City:${city}`);
    }
}
const showName = (name:string):void=>{      //anonymous fn
    console.log(`Hi, ${name}`);
}
let names:string[]=["sachin","virat","rohit"]; //array
console.log(names);

for(let i:number = 0;i<names.length;i++){
    console.log(names[i]);
}


let numbers:readonly number[]=[1,2,3,4,5];    //readonly array

let newArray=numbers.map((value)=>value*2);
numbers.forEach((value)=>console.log(value));

let latestArray = numbers.filter((value)=>value%2==0);

let sum = numbers.reduce((a,b)=>a+b,0);     //sum of an array
console.log(sum);
console.log(newArray);
console.log(latestArray);
// checkArrival(9,30);
// personInfo("aakash","thrissur");
// personInfo("akshay","ekm",38);
// showName("aakash");