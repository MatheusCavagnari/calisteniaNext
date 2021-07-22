import { useState } from 'react'

function Imc() {

    const [imc, setImc] = useState(0);

    function calcularImc() {
        var altura = document.getElementById('altura');
        var peso = document.getElementById('peso');

        setImc((peso.value / Math.pow(altura.value, 2)).toFixed(2));
    }

    return (
        <div className="container">
            <div>
                <label htmlFor="">Informe a altura (m): </label>
                <input type="number" id="altura" />
            </div>
            <div>
                <label htmlFor="">Informe o peso(Kg): </label>
                <input type="number" id="peso" />
            </div>
            <div>
                <button onClick={calcularImc}>Calcular</button>
            </div>
            <div>
                {imc}
            </div>
        </div>
    )
}

export default Imc;