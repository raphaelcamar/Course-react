export function reducer(state, action){
    switch(action.type){
        case 'number_add2':
            return {...state, number : state.number + 2}
        case 'login':
            return{...state, user:{name: action.payload}}
        case 'multi':
            return {...state, number : state.number * 7}
        case 'division':
            return {...state, number : state.number / 25}
        case 'parse':
            return {...state, number : parseInt(state.number)}
        case 'numberAddN':
            return {...state, number : state.number + action.payload}
        default:
            return state
    }
}