document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para o servidor

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const tabela = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

   const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

   celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    
    document.getElementById('cadastroForm').reset();
});
