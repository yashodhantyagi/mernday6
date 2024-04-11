const figlet= require('figlet');
figlet('yashodhan tyagi',(err,data)=>{
    console.log(data);
});
fetch('https://api.github.com/users/deepak')
.then((res)=>{
    return res.json();

})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log('error occured!')
})
console.log("end");
async function getApi(){
    console.log('api calling...');
    const pr= await fetch('https://api.github.com/users/deepak111');
    // console.log(pr);
    console.log('start json');

    const data=await pr.json();
    console.log('::fetched data::');
        // console.log(data);
}
getApi();
console.log('end');
