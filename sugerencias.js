// JavaScript Document

var num=0;
var id_num;

function cargar(){
	var foto;
	++num;
	while (num <= 6){
		foto=document.getElementById("foto"+num);
		foto.src="img/foto"+num+".jpg";
		foto.style.width="240px";
		foto.style.heigh="180px";
		++num;
	}
	
}

