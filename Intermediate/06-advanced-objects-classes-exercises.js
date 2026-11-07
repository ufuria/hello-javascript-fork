/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
function persona1 (nombre) {
  this.nombre = nombre
}
persona1.prototype.saludar = function () {
  console.log(`hola!, de parte del objeto: ${this.nombre}`)
}
persona1.prototype.saludar2 = function () {
  console.log(`Hola!!, provengo de: ${this.constructor.name}`)
}
const pedro = new persona1("Pedro")
pedro.saludar()
pedro.saludar2()

// 2. Crea un objeto que herede de otro
//SOLUCION:

let persona2 = {
  nombre : "",
  age: 0
}
persona2.hola = function (){
  console.log(`me llamo ${this.nombre}`)
}
//polimorfismo
let p2 = Object.create(persona2)
p2.nombre = "Sebastian"
p2.hola()
//herencia
p2.profesion = "programador"
console.log(p2.profesion)
console.log(p2)

// 3. Define un método de instancia en un objeto
//console.log(p2 instanceof persona2) no funciona ya que instanceof
//solo funciona con funciones constructoras o clases a su derecha

class Auto{
  constructor(nombre){
    this.nombre = nombre
  }
}
let a1 = new Auto("Mercedes")
console.log("A1 es una instancia de Auto?", a1 instanceof Auto)
// 4. Haz uso de get y set en un objeto
class AutoPrivado{
  #nombre
  constructor(nombre){
    this.#nombre = nombre
  }
  getNombre(){
  return this.#nombre
  }
  setNombre(nuevoNombre){
  this.#nombre = nuevoNombre
  }
}
let ap1 = new AutoPrivado("Enchulame la corkinave")
console.log(ap1.getNombre())
ap1.setNombre("ENCHULAME LA CORKINAVE")
console.log(ap1.getNombre())
// 5. Utiliza la operación assign en un objeto
let datosComputador = {
  placaMadre : ""
}
let trabajador = {
  nombre : ""
}
let trabajadorAll = Object.assign(trabajador, datosComputador)
trabajadorAll.nombre = "Santiago"
trabajadorAll.placaMadre = "Asus B320"
console.log(trabajadorAll)
// 6. Crea una clase abstracta

// 7. Utiliza polimorfismo en dos clases diferentes

// 8. Implementa un Mixin

// 9. Crea un Singleton

// 10. Desarrolla un Proxy
