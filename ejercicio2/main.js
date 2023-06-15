const carta1 = {
  title: 'HTML5',
  description: 'HTML (HyperText Markup Language) es un lenguaje de marcado utilizado para crear y estructurar el contenido de las páginas web. Permite definir la estructura y el diseño de un documento web mediante etiquetas y elementos.',
  image:'https://jaestic.com/wp-content/uploads/2012/12/01-1.jpg'
}

const carta2 = {
  title: 'CSS3',
  description: 'CSS (Cascading Style Sheets) es un lenguaje de estilo utilizado junto con HTML para controlar la apariencia y el diseño de las páginas web. Permite definir reglas y estilos para los elementos HTML, como colores, fuentes, tamaños, márgenes, entre otros. ',
  image:'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png'
}

const carta3 = {
  title: 'Javascript',
  description: 'JavaScript es un lenguaje de programación ampliamente utilizado en el desarrollo web. Permite agregar interactividad y dinamismo a las páginas web, manipular elementos del DOM (Document Object Model), realizar cálculos, validar formularios y mucho más.',
  image:'https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png'
}

const array = [carta1, carta2, carta3];
const container= document.getElementById('container');

array.forEach((card) => {
container.innerHTML += 
`<div class="card" style="width: 18rem;">
  <img src="${card.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.title}</h5>
    <p class="card-text">${card.description}</p>
  </div>
</div>`
})