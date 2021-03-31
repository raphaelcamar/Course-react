import React, {useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

export default (props) =>{
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (
        <div>
            <div>
                <p>{nome}</p>
                <p>{idade}</p>
                <p>{nerd ? 'Verdadeiro' : 'Falso'}</p>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}