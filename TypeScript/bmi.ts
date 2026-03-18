function bmi(height:number,weight:number):void{
    height=height/100;
    const bmii=weight/(height*height);

    if (bmii < 18.5){
        console.log("Under-weight");
    }
    else if(bmii>18.5 || bmii<25){
        console.log("Normal");
    }
    else if(bmii>25 || bmii<30){
        console.log("Over-weight");
    }
    else{
        console.log("Obesity")
    }
    console.log(bmii);
}    
bmi(175,71)