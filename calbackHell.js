function colorChange(){
    let first=Math.floor(Math.random()*256);
    let sec=Math.floor(Math.random()*256);
    let thrd=Math.floor(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${first},${sec},${thrd})`;
}

setInterval(colorChange,1000);


// CALLBACK HELL ***********

function searchFood(item,fun1){
    console.log("searching for",item,"...");
    setTimeout(()=>{
        let data=`list of ${item}`;
        fun1(data)
    },2000)
}

function orderFood(item,fun2){
    console.log("order proceed for",item,"....");
    setTimeout(()=>{
        let id=Math.floor(Math.random()*1000000);
        fun2(id);
    },3000)
}

function payment(item,id,fun3){
    console.log("payment is start for ",item,"with id :",id);
    setTimeout(()=>{
        let status=true;
        fun3(status);
    },5000);
}

searchFood("pizza",(data)=>{
    console.log(data);
    orderFood("pizza",(id)=>{
        console.log("your order id is",id);
        payment("pizza",id,(status)=>{
            console.log("your payment is make successful with status:",status);
        })
    })
});


// ***************PROMISE CHAINING****************


let promise=new Promise(function func(resolve,reject){
    resolve("reject ho gya");
}).then((data)=>{
    console.log(data)
    return "ankit raj is a good coder";
}).then((data)=>{
    console.log(data);
})
