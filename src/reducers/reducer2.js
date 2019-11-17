const initState = {
    trangthai: false,
    content : {},
}

const reducer2 = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGER_INFO':
        return{...state,trangthai:!state.trangthai}
        case 'GET_DATA':
        return{...state,content:action.gettion}
        default:
            return state;
    }
};

export default reducer2;
