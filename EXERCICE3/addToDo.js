document.querySelector(".add-to-do").addEventListener("click",()=>{
    let name = document.querySelector("#formGroupExampleInput").value
    let content = document.querySelector("#formGroupExampleInput2").value
    if (!name || !content){
        alert("nothing inserted !")
    }
    else{
        let div = document.createElement('div')
        div.innerHTML=`<span>${name}: ${content} <a><img style="width: 40px;" src="/EXERCICE3/icons/—Pngtree—trash icon_5064226.png" alt=""></a></span>`
        document.querySelector(".article").appendChild(div)
        document.querySelector(".article").addEventListener("click",(e)=>{
            e.target.parentElement.parentElement.remove()
        })  
    }
})
