
let st1:string="correspondence";
let st2:string="";

for(let s:number=0;s<st1.length;s++){
    let count=0;
    if(!"aeiouAEIOU".includes(st1[s])){
        st2+=st1[s];
    }
    else{
        for(let r=0;r<st1.length;r++){
            if(st1[s]===st1[r]){
                count++;
            }
        }
        if (count===1){
            st2+=st1[s];
        }
    }
}

console.log(st2);

