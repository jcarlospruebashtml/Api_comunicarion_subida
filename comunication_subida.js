 // JavaScript Document
"use strict";

var zonadatos,boton,el_nombre,el_apellido;

function inicio(){
	zonadatos=document.getElementById("zonadatos");
	boton=document.getElementById("boton");
	boton.addEventListener("click",enviar_datos,false);
}
function enviar_datos(){
		el_nombre=document.getElementById("elnombre").value;
		el_apellido=document.getElementById("elapellido").value;
	
			var datos=new FormData();
			datos.append("nombre",el_nombre);
			datos.append("apellido",el_apellido);
	
				var url="procesar.php";
		
				var solicitud=new XMLHttpRequest();
				solicitud.addEventListener("load", mostrar, false);
				solicitud.open("POST",url,true);
				solicitud.send(datos);
}

	
function mostrar(event){	
	
	zonadatos.innerHTML=event.target.responseText;
}

window.addEventListener("load", inicio, false);