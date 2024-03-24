function calculatePeakCurrentDraw() {
    // Gathering inputs
    const torqueAmps = parseFloat(document.getElementById('torqueAmps').value); // Iq (Torque component)
    const initialFlux = parseFloat(document.getElementById('initialFlux').value); // Id base component
    const variableFlux = parseFloat(document.getElementById('variableFlux').value) / 1000; // Convert mAh to A and represent Id variable component
    const currentMaxSpeed = parseFloat(document.getElementById('currentMaxSpeed').value);
    const startSpeed = parseFloat(document.getElementById('activationSpeed').value);

    // Calculating Id (Flux component) including field weakening effect
    const fieldWeakeningAmps = initialFlux + (variableFlux * (currentMaxSpeed - startSpeed));

    // Calculating Peak Current Draw (I_total) using Pythagorean theorem
    const ITotal = Math.sqrt(Math.pow(torqueAmps, 2) + Math.pow(fieldWeakeningAmps, 2)).toFixed(2);

    // Displaying the result
    document.getElementById('result').innerHTML = `Peak Current Draw (I<sub>total</sub>): ${ITotal} A<br>
    Torque Component (I<sub>q</sub>): ${torqueAmps} A<br>
    Flux Component (I<sub>d</sub>): ${fieldWeakeningAmps.toFixed(2)} A`;
}
