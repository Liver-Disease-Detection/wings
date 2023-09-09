document.addEventListener('DOMContentLoaded', function() {
    const predictButton = document.getElementById('predictButton');
    const totalBilirubinInput = document.getElementById('total_bilirubin');
    const alkalinePhosphateInput = document.getElementById('alkaline_phosphate');
    const alanineAminotransferaseInput = document.getElementById('alanine_aminotransferase');
    const totalProteinsInput = document.getElementById('total_proteins');
    const albuminInput = document.getElementById('albumin');
    const globulinRatioInput = document.getElementById('globulin_ratio');
    const predictionResult = document.getElementById('prediction');

    predictButton.addEventListener('click', function() {

        const totalBilirubin = parseFloat(totalBilirubinInput.value);
        const alkalinePhosphate = parseFloat(alkalinePhosphateInput.value);
        const alanineAminotransferase = parseFloat(alanineAminotransferaseInput.value);
        const totalProteins = parseFloat(totalProteinsInput.value);
        const albumin = parseFloat(albuminInput.value);
        const globulinRatio = parseFloat(globulinRatioInput.value);
        if (totalBilirubin > 1.2 && alkalinePhosphate > 130 && alanineAminotransferase > 100 && totalProteins > 1.5 && albumin > 5.1 && globulinRatio > 2) {
            predictionResult.textContent = 'You may have liver disease.';
        } else {
            predictionResult.textContent = 'You are likely healthy.';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const redirectButton = document.getElementById('Next1');

    redirectButton.addEventListener('click', function() {
        // Redirect to another HTML page
        window.location.href = 'suggestions.html';
    });
});