function fun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Ankit Raj")
        },3000)
    })
}

async function fun(){
    console.log("start")
    let x=await fun1()
    console.log("end")
    console.log(x)
    return x;
}
fun().then((data)=>{
    console.log(data)
})

// *************** food APP ******************

function searchFood(item){
    return new Promise(function fun1(resolve,reject){
        console.log("searching for",item,"...");
        setTimeout(()=>{
            let data=`list of ${item}`;
            resolve([item,data]);
        },2000);
    });
};

function orderFood(item){
    return new Promise(function fun2(resolve,reject){
        console.log("order proceed for",item,"....");
        setTimeout(()=>{
            let id=Math.floor(Math.random()*1000000);
            resolve([item,id]);
        },3000);
    });
};


function payment(item,id){
    return new Promise(function fun3(resolve,reject){
        console.log("payment is start for ",item,"with id :",id);
        setTimeout(()=>{
            let status=true;
            resolve([id,status]);
        },5000);
    })
}


async function mainExecution(item){
    let result1=await searchFood(item);
    console.log("your order is:",result1[0]);
    let result2=await orderFood(result1[0]);
    console.log("Generated ID for your",result2[0],"is:",result2[1]);
    let result3=await payment(result2[0],result2[1]);
    console.log("your payment is make successful for order with id:",result3[0],"with status:",result3[1]);
}

mainExecution("Paneer");

// let food=searchFood("pizza").then((data)=>{
//     console.log("your order is:",data[0]);
//     console.log(data[1]);
//     return orderFood(data[0]);
// }).then((id)=>{
//     console.log("Generated ID for your",id[0],"is:",id[1]);
//     return payment(id[0],id[1])
// }).then((status)=>{
//     console.log("your payment is make successful for order with id:",status[0],"with status:",status[1]);
// })

