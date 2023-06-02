//Comenzamos con el juego

alert("CUANTO SABES DE STAR WARS?");

let nombre = prompt("INGRESA TU NOMBRE");

function bienvenida() {
   let mensaje = `Bienvenido/a ${nombre} a este ping-pong de star wars`;
   alert(mensaje) 
}

bienvenida()

let contador = 0;
let pregunta1 = prompt("quien es el padre de LUKE? \n 1-ANAKIN SKYWALKER \n 2-OBI-WAN");

if (pregunta1 == 1) {
    alert("La fuerza es poderosa en ti");
    contador++
} else {
    alert("Eres igual de inteligente que jar-jar binks");
}

let pregunta2 = prompt("cuantas peliculas hay de star wars? \n 1-ONCE \n 2-NUEVE");

if (pregunta2 == 1) {
    alert("Muy bien mi joven Padawan");
    contador++
} else {
    alert("No dejes que tus sentimientos controlen tu razon. INCORRECTO");
}

let pregunta3 = prompt("En que episodio lord vader usa la frase `yo soy tu padre`? \n 1-IV=UNA NUEVA ESPERANZA \n 2-V= EL IMPERIO CONTRATACA");

if (pregunta3 == 2) {
    alert("la sabiduria grande en ti es");
    contador++
} else {
    alert("Hasta jar-jar binks la sabia");
}


let pregunta4 = prompt("Como se llama el `baby-yoda` que protege el mandaloriano? \n 1- GROGU \n 2- YODIN");

if (pregunta4 == 1) {
    alert("CORRECTA TU RESPUESTA ES QUERIDO PADAWAN");
    contador++
} else {
    alert("TENGO UN MAL PRESENTIMIENTO SOBRE ESTO, TU RESPUESTA ES INCORRECTA.");
}

let pregunta5 = prompt("De quien es pariente `REY`? \n 1-ANAKIN SKYWALKER \n 2-PALPATINE");

if (pregunta5 == 2) {
    alert("Tu eres el elegido");
    contador++
} else {
    alert("ME HAS FALLADO POR ULTIMA VEZ...");
}

let pregunta6 = prompt("Quien elimina a GREVIOUS? \n 1-OBI-WAN \n 2-MACE WINDU");

if (pregunta6 == 1) {
    alert("Impresionante de lo mas IMPRESIONANTE");
    contador++
} else {
    alert("Tenga cuidado de no equivocarse con sus convicciones");
}

let pregunta7 = prompt("como se llama el/la padawan de ANAKIN? \n 1-EZRA \n 2-ASHOKA");

if (pregunta7 == 2) {
    alert("Has aprendido bien joven Skywalker");
    contador++
} else {
    alert("Es tan torpe como estupido general");

}

let pregunta8 = prompt("Cuantas temporadas tiene `EL MANDALORIAN`? \n 1-DOS \n 2-TRES");

if (pregunta8 == 2) {
    alert("Eres mas poderoso de lo que crees");
    contador++
} else {
    alert("Ni el lado oscuro te querria de su lado. INCORRECTO");

}

let pregunta9 = prompt("Quien es el droide de Poe Dameron? \n 1-Bb-8 \n 2-R2D2");

if (pregunta9 == 1) {
    alert("ESA ERA FACIL. CORRECTO");
    contador++
} else {
    alert("Ni el emperador se animo a errar asi");

}

let pregunta10 = prompt("Quien destruye al emperador? \n 1-Lord Vader \n 2-Rey");

if (pregunta10 == 2) {
    alert("Has aprendido bien joven Skywalker");
    contador++
} else {
    alert("Es tan torpe como estupido general");

}

alert(`tu resultado es ${contador}`);




let miResultado = prompt("quieres saber a que personaje eres? Pon tu resultado")

switch (miResultado) {
    case "1" :
        alert("Eres igual a Jar Jar Binks");
        break;

    case "2" :
        alert("Eres igual al Capitan Panaka ");
        break; 
                
    case "3" :
        alert("Eres igual a Rose Tico");
        break; 
                
    case "4" :
        alert("Eres igual a Finn");
        break;

    case "5" :
        alert("Eres igual a un stormtrooper");
        break;

    case "6" :
        alert("Eres igual a  / Conde Doku");
        break;

    case "7" :
        alert("Eres igual a Ashoka Tano / Kylo Ren");
        break;

    case "8" :
        alert("Eres igual Han Solo / Yoda");
        break
    case "9" :
        alert("Eres igual a Palpatine / Obi-Wan Kenobi");
        break;

    case "10" :
        alert("Eres igual a Anakin,Lord Vader / Luke skywalker");
        break;        
    
    default: 
        alert("no ingresaste un numnero correcto")
        break;
    }

    while (isNaN(parseInt(miResultado)) || miResultado <= 0 || miResultado > 10) {
        miResultado = prompt("Ingresaste un dato inválido, escribe un número entre 1 y 10.")
        break
        miResultado = prompt("quieres saber a que personaje eres? Pon tu resultado")
    }
   


function despedida() {
    let mensaje = `Gracias ${nombre} por jugar a este ping-pong de star wars`;
    alert(mensaje) 
 }
 
despedida()