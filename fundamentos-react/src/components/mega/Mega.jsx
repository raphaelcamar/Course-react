import React, { useState } from 'react';
import './mega.css'

export default props =>{

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + max - min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    function gerarNumeros(qtde){
        const numeros = Array(qtde).fill(0).reduce((nums) =>{
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 -n2 );
        return numeros
    }

    const numerosIniciais = Array(props.qtde || 6).fill(0);
    const [numeros, setNumeros] = useState(numerosIniciais);
    const [qtde, setQtde] = useState(props.qtde || 6)

    return (
        <div className="mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="">Quantidade de números</label>
                <input type="number" value={qtde} min="6" max="15" onChange={(e) => {
                    setQtde(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                }}/>
            </div>
            <button onClick={ _ => setNumeros(gerarNumeros(qtde))}>Gerar números</button>
        </div>
    )
}