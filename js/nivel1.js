function verificarNivel1() {
    const definicoesCorretas = ['total = price + (price * tax)', 'price = 100', 'tax = 0.05'];
    const usosCorretos = ['return total', 'calculate_total(price, tax)', 'print(result)'];

    const definicoesUsuario = document.getElementById('definicoes').value.split(',').map(item => item.trim());
    const usosUsuario = document.getElementById('usos').value.split(',').map(item => item.trim());

    let feedback = '';
    let pontos = 0;

    definicoesCorretas.forEach(def => {
        if (definicoesUsuario.includes(def)) {
            feedback += `<p>Correto: ${def}</p>`;
            pontos++;
        } else {
            feedback += `<p>Incorreto: ${def}</p>`;
        }
    });

    usosCorretos.forEach(use => {
        if (usosUsuario.includes(use)) {
            feedback += `<p>Correto: ${use}</p>`;
            pontos++;
        } else {
            feedback += `<p>Incorreto: ${use}</p>`;
        }
    });

    feedback += `<p>Pontuação: ${pontos} de 6</p>`;
    document.getElementById('feedbackNivel1').innerHTML = feedback;
}
