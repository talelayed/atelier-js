let parag = document.querySelector("#parag")
document.querySelector("#autoSizingInput").addEventListener("change",(e)=>{
    parag.style.color=e.target.value
})
document.querySelector("#autoSizingInputGroup").addEventListener("change",(e)=>{
    parag.style.fontSize=e.target.value+"px"
})
document.querySelector(".options").addEventListener("change",(e)=>{
    console.log(e.target.value);
    parag.style.fontFamily=e.target.value
    
})