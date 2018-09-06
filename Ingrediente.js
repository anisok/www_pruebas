//Javascript document
class Ingrediente extends ObjetoGenerico{
    constructor(nombre, descripcion, cantidad){
        super(nombre,descripcion);
        this.cantidad=cantidad;
    }
    setCantidad(cantidad){
        this.cantidad=cantidad;
    }
    getCantidad(){
        return this.cantidad;
    }
}