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

let food=searchFood("pizza").then((data)=>{
    console.log("your order is:",data[0]);
    return orderFood(data[0]);
}).then((id)=>{
    console.log("Generated ID for your",id[0],"is:",id[1]);
    return payment(id[0],id[1])
}).then((status)=>{
    console.log("your payment is make successful for order with id:",status[0],"with status:",status[1]);
})




// *************** PROMISE METHODS *********************


//********************* PROMISE.ALL()*********

function api1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("API-1")
        },1000)
    })
}

function api2(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            resolve("API-2") 
        },2000)
    })
}
function api3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("API-3")
        },3000)
    })
}

let result=Promise.all([api1(),api2(),api3()]).then((data)=>{
    console.log(data)
}).catch((data)=>{
    console.log(data)
})

//******************** PROMISE.ALLSETTLED()*********

function api1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("API-1")
        },1000)
    })
}

function api2(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            resolve("API-2") 
        },2000)
    })
}
function api3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("API-3")
        },3000)
    })
}

let result=Promise.allSettled([api1(),api2(),api3()]).then((data)=>{
    console.log(data)
})



//******************** PROMISE.RACE()*********

function api1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("API-1 is reject")
        },1000)
    })
}

function api2(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            resolve("API-2") 
        },2000)
    })
}
function api3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("API-3")
        },3000)
    })
}

let result=Promise.race([api1(),api2(),api3()]).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})



//******************** PROMISE.ANY()*********

function api1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("API-1")
        },1000)
    })
}

function api2(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            reject("API-2") 
        },2000)
    })
}
function api3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("API-3")
        },3000)
    })
}

let result=Promise.any([api1(),api2(),api3()]).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})