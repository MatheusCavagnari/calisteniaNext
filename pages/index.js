import { useState } from 'react'



function Imc() {

    const [imc, setImc] = useState(0);
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);


    function calcularImc() {

        console.log(peso)
        console.log(altura)
        //console.log(peso / Math.pow(altura, 2))
        // setImc(peso / Math.pow(altura, 2));
    }

    return (
        <div className="container">
            <div>
                <label htmlFor="">Informe a altura (m): </label>
                <input type="text" onKeyDown={(text) => setAltura(text)} />
            </div>

            <div>
                <label htmlFor="">Informe o peso(Kg): </label>
                <input type="text" onChange={(text) => setPeso(text)} />
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