// nivel2.js

function verificarNivel2() {
    // Capturar os valores selecionados pelo usuário
    var criterio = document.getElementById('criterio').value;
    var analise = '';

    // Definir a descrição correta do critério escolhido
    switch (criterio) {
        case 'def-use':
            analise = "No critério Def-Use, você deve descrever como cada variável definida é utilizada no código.";
            break;
        case 'all-definitions':
            analise = "No critério All-definitions, você deve descrever todos os locais onde cada variável é definida no código.";
            break;
        case 'all-uses':
            analise = "No critério All-uses, você deve descrever todos os locais onde cada variável é usada no código.";
            break;
        default:
            analise = "Critério não especificado.";
            break;
    }

    // Exibir feedback
    var feedbackElement = document.getElementById('feedbackNivel2');
    feedbackElement.innerHTML = `
        <h2>Feedback</h2>
        <p><strong>Critério escolhido:</strong> ${criterio}</p>
        <p><strong>Descrição do critério:</strong></p>
        <p>${analise}</p>
    `;
}
