// =============================================
// AGRO SUSTENTÁVEL - SIMULADOR DE EQUILÍBRIO
// Versão Melhorada - Concurso Agrinho 2026
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ====================== 
    // VARIÁVEIS DE ESTADO
    // ======================
    let producao = 0;
    let natureza = 100;

    // ====================== 
    // SELEÇÃO DE ELEMENTOS DO DOM
    // ======================
    const btnSustentavel = document.getElementById('btn-sustentavel');
    const btnIntensivo = document.getElementById('btn-intensivo');
    const txtProducao = document.getElementById('status-producao');
    const txtNatureza = document.getElementById('status-natureza');
    const msgAlerta = document.getElementById('mensagem-alerta');

    // ====================== 
    // FUNÇÃO PRINCIPAL DE ATUALIZAÇÃO
    // ======================
    function atualizarPainel() {
        // Atualiza os valores na tela
        txtProducao.textContent = producao;
        txtNatureza.textContent = natureza;

        // ====================== 
        // VERIFICAÇÕES DE FIM DE JOGO
        // ======================
        if (natureza <= 20) {
            msgAlerta.textContent = "💥 A natureza colapsou! Tente novamente com práticas mais sustentáveis.";
            msgAlerta.style.color = "#d32f2f";
            desabilitarBotoes();
            return;
        }

        if (producao >= 100 && natureza >= 70) {
            msgAlerta.textContent = "🎉 Parabéns! Você alcançou o Agro Forte e o Futuro Sustentável!";
            msgAlerta.style.color = "#2e7d32";
            desabilitarBotoes();
            return;
        }

        // ====================== 
        // ALERTAS INTERMEDIÁRIOS
        // ======================
        if (natureza <= 40) {
            msgAlerta.textContent = "⚠️ Alerta: O solo está se esgotando! Adote práticas mais sustentáveis.";
            msgAlerta.style.color = "#f57c00";
        } 
        else if (natureza >= 85 && producao >= 40) {
            msgAlerta.textContent = "🌱 Excelente equilíbrio! Continue assim.";
            msgAlerta.style.color = "#2e7d32";
        } 
        else {
            msgAlerta.textContent = "";
        }
    }

    // ====================== 
    // FUNÇÃO PARA DESABILITAR BOTÕES (FIM DE JOGO)
    // ======================
    function desabilitarBotoes() {
        btnSustentavel.disabled = true;
        btnIntensivo.disabled = true;
        btnSustentavel.style.opacity = "0.6";
        btnIntensivo.style.opacity = "0.6";
    }

    // ====================== 
    // EVENTOS DOS BOTÕES
    // ======================
    btnSustentavel.addEventListener('click', () => {
        producao += 15;
        natureza = Math.min(100, natureza + 8);   // Ação sustentável: +8 de natureza
        atualizarPainel();
    });

    btnIntensivo.addEventListener('click', () => {
        producao += 35;
        natureza = Math.max(0, natureza - 22);    // Ação intensiva: -22 de natureza
        atualizarPainel();
    });

    // Inicializa o painel
    atualizarPainel();
});
