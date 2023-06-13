const btnSi=()=>{
    alert("Sabia que dirias que sí");
}

const btnNo=(event)=>{
    let target = event.target,
    randomX = numeroRandom(0,500),
    randomY = numeroRandom(0,900)
    target.style.position = "absolute";
    target.style.top = randomX+"px"
    target.style.left = randomY+"px"
}

const numeroRandom = (min,max) =>{
    return Math.floor(Math.random()*(max-min));
}



