// async function api() {
//     try{
//         let response=await fetch("https://apicodethread.cyclic.api");
//         let result=await response.json();
//         console.log(result);
//     }
//     catch(err){
//         console.log("Error aa gaya");
//     }
// }
// api()


let res=document.getElementById("calculate")
let total=document.getElementById("total");
res.addEventListener('click',()=>{
    let n1=Number(document.getElementById("num1").value);
    let n2=Number(document.getElementById("num2").value);
    console.log(n1+n2);
    total.textContent=n1+n2;
})