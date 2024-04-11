console.log("hello");
const arr = [10, 22, 34];
const ans = arr.map((a) => {
    console.log(a);
    return (a);
});
const ans2 = arr.map(a => Math.pow(a, 2));
console.log(ans);
console.log(ans2);
const arr3 = [10.11, 22.32, 34.76];
const ans3 = arr.map(a => parseInt(a));
console.log(ans3);
const arr4 = [10, 22, 34];
arr.push(99);
console.log(arr4);
const arr5 = [10, 22, 34];
const ans5 = arr.filter((a) => {
    if (a > 20) return true;
    else return false;

})
console.log(arr5);
console.log(ans5);
const arr8 = [
    'delhi',
    'mumbai',
    'chennai',
    'kolkata',
    'pune',
    'russia'
]
const ans7 = arr8.filter((s)=>{
    if (s.includes('i')||s.includes('I')) {
       return true;
    } else false;
    
});
console.log(ans7);
const arr11 = [
    'delhi,India',
    'mumbai,india',
    'wuhan,china',
    'kolkata,india',
    'pune,india',
    'russia ,russia'
]
const ans11 = arr11.filter((a)=>a.toLowerCase().includes('india'))
console.log(ans11);
const ans12=ans11.map((a)=>a.toUpperCase());
console.log(ans12);
// const arr13=arr12.reduce();
const arr16=[10,22,34,50];
const ans16=arr16.reduce((a,b,c,d)=>{
    console.log(a,b,c,d);
    return a+b;
    

})
console.log(ans16);
const arr19=['12','20','32','59'];
const ans19=arr19.reduce((a,b,c,d)=>{
    console.log(a,b,c,d);
    return a+b;
    

})
console.log(ans19);

