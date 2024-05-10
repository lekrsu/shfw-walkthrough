function calculatePeakCurrentDraw() {
    const torqueAmps = parseFloat(document.getElementById('torqueAmps').value); // Iq (Torque component)
    const initialFlux = parseFloat(document.getElementById('initialFlux').value); // Id base component
    const variableFlux = parseFloat(document.getElementById('variableFlux').value) / 1000; // Convert mAh to A for Id variable component
    const currentMaxSpeed = parseFloat(document.getElementById('currentMaxSpeed').value);
    const startSpeed = parseFloat(document.getElementById('activationSpeed').value);

    let totalFluxAmps = initialFlux;
    let fluxMessage = '';

    // Apply field weakening effect based on speed difference if applicable
    if (currentMaxSpeed >= startSpeed) {
        totalFluxAmps += variableFlux * (currentMaxSpeed - startSpeed); // Multiply variable flux per km/h above activation speed
    }

    if (totalFluxAmps > 30) {
        fluxMessage = '<p style="color: red;">Warning: Flux current exceeds the default 30A phase limit. Please review the system configuration.</p>';
    }

    const ITotal = Math.sqrt(Math.pow(torqueAmps, 2) + Math.pow(totalFluxAmps, 2)).toFixed(2);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = fluxMessage + `Total Peak Current Draw (I<sub>total</sub>): ${ITotal} A<br>
    Torque Component (I<sub>q</sub>): ${torqueAmps} A<br>
    Flux Component (I<sub>d</sub>): ${totalFluxAmps.toFixed(2)} A`;
}
