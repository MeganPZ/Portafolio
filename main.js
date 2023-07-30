let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('¡Bienvenido a uno de los mejores sitios de Desarrollo Web!')
  .pauseFor(200)
  .deleteChars(10)
  .start();
