let a="aakashiui";
let res="";
let fc=0;
for(let i=0;i<a.length;i++){
    let count=0;
    if ("AEIOUaeiou".includes(a[i])){
        for(let j=0;j<a.length;j++){
            if (a[i]===a[j]){
                count++;
            }
        }
        if (count===1){
             fc++;
        }


    }
    
    
}
console.log(fc);