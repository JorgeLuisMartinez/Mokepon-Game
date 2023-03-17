// UNIRSE AL JUEGO
unirseAlJuego()
// Variables
//const
const botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
sectionSeleccionarAtaque.style.display = 'none'

const sectionVerMapa = document.getElementById('ver-mapa')
sectionVerMapa.style.display = 'none'

const botonReiniciar = document.getElementById("boton-reiniciar")
botonReiniciar.addEventListener('click', reiniciarJuego)

const sectionReiniciar = document.getElementById('reinciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const sectionMensajes = document.getElementById("resultado");
const divAtaqueJugador = document.getElementById("ataque-jugador");
const divAtaqueEnemigo = document.getElementById("ataque-enemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const mapa = document.getElementById('mapa')
const anchoMaximoDelMapa = 550

// let
let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
let ataqueEnemigo = []
let ataqueJugador = []
let botones = []
let indexAtaqueJugador 
let indexAtaqueEnemigo
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3
let opcionDeMokepones
let botonFuego 
let botonAgua 
let botonTierra 
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let inputLangostelvis
let inputPydos
let inputTucapalma
let victoriasJugador = 0
let victoriasEnemigo = 0
// variables CANVA
let lienzo = mapa.getContext('2d')
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
let alturaQueBuscamos   
let anchoMapa = window.innerWidth - 20

if (anchoMapa > anchoMaximoDelMapa) {
    anchoMapa = anchoMaximoDelMapa -20 
}
alturaQueBuscamos = anchoMapa * 600/800

mapa.width = anchoMapa
mapa.height = alturaQueBuscamos

// Clases
class Mokepon{
    constructor(nombre, foto, vida, fotoMapa, id=null){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
// creando mokepones haciendo uso de la clase Mokepon
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png')
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png')
let langostelvis = new Mokepon("Langostelvis", "./assets/mokepons_mokepon_langostelvis_attack.png", 5, './assets/langostelvis.png')
let pydos = new Mokepon("Pydos", "./assets/mokepons_mokepon_pydos_attack.png", 5, './assets/pydos.png')
let tucapalma = new Mokepon("Tucapalma", "./assets/mokepons_mokepon_tucapalma_attack.png", 5, './assets/tucapalma.png')

// creando mokepones enemigos haciendo uso de la clase Mokepon


const HIPODOGE_ATAQUES = [
    { nombre:'💧', id: 'boton-agua' },
    { nombre:'💧', id: 'boton-agua' },
    { nombre:'💧', id: 'boton-agua' },
    { nombre:'🔥', id: 'boton-fuego' },
    { nombre:'🍃', id: 'boton-tierra' }
]
const CAPIPEPO_ATAQUES = [
    { nombre:'🍃', id: 'boton-tierra' },
    { nombre:'🍃', id: 'boton-tierra' },
    { nombre:'🍃', id: 'boton-tierra' },
    { nombre:'🔥', id: 'boton-fuego' },
    { nombre:'💧', id: 'boton-agua' }
]
const RATIGUEYA_ATAQUES = [
    { nombre:'🔥', id: 'boton-fuego' },
    { nombre:'🔥', id: 'boton-fuego' },
    { nombre:'🔥', id: 'boton-fuego' },
    { nombre:'💧', id: 'boton-agua' },
    { nombre:'🍃', id: 'boton-tierra' }
]
const LANGOSTELVIS_ATAQUES = [
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"} 
]
const PYDOS_ATAQUES = [
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"}
]
const TUCAPALMA_ATAQUES = [
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"}
]
// insertar objetos en el arreglo con .push
hipodoge.ataques.push(...HIPODOGE_ATAQUES)
capipepo.ataques.push(...CAPIPEPO_ATAQUES)
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)
pydos.ataques.push(...PYDOS_ATAQUES)
tucapalma.ataques.push(...TUCAPALMA_ATAQUES)


//          for each 
    mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,pydos,tucapalma)
    mokepones.forEach((mokepon)=>{
        /* console.log(mokepon.nombre) */
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class ="tarjeta-de-mokepon" for=${mokepon.nombre} >
            <p>${mokepon.nombre}</p>
            <img class="hipodoge-img" src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
    inputLangostelvis = document.getElementById('Langostelvis')
    inputPydos = document.getElementById('Pydos')
    inputTucapalma = document.getElementById('Tucapalma')
})
// Funciones
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function seleccionarMascotaJugador(){
    // se hace la logica condicional
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else{
        alert("SELECCIONA PRIMERO UNA MASCOTA !!")
        return
    }
    sectionSeleccionarMascota.style.display = 'none'
    seleccionarMokepon(mascotaJugador)
    extraerAtaque(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}
function seleccionarMokepon(mascotaJugador){
    fetch(`http://192.168.80.44:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}
function extraerAtaque(mascotaJugador){
    let ataques
    for (let i = 0; i< mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll('.BAtaque')
    
}
function secuenciaAtaques() {
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e)=>{
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO!🔥')
                console.log(ataqueJugador)
                boton.style.background ='#112f58'
                boton.disabled = true
                                                          
            }else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA!💧')
                console.log(ataqueJugador)
                boton.style.background ='#112f58'
                boton.disabled = true
                
            }else{
                ataqueJugador.push('TIERRA!🍃')
                console.log(ataqueJugador)
                boton.style.background ='#112f58'
                boton.disabled = true
            }
            if(ataqueJugador.length === 5){
                enviarAtaques() 
            }  
        })
    })
}
function enviarAtaques() {
    fetch(`http://192.168.80.44:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })
    intervalo = setInterval(obtenerAtaques, 50)
}
function obtenerAtaques(){
    fetch(`http://192.168.80.44:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res){
            if(res.ok){
                res.json()
                    .then(function ({ataques}){
                        if (ataques.length === 5){
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}
function seleccionarMascotaEnemigo (enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaques()
}

function ataqueAleatorioEnemigo(){
    console.log(ataquesMokeponEnemigo);
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO!🔥') 
    } else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA!💧') 
    } else{
        ataqueEnemigo.push('TIERRA!🍃')
    }
    console.log(ataqueEnemigo)
    iniciarJuego()
    
}
function iniciarJuego(){
    if(ataqueJugador.length === 5){
        combate ()
    }
}
function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
    
}
function combate (){
    clearInterval(intervalo)
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje('EMPATE 🤝')
        } else if(ataqueJugador[index] === 'AGUA!💧' && ataqueEnemigo[index] === 'FUEGO!🔥'){
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE 🎉✨')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[index] === 'FUEGO!🔥' && ataqueEnemigo[index] === 'TIERRA!🍃'){
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE 🎉✨')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[index] === 'TIERRA!🍃' && ataqueEnemigo[index] === 'AGUA!💧'){
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE 🎉✨')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else{
            indexAmbosOponentes(index, index)
            crearMensaje('PERDISTE 😕💔')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }
    revisarVictorias()
}

function revisarVictorias(){
    
    if (victoriasJugador == victoriasEnemigo){
        crearMensajeFinal("ESTUVISTE CERCA, EMPATE")
    } else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES, GANASTE")
    } else{
        crearMensajeFinal("LO SIENTO, PERDISTE")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo=document.createElement('p')
    sectionMensajes.innerHTML= resultado
    nuevoAtaqueDelJugador.innerHTML= indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML= indexAtaqueEnemigo
    divAtaqueJugador.appendChild(nuevoAtaqueDelJugador)
    divAtaqueEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = 'block'
}
function reiniciarJuego(){
    location.reload()
}
// FUNCIONES CANVAS

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    
    enviarPocision(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)    
    
    mokeponesEnemigos.forEach(function(mokepon){
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
}
function enviarPocision(x, y){
    fetch(`http://192.168.80.44:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if(res.ok){
            res.json()
                .then(function({ enemigos }){
                    console.log(enemigos)
                    mokeponesEnemigos = enemigos.map(function (enemigo){
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if(mokeponNombre === "Hipodoge"){
                            mokeponEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png', enemigo.id)
                        }else if(mokeponNombre === "Capipepo"){
                            mokeponEnemigo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png', enemigo.id)
                        }else if(mokeponNombre === "Ratigueya"){
                            mokeponEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png', enemigo.id)
                        }else if(mokeponNombre === "Langostelvis"){
                            mokeponEnemigo = new Mokepon("Langostelvis", "./assets/mokepons_mokepon_langostelvis_attack.png", 5, './assets/langostelvis.png', enemigo.id)
                        }else if(mokeponNombre === "Pydos"){
                            mokeponEnemigo = new Mokepon("Pydos", "./assets/mokepons_mokepon_pydos_attack.png", 5, './assets/pydos.png', enemigo.id)
                        }else if(mokeponNombre === "Tucapalma"){
                            mokeponEnemigo = new Mokepon("Tucapalma", "./assets/mokepons_mokepon_tucapalma_attack.png", 5, './assets/tucapalma.png', enemigo.id)
                        }
                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y
                        return mokeponEnemigo

                    })    
                })
        }
    })
}
function iniciarMapa(){
    //tamaño de mapa


    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)

    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionaUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}
function sePresionaUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break;
    }
}
function  obtenerObjetoMascota(){
    for (let i = 0; i< mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}
function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y + 25
    const abajoEnemigo = enemigo.y + enemigo.alto -25
    const izquierdaEnemigo = enemigo.x + 25
    const derechaEnemigo = enemigo.x + enemigo.ancho -25
    
    const arribaMascota = mascotaJugadorObjeto.y +25
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto -25
    const izquierdaMascota = mascotaJugadorObjeto.x +25
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho -25

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    alert("Un " + enemigo.nombre + " salvaje ha aparecido")
    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}
function unirseAlJuego(){
    fetch("http://192.168.80.44:8080/unirse")
    .then(function (res){
        console.log(res)
        if(res.ok){
            res.text()
                .then(function(respuesta){
                    console.log(respuesta)
                    jugadorId = respuesta
                })
        }
    })
}
// ESCUCHAR EL EVENTOS


