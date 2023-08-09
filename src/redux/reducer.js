const productReducer = (state = [], actions) => {
    switch (actions.type) {
        case "SET_PRODUCT_LIST":
            return [...actions.data]
       
        default:
            return state;
    }
}

export default productReducer;