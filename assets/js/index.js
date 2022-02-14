import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

let animalesObjeto = {};
let animalArrayCards = [];

(async () => {
  try {
    const res = await fetch("animales.json");
    const { animales } = await res.json();

    animales.forEach(item => {
      animalesObjeto[item.name] = item;

    });
  } catch (error) {
    console.log(error);
  }
})();

const Animales = document.getElementById("Animales");
const formulario = document.getElementById("formulario");
const animal = document.getElementById("animal");
const edad = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");
const preview = document.getElementById("preview");

animal.addEventListener("change", (e) => {
//   console.log(e.target.value);
  preview.innerHTML = `<img src="assets/imgs/${
    animalesObjeto[e.target.value].imagen
  }" alt="" class="img-fluid">`;
})

const pintarAnimal = () => {
  Animales.innerHTML = "";
  animalArrayCards.forEach((item) => {
    Animales.innerHTML += `          
        <article class="card m-2">
        <img src="assets/imgs/${item.imagen}" alt="" class="card-img-top">
        <div  class="card-fluid">

          <h5>${item.name}</h5>
          <p>${item.edad}</p>
          <p>${item.comentarios}</p>
      
        </div>

    </article>
        `;
  });
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log(animal.value);

  if (animal.value === "Leon") {
    const leon = new Leon(
      animal.value,
      animalesObjeto[animal.value].imagen,
      edad.value,
      comentarios.value,

    )
    animalArrayCards.push(leon)
    console.log(leon)
  }
  if (animal.value === "Lobo") {
    const lobo = new Lobo(
      animal.value,
      animalesObjeto[animal.value].imagen,
      edad.value,
      comentarios.value,

    )
    animalArrayCards.push(lobo)
  }
  if (animal.value === "Oso") {
    const oso = new Oso(
      animal.value,
      animalesObjeto[animal.value].imagen,
      edad.value,
      comentarios.value,
    )
    animalArrayCards.push(oso)
  }
  if (animal.value === "Serpiente") {
    const serpiente = new Serpiente(
      animal.value,
      animalesObjeto[animal.value].imagen,
      edad.value,
      comentarios.value,
    )
    animalArrayCards.push(serpiente)
  }
  if (animal.value === "Aguila") {
    const aguila = new Aguila(
      animal.value,
      animalesObjeto[animal.value].imagen,
      edad.value,
      comentarios.value,
    )
    animalArrayCards.push(aguila)
  }

  pintarAnimal(); 
});


