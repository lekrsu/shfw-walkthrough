document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculate);

    function calculate() {
        const Radc = parseFloat(document.getElementById("inputRadc").value);

        if (!isNaN(Radc)) {
            const maxVoltage = 3.3; // Fixed value for Max STM voltage
            const R1 = 10000; // Fixed value for R1
            const Vmax = (maxVoltage * (Radc + R1)) / R1;
            document.getElementById("result").textContent = `Max Battery Voltage (Vmax): ${Vmax.toFixed(2)}V`;
        } else {
            document.getElementById("result").textContent = "Please enter a valid Radc value.";
        }
    }
});
