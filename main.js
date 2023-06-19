setInterval(()=>{

    
    let hours=document.querySelector("#hour");
    let minute=document.querySelector("#minute")
    let second=document.querySelector("#second")
    let ampm=document.querySelector("#ampm")

    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    h= (h<10) ? "0"+h :h
    m= (m<10) ? "0"+m :m
    s= (s<10) ? "0"+s :s
    ampm=(h>12) ? ampm.innerHTML="PM":"AM"
    hours.innerHTML=h-12
    minute.innerHTML=m
    second.innerHTML=s
})