document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. LÓGICA DO BOTÃO DA I.A.
    // ==========================================
    const botao = document.getElementById('btn-ia');
    const resposta = document.getElementById('resposta');
    
    const logs = [
        "Estabelecendo conexão com o mainframe...",
        "Analisando terabytes de pacotes de dados...",
        "Calculando probabilidades e vetores...",
        "Treinamento de rede neural concluído.",
        "Acesso concedido. Bem-vindo ao futuro."
    ];

    if(botao) {
        botao.addEventListener('click', function() {
            botao.disabled = true;
            botao.style.borderColor = "#ff007f";
            botao.style.color = "#ff007f";
            botao.innerText = "PROCESSANDO...";
            
            let index = 0;
            resposta.innerText = "";
            
            const intervalo = setInterval(function() {
                resposta.innerText = logs[index];
                index++;
                
                if (index >= logs.length) {
                    clearInterval(intervalo);
                    botao.disabled = false;
                    botao.innerText = "REINICIAR SISTEMA";
                    botao.style.borderColor = "#00e5ff";
                    botao.style.color = "#00e5ff";
                }
            }, 1200); 
        });
    }

    // ==========================================
    // 2. EFEITO DE ROLAGEM (SCROLL REVEAL)
    // ==========================================
    // Seleciona as seções e os cards que usamos no seu HTML
    const elementosParaAnimar = document.querySelectorAll('section, div#card');

    // Cria o observador que vigia a rolagem da tela
    const observadorDeScroll = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            // Se o elemento apareceu na tela (intersectou)
            if (entrada.isIntersecting) {
                // Adiciona o atributo que dispara a animação no CSS
                entrada.target.setAttribute('data-visible', 'true');
                
                // (Opcional) Para de observar depois que já apareceu uma vez
                // observadorDeScroll.unobserve(entrada.target); 
            }
        });
    }, { 
        threshold: 0.15 // O elemento aparece quando 15% dele entra na tela
    });

    // Manda o observador vigiar cada um dos elementos
    elementosParaAnimar.forEach(elemento => {
        observadorDeScroll.observe(elemento);
    });

});