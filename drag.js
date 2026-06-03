let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let items=document.getElementsByClassName("item");
let data=null;
for(let item of items){
    item.addEventListener('dragstart',(e)=>{
        data=e.target;
        box2.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })

    box2.addEventListener('drop',()=>{
        box2.append(data);
        data='';
    })

     box1.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })

    box1.addEventListener('drop',()=>{
        box1.append(data);
        data='';
    })

    })
}