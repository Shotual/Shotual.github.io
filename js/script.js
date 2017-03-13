// JavaScript source code
var xmlhttp = new XMLHttpRequest();
var url = "json/jsonshot.json";



xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //alert(this.responseText);
        var documentJson = JSON.parse(this.responseText);
        var myArr = documentJson.Actividades;
        myFunction(myArr);
        
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


function myFunction(arr) {
    var section = document.getElementById("id01");
    var fila = document.createElement("a");
    fila.setAttribute("name", "services");
    section.setAttribute("class", "padre");

    for (i = 0; i < arr.length; i++) {
        
       
       // alert("hola");
        //VARIABLES//
        var proyecto = document.createElement("article");
        var contenedor = document.createElement("div");
        var divancho = document.createElement("div");
        var divtexto = document.createElement("div");
        var topline = document.createElement("hr");
        var divline = document.createElement("div");
        var titulo = document.createElement("h2");
        var destacado = document.createElement("i");
        var saltolinea = document.createElement("br");
        var texto = document.createElement("p");
        var textofecha = document.createElement("p");
        var divimg = document.createElement("div");
        var aimg = document.createElement("a");
        var img = document.createElement("img");
        var nodoTitulo = document.createTextNode(arr[i].Titulo);
        var nodoDesc = document.createTextNode(arr[i].Descripcion);
    
      
       

        //ATRIBUTOS//
       
       
        proyecto.setAttribute("class", "content-section-a");
        contenedor.setAttribute("class", "container");
        divancho.setAttribute("class", "row");
        topline.setAttribute("class", "section-heading-spacer");
        divline.setAttribute("class", "clearfix");
        titulo.setAttribute("class", "section-heading");
        texto.setAttribute("class", "lead");
        aimg.setAttribute("href", arr[i].Link);
        aimg.setAttribute("target","_blank");
        img.setAttribute("class", "img-responsive");
        img.setAttribute("src", arr[i].Foto);
        img.setAttribute("alt", "");
        destacado.setAttribute("class","fa fa-star");
        destacado.setAttribute("aria-hidden", arr[i].Destacado);

        if (i % 2 == 0) {
            proyecto.setAttribute("class", "content-section-a");
            divtexto.setAttribute("class", "col-lg-5 col-sm-6");
            divimg.setAttribute("class", "col-lg-5 col-lg-offset-2 col-sm-6");


        }
        else {
            proyecto.setAttribute("class", "content-section-b");
            divtexto.setAttribute("class", "col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6");
            divimg.setAttribute("class", "col-lg-5 col-sm-pull-6  col-sm-6");
          

        }
        if (arr[i].Destacado == true) {
            proyecto.appendChild(destacado);
        }
     

        //Appenchild//

      
        section.appendChild(fila);
        fila.appendChild(proyecto);
        proyecto.appendChild(contenedor);
        contenedor.appendChild(divancho);
        divancho.appendChild(divtexto);
        divtexto.appendChild(topline);
        divtexto.appendChild(divline);
        divtexto.appendChild(titulo);
        titulo.appendChild(saltolinea);
        titulo.appendChild(nodoTitulo);
        titulo.appendChild(destacado);
        divtexto.appendChild(texto);
        texto.appendChild(nodoDesc);
        divancho.appendChild(divimg);
        divimg.appendChild(aimg);
        aimg.appendChild(img);
     
       
    }
}