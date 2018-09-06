// JavaScript Document
class ObjetoGenerico{
    constructor(nombre, descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    setNombre(nombre){
        this.nombre = nombre;        
    }
    getNombre(){
        return  this.nombre;
    } 
    setDescripcion(nombre){
        this.Descripcion = Descripcion;        
    }
    getDescripcion(){
        return  this.Descripcion;
    } 
    
}
/** CLASE EXTENDIDA
class Square extends Polygon {
  constructor(length) {
    // Aquí se invoca el constructor de la clase padre con longitud
    // proporcionada por el ancho y alto de Polygon
    super(length, length);
    // Nota: En las clases extendidas, se debe llamar a super()
    // antes de poder usar 'this'. El no hacerlo provocará un reference error.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  } 
  **/
}