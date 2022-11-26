const formulario = document.getElementById("form")
const opSello=document.getElementById('sello')
const opCara=document.getElementById('cara')
const textR=document.getElementById('text')
const textApu=document.getElementById('textApu')
const imgPrograma=document.getElementById('img-P')
const cara = 0
const sello = 1


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("funciona")
    document.getElementById("buttons").style.visibility = 'visible'
})

opCara.addEventListener("click", ()=>{
  juego(cara)
})


opSello.addEventListener("click", ()=>{
  juego(sello)
})



function juego(opcion){
    var valorA =document.getElementById("apuesta").value
    let acumulado=valorA

      textR.innerHTML = "LANZANDO..."

      imgPrograma.src = "img/gif.webp"

      const transicion = setInterval(function(){
          const m = Math.floor(Math.random()* 2)
      }, 100)


        setTimeout(function(){
          clearInterval(transicion)
      
          const m = Math.floor(Math.random()* 2)
          imgPrograma.src = "img/"+m+".png"
        
            if(opcion == m ){
              textR.innerHTML = "GANASTE"
              acumulado = (acumulado*2)
            
            }else{
              textR.innerHTML = "PERDISTE"
              acumulado = (acumulado - (acumulado*0.3))
            }

            textApu.innerHTML = acumulado

      
        }, 2000)

  }
  

