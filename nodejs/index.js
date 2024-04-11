function sum(a,b){
    console.log(a+b);
}
sum(20,3);
// module.exports=sum;
function sub(a,b){
    console.log(a-b);
}
sub(20,3);
function mul(a,b){
    console.log(a*b);
}
const name='yashodhan tyagi';
module.exports={
    fn1:sum,
    fn2:sub,
    fn3:mul,
    'name': name,
};