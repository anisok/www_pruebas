//JavaScript document
class Chef extends Usuario{
    constructor(nombre,descripcion,fotoPerfil,especialidad,cant_recetas){
        super(nombre,descripcion);
        this.fotoPerfil=fotoPerfil;
        this.especialidad=especialidad;
        this.cantRecetas=cantRecetas;
    }
    
    setFotoPerfil(fotoPerfil){
        this.fotoPerfil=fotoPerfil;
    }
    setEspecialidad(especialidad){
        this.especialidad=especialidad;
    }
    setCantRecetas(cantRecetas){
        this.cantRecetas=cantRecetas;
    }
    
    getFotoPerfil(fotoPerfil){
        return this.fotoPerfil;
    }
    getEspecialidad(especialidad){
        return this.especialidad;
    }
    getCantRecetas(cantRecetas){
        return this.cantRecetas;
    }
}