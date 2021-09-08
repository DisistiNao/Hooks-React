export function numberAdd2(dispatch) {
    dispatch({type: 'number_add2'})
}

export function numberMult7(dispatch) {
    dispatch({type: 'number_mult7'})
}

export function numberDivide25(dispatch) {
    dispatch({type: 'number_divide25'})
}

export function numberParseInt(dispatch) {
    dispatch({type: 'number_parseInt'})
}

export function numberAddN(dispatch, num) {
    dispatch({type: 'number_addN', num: num})
}