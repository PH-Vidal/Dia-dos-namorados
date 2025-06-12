function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.textContent = '❤️';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.fontSize = (Math.random() * 20 + 20) + 'px';
  document.querySelector('.coracoes').appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

setInterval(criarCoracao, 300);
