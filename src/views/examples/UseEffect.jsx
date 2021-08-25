import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(n) {
    const num = parseInt(n)
    if(num < 0) return -1
    if(num === 0) return 1
    return calcFatorial(num - 1) * num
}

const UseEffect = (props) => {
    // Ex01
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [ex01, setEx01] = useState("")
    
    // Ex02
    const [valor, setValor] = useState(0)
    const [ehPar, setEhPar] = useState(true)

    // Ex01
    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 1000000) setEx01("Eita!!!")
        else setEx01("Exercicio #01")
    }, [fatorial])

    // Ex02
    useEffect(function() {
        if(valor%2 === 0) setEhPar(true)
        else setEhPar(false)
    }, [valor])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title={ex01}/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input 
                    type="number"
                    className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <div>
                    <span className="text">Status:</span>
                    <span className="text red">{ehPar ? "Par" : "Impar"}</span>
                </div>
                <input 
                    type="number" 
                    className="input"
                    value={valor}
                    onChange={e => setValor(e.target.value)} 
                />
            </div>
        </div>
    )
}

export default UseEffect
