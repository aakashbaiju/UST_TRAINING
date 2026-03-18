let s1:string="correspondence";
let s2:string="";



for(let s:number=0;s<s1.length;s++){
    let count:number=0;
    for(let ss:number=0;ss<s1.length;ss++){
        
        if (s1[s]===s1[ss]){
            count++;
            
        }

    }
    if (count===1){
        s2+=s1[s];
    }
    
    // if(!s2.includes(s1[s])){
    //     s2+=s1[s];
    // }
    
}
console.log(s2);