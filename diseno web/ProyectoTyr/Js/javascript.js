






































/*
function Estudiante(_cedula,_nombre,_promedioF){
    this.cedula=_cedula;                              
    this.nombre=_nombre;
    this.promedioF=_promedioF;
    this.obtenerInformacion=function(){
        return this.cedula+" - "+this.nombre+" - "+this.promedioF;
    };

} 
var lista=[];
$("#cargar").click(tomarDatos);
function tomarDatos() {
    var cedula=Number($("#ci").val());
    var nombre=$("#nom").val();
    var promedioF=Number($("#promedio").val());
    var estudiante=new Estudiante(cedula,nombre,promedioF); 
    var cantidad=0;
    
    if (nombre=="" || ci=="" || promedioF=="") {
        alert("Error, debe completar los campos");
    }else{
        if(promedioF <1) {
            alert("Error, ingrese un valor entre 1 y 12 de promedio");
        }else{
            if (promedioF >12) {
                alert("Error, ingrese un valor entre 1 y 12 de promedio");
            } else {
                if (lista.length==0) {
                    lista.push(estudiante);
                    console.log(lista);
                } else {
                      for (let i = 0; i < lista.length; i++) {
                          if (lista[i].cedula==cedula) {
                              cantidad++;
                             }
                        }
                        if(cantidad==0) {
                        lista.push(estudiante);
                        console.log(lista);
                        }
                     }
                }       
            }
        }
    }
//MOSTRAR REGISTRO TOTAL
$("#cargarTodos").click(mostrarRegistro);
function mostrarRegistro() {
    $("#p1").html("");
    for (let i = 0; i< lista.length; i++) {
      $("#p1").append(lista[i].obtenerInformacion()+"<br>");
      }
    }


//MOSTRAR EXONERADOS
$("#cargarExonerados").click(mostrarExonerados);
function mostrarExonerados() {

    var exonerados=[];
    $("#p2").html("");
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].promedioF >=8) {
            
            exonerados.push(lista[i].cedula)
        }
        
    }
    $("#p2").html("Exonerados:<br>"+exonerados+"<br>");
}
//MOSTRAR DICIEMBRE
$("#cargarDic").click(mostrarDic);
function mostrarDic() {

    var diciembre=[];
    $("#p3").html("");
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].promedioF >=4 && lista[i].promedioF<=7) {
            
            diciembre.push(lista[i].cedula)
        }
        
    }
    $("#p3").html("A Diciembre:<br>"+diciembre+"<br>");
}

//MOSTRAR FEBRERO
$("#cargarFeb").click(mostrarFeb);
function mostrarFeb() {

    var febrero=[];
    $("#p4").html("");
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].promedioF<=3) {
            
            febrero.push(lista[i].cedula)
        }
        
    }
    $("#p4").html("A Febrero:<br>"+febrero+"<br>");
}

//MOSTRAR PROMEDIOS MAS ALTOS
$("#cargarPro").click(mostrarPro);
function mostrarPro() {
    var mayor=Number.NEGATIVE_INFINITY;
    var nombre=[];
    $("#p5").html("");
    for (let i = 0; i < lista.length; i++) {
        if (mayor<lista[i].promedioF) {
            mayor=lista[i].promedioF;
            
        }
        
    }
    for (let i = 0; i < lista.length; i++) {
        if (mayor ==lista[i].promedioF) {
            nombre.push(lista[i].cedula)
        }
        
    }
    $("#p5").html("Mayores Promedios:<br>"+nombre+"<br>");
}

//MOSTRAR PROMEDIOS MAS BAJOS
$("#cargarProM").click(mostrarProM);
function mostrarProM() {
    var menor=Number.POSITIVE_INFINITY;
    var nombre=[];
    $("#p6").html("");
    for (let i = 0; i < lista.length; i++) {
        if (menor>lista[i].promedioF) {
            menor=lista[i].promedioF;
            
        }
        
    }
    for (let i = 0; i < lista.length; i++) {
        if (menor ==lista[i].promedioF) {
            nombre.push(lista[i].cedula)
        }
        
    }
    $("#p6").html("Menores Promedios:<br>"+nombre+"<br>");
}*/