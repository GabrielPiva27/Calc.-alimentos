function calcularNutricao(event) {
    event.preventDefault()
    const alimento = document.getElementById("alimento").value;
    const proteina = parseFloat(document.getElementById("proteina").value) || 0;
    const carboidratos = parseFloat(document.getElementById("carboidratos").value) || 0;
    const gordura = parseFloat(document.getElementById("gordura").value) || 0;

    const totalCarbo = carboidratos * 4;
    const totalProteina = proteina * 4;
    const totalGordura = gordura * 9;
    const totalCalorias = totalCarbo + totalProteina + totalGordura

    const resultado = `${alimento}: ${totalCalorias} calorias, ${proteina}g de proteína, ${carboidratos}g de carboidratos e ${gordura}g de gordura.`;

    document.getElementById("resultado").textContent = resultado;
}
