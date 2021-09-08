import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {    initialState, reducer } from '../../store';
import {    numberAdd2, numberMult7, numberDivide25, numberParseInt, 
            numberAddN, userLogin } from '../../store/actions';

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [num, setNum] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user 
                    ? (<span className="text">{state.user.name}</span>)
                    : (<span className="text">Sem Usuario</span>)
                }
                <span className="text">{state.number}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => userLogin(dispatch, 'Salura - Cursos Online')}
                    >Login</button>
                    <button 
                        className="btn"
                        onClick={() => numberAdd2(dispatch)}
                    >+2</button>
                    <button 
                        className="btn"
                        onClick={() => numberMult7(dispatch)}
                    >*7</button>
                    <button 
                        className="btn"
                        onClick={() => numberDivide25(dispatch)}
                    >/25</button>
                    <button 
                        className="btn"
                        onClick={() => numberParseInt(dispatch)}
                    >ParseInt</button>
                </div>
                <div>
                    <input 
                        type="number" 
                        className="input"
                        value={num}
                        onChange={e => setNum(parseInt(e.target.value))} 
                    />
                    <button 
                        className="btn"
                        onClick={() => numberAddN(dispatch, num)}
                    >{num}</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
