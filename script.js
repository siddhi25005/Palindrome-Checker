let n=document.querySelector(".num");
let button=document.querySelector("button");
let res=document.querySelector(".res");
button.addEventListener("click",()=>{
    let r=0;
    let d;
    let num=parseInt(n.value);
    let t=num;
    while(num!=0){
        d=num%10;
        r=r*10+d;
        num=Math.floor(num/10);
    }
    if(t===r) {
        res.innerText=`Pallindrom No.`;
        res.style.backgroundColor="green";
    }
    else {
        res.innerText=`Not Pallindrom No.`;
        res.style.backgroundColor="red";
    }

})
