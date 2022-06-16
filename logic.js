const mySiema = new Siema({
  selector: '.siema',
  duration: 2000,
  easing: 'ease-out',
  loop: true
});
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
setInterval(() => mySiema.next(), 1000)
prev.addEventListener("click", () => {
  mySiema.prev();
});
next.addEventListener("click", () => mySiema.next());
