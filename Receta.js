//JavaScript document
class Receta extends ObjetoGenerico{
    constructor(nombre,descripcion,preparacion,ingredientes,categoria,chef,fechaCreacion){
        super(nombre,descripcion);
        this.preparacion=preparacion;
        this.ingredientes=ingredientes;
        this.categoria=categoria;
        this.chef=chef;
        this.fechaCreacion=fechaCreacion;
    }
    setPreparacion(preparacion){
        this.ingredientes=ingredientes;
    }
    setCategoria(categoria){
        this.categoria=categoria;
    }
    setIngredientes(Ingredientes){
        this.ingredientes=ingredientes;
    }
    setChef(chef){
        this.chef=chef;
    }
    setFechaCreacion(fechaCreacion){
        this.fechaCreacion=fechaCreacion;
    }
    getPreparacion(){
        return this.preparacion;
    }
    
    getCategoria(){
        return this.categoria;
    }
    
    getIngredientes(){
        return this.ingredientes;
    }
    
    getchef(){
        return this.chef;
    }
    
    getFechaCreacion(){
        return this.fechaCreacion;
    }
}