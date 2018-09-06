//JavaScript document
class   Usuario extends ObjetoGenerico{
    constructor(nombre,apellido ,descripcion, pass, cumple, email, cel){
        super(nombre, descripcion);
        this.pass=pass;
        this.cumple=cumple;
        this.email=email;
        this.cel=cel;        
    }
    setApellido(apellido){
        this.apellido=apellido;
    }
    setPass(pass){
        this.pass=pass;
    }
    setCumple(cumple){
        this.cumple=cumple;
    }
    setEmail(){
        this.email=email;
    }
    setCel(){
        this.cel=cel;
    }
    getApellido(){
        return this.apellido;
    }
    getPass(){
        return this.pass;
    }
    getCumple(){
        return this.cumple;
    }
    getEmail(){
        return this.email;
    }
    getCel(){
        return this.cel;
    }
}