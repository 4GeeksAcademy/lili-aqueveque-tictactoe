//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./components/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));


/*
Diseña tu sitemap: ¿Cuántas páginas / vistas?
Diseñando tu estructura (wireframe): ¿Qué componentes y dónde?
Comienza a codificar tus componentes solo para mostrar "Hola mundo" en cada uno de ellos (para asegurarse de que funcionan).
Crea una lista de todas las posibles interacciones (eventos) del usuario y del sistema que se producen durante el tiempo de ejecución (por ejemplo: el usuario hace clic en un botón para iniciar el juego)
Crea unas funciones de javascript que manejen cada uno de esos eventos.
Console.log en cada una de esas funciones para asegurarse de que se están llamando.
Continúa... mira el video si tienes alguna otra duda.
Conceptos que debes aprender:
State de los componentes (variables globales)
Props
Metódo de Renderizado
La función para comprobar el ganador es un gran algoritmo de aprendizaje.
*/
