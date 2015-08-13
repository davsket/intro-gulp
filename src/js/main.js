import mod from "./modulo"

var miVariableLarga = 23
console.log('Hola, tengo ' + miVariableLarga)
mod()

setTimeout(()=>{
  require('./amd')
}, 2000)
