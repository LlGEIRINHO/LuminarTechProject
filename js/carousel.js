const list = document.querySelector('.carousel .list');
let currentIndex = 1;

setInterval(() => {
  if (currentIndex >= list.children.length) currentIndex = 1;

  // Remove o item antigo em fullscreen
  const oldMain = list.querySelector('.item.fullscreen');
  if (oldMain) {
    oldMain.remove();
  }

  // Clona o novo item e configura como fullscreen
  const newMain = list.children[currentIndex].cloneNode(true);
  newMain.classList.add('fullscreen');

  // Insere no início da lista
  list.insertBefore(newMain, list.firstChild);

  currentIndex++;

}, 5000);
