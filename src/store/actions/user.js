export function userLogin(dispatch, name) {
    dispatch({type: 'login', payload: name})
}