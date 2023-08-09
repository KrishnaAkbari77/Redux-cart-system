
const cartReducer = (state = [], actions) => {
    switch (actions.type) {
        case "ADD_ITEM":
            return [...state, actions.data]
        case "UPDATE_ITEM":
            console.log(actions.data);
            return actions.data
        case "DELETE_SINGLE_ITEM":
            return state.map(item => {
                if (item.id === actions.data.id && item.Quantity > 1) {
                    return { ...item, Quantity: item.Quantity - 1 };
                }
                return item;
            });

        case "DELETE_ITEM":
            return state.filter(item => item.id !== actions.data);
        default:
            return state;
    }
}

export default cartReducer;