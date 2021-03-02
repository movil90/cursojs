// Programa que pide nombre y edad a usuario y le dice dependendiendo de su edad si esta permitido acceder o no
let= nombre= prompt("Ingrese su nombre");
let= edad = prompt ("Ingresa tu edad");
edad = parseInt(edad);
if(nombre == " " || edad >= 18) {
    alert ("Hola " + nombre +" "+ "Eres mayor de 18 años, puedes acceder al sitio")
}
else {
    alert ("Hola " + nombre + "Lo sentimos eres menor de edad no puedes acceder")
};

