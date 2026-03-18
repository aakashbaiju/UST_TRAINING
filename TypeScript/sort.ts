let arr:number[]=[8,2,5,1,4,9,7,6,0];
let temp=0;
for(let i:number=0;i<arr.length;i++){
    for(let j:number=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);