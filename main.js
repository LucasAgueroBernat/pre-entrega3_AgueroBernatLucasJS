//Comenzamos con el juego

//Bienvenida
let nombre = document.getElementById(nombre);
function bienvenida() {
let mensaje = `Bienvenido/a ${nombre}. Yo soy el Padawan Lucas Aguero y voy a enseñarte sobre algunos de nuestros personajes de STAR WARS`;

}
bienvenida();
const misPersonajes = [
    {
    nombre: "Anakin Skywalker",
    planetaNatal: "Tatooine",
    especie: "humano",
    edad: "9 (ep.1) 19 (ep.2) 19-22 (clone wars) 22 (ep.3) 32 (obi-wan) 36-41 (rebels) 41(rogue one y ep.4) 44 (ep.5) 45 (ep.6)",
    hijos: ["Luke Skywalker", "Leia Organa"],
    padres: "Shmi Skywalker",
    afiliacion: ["Orden Jedi (Alto Consejo Jedi)", "República Galáctica (Legión 501)", "Sith",  "Imperio Galáctico (Alto Mando Imperial y Escuadrón de la Muerte)"],
    maestros: ["Qui-Gon Jinn", "Obi-Wan Kenobi", "Darth Sidious", "Yoda"],
    aprendices: ["Ahsoka Tano", "Inquisición"],
    muerte: "4 DBY Estrella de la Muerte",
},
{
nombre: "Obi-Wan Kenobi",
planetaNatal: "Stewjon",
especie: "Humano",
edad: "25 (ep.1), 35 (ep.2), 35-38 (clone wars), 38 (ep.3), 48 (obi-wan kenobi), 56(rebels), 57 (ep.4)",
afiliacion: ["Orden Jedi (Alto Consejo Jedi)", "República Galáctica (7mo Cuerpo Aéreo)","Alianza para Restaurar la República"],
maestros: ["Qui-Gon Jinn", "Yoda"],
aprendices: ["Anakin Skywalker", "Luke Skywalker"],
muerte: "0 ABY Estrella de la Muerte",
},
{
nombre: "Darth Sidious",
planetaNatal: "Naboo",
especie: "Humano",
edad: "52 (ep.1), 62 (ep.2), 62-65 (clone wars), 65 (ep.3 y the bad batch), 75 (Obi-Wan Kenobi), 79-84 (rebels), 87 (ep.5), 88 (ep.7), 119 (ep.9)",
afiliacion: ["Familia Palpatine", "Sith", "Casa Real de Naboo", "Rep. Galáctica (Delegaciónde Naboo, Oficina de Canciller)", "Federación de Comercio", "Confederación de Sistemas Independientes", "Imperio Galáctico", "Sith Eterno", "Primera Orden", "Orden Final"],
maestros: "Darth Plagueis",
aprendices: ["Wilhuff Tarkin", "Darth Maul", "Darth Tyranus", "Gallius Rax", "Darth Vader","Inquisición", "Snoke", "Kylo Ren"],
muerte: "35 DBY Exegol",
},
];
const personajeElejidoPorUsuario = prompt("Ingrese a quién desea conocer:\n- AnakinSkywalker\n- Obi-Wan Kenobi\n- Darth Sidious");
const personajeEncontrado = misPersonajes.find((item) => item.nombre.toLowerCase() ===
personajeElejidoPorUsuario.toLowerCase());
if (personajeEncontrado) {
let mensaje = `
    Nombre: ${personajeEncontrado.nombre}
    Planeta Natal: ${personajeEncontrado.planetaNatal}
    Especie: ${personajeEncontrado.especie}
    Edad: ${personajeEncontrado.edad}
    Hijos: ${personajeEncontrado.hijos.join(", ")}
    Padres: ${personajeEncontrado.padres}
    Afiliación: ${personajeEncontrado.afiliacion.join(", ")}
    Maestros: ${personajeEncontrado.maestros.join(", ")}
    Aprendices: ${personajeEncontrado.aprendices.join(", ")}
    Muerte: ${personajeEncontrado.muerte}`;
    alert(mensaje);
} else {
    alert("No se encontró el personaje solicitado.");
}
    function despedida() {
    let mensaje = `Gracias ${nombre} por elegirnos para seguir aprendiendo sobre Star Wars.`;
    alert(mensaje);
}
despedida();