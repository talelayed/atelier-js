const random = Math.floor (Math.random () *10);
console.log(random);
const play = () =>{
    const x = prompt("donner le nombre d'éssai ")
    let y = x

while(y>=0){
    let z = prompt("donner le numéro: ")
    if(z==random){
        alert("BRAVO")
        break
    }
    y--
    if (!y) {
        alert("YOU LOSE!")
        break
    }
}
}