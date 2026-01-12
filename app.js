
  const botaoPagar = document.getElementById('btn-pagar');

  botaoPagar.addEventListener('click', function () {
    // muda o texto
    botaoPagar.innerText = 'Redirecionando para o pagamento...';

    // evita múltiplos cliques
    botaoPagar.style.pointerEvents = 'none';
    botaoPagar.style.opacity = '0.7';
  });

