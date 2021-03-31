import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card'
import './App.css';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';


//underline significa que não possui parametro, e não tem interesse de uso
export default _ => {
    return (
        <div className="app">
            <p>Fundamentos React!</p>
            <div className="cards">

            <Card titulo="#12- Desafio mega" color="#d64343">
                <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#11- Componente Controlado" color="#d64343">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11- Componente Controlado" color="#8a47a5">
                <Input></Input>
            </Card>

            <Card titulo="#10- Comunicação Indireta" color="#04cbda">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#9- Comunicação direta" color="#e08d49">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#8- Renderização Condicional" color="#0084ff">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome : 'Fernando'}}/>
                {/* <UsuarioInfo usuario={{email : 'email@user.com'}}/> */}
            </Card>

            <Card titulo="#7- Desafio repetição" color="#0051ff">
                <TabelaProdutos></TabelaProdutos>
            </Card>

                <Card titulo="#6- Lista de alunos" color="#1bbb63">
                   <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#5- Componente com filhos" color="#728a1d">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Maria"/>
                    </Familia>
                </Card>
                <Card titulo="#4- Exemplo de card" color="#FA6900">
                    <Aleatorio min={1} max={100}/>
                </Card>
                <Card titulo="#3- Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#2- Com parâmetro" color="#402caf">
                <ComParametro
                    titulo="segundo Componente"
                    subtitulo="Muito legal" />

                </Card>
                <Card titulo=" #1- Primeiro" color="#e058ac">
                    <Primeiro></Primeiro>
                </Card>
            </div>

            
        </div>
    )
}