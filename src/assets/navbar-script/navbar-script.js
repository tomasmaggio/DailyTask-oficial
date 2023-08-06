// Seleccionar elementos del DOM y asignarlos a variables constantes.
const 
body = document.querySelector('body'), // Representa el elemento 'body' del documento HTML.
sidebar = body.querySelector('nav'), // Representa un elemento de navegación (barra lateral).
toggle = body.querySelector(".toggle"), // Representa el botón o elemento para abrir/cerrar la barra lateral.
searchBtn = body.querySelector(".search-box"), // Representa el botón o elemento para realizar una búsqueda.
modeSwitch = body.querySelector(".toggle-switch"), // Representa el interruptor para cambiar entre los modos claro y oscuro.
modeText = body.querySelector(".mode-text"); // Representa un elemento de texto donde se muestra el estado del modo (claro u oscuro).

// Agregar un evento de clic al elemento representado por 'toggle'.
toggle.addEventListener("click" , () =>{
  // Cuando se hace clic en 'toggle', alternar la clase "close" en el elemento representado por 'sidebar'.
  sidebar.classList.toggle("close");
});

// Agregar un evento de clic al elemento representado por 'searchBtn'.
searchBtn.addEventListener("click" , () =>{
  // Cuando se hace clic en 'searchBtn', remover la clase "close" del elemento representado por 'sidebar'.
  // Esto sugiere que al hacer clic en el botón de búsqueda, la barra lateral se abrirá si estaba cerrada.
  sidebar.classList.remove("close");
});

// Agregar un evento de clic al elemento representado por 'modeSwitch'.
modeSwitch.addEventListener("click" , () =>{
  // Cuando se hace clic en 'modeSwitch', alternar la clase "dark" en el elemento representado por 'body'.
  body.classList.toggle("dark");
  
  // Comprobar si la clase "dark" está presente en el 'body' para actualizar el texto del elemento representado por 'modeText'.
  if(body.classList.contains("dark")){
    // Si la clase "dark" está presente, establecer el texto en "Light mode".
    modeText.innerText = "Light mode";
  }else{
    // Si la clase "dark" no está presente, establecer el texto en "Dark mode".
    modeText.innerText = "Dark mode";
  }
});
