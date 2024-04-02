var cliques
cliques = 0

document.getElementById('joinha-img').addEventListener('click', function() {
    document.getElementById('click-count').innerText = cliques;


    if (this.src.endsWith('polegar-para-cima.png')) {
      this.src = '../imagens/polegar-para-cima-clicado.png'; // Altere para o nome da sua imagem clicada
    } else {
      this.src = '../imagens/polegar-para-cima.png'; // Altere para o nome da sua imagem normal
    }
    cliques += 1
  });
  