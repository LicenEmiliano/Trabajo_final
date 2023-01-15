let video=document.querySelector(".video")

const iniciarRep=()=>{      
    video.play()
    document.querySelector("#showtime").innerText=video.duration
    
}
const pausarRep=()=>{      
    video.pause()
}


