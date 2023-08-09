export const getProducts = (data) => {
    return {
        type: "GET_PRODUCTS",
        data
    }
}

export const addItem = (data) => {
    console.log(data);
    return {
        type: "ADD_ITEM",
        data
    }
}
export const updateItem = (data) => {
    // console.log(data);
    return {
        type: "UPDATE_ITEM",
        data
    }
}
export const deleteSingleItem = (data) => {
    return {
        type: "DELETE_SINGLE_ITEM",
        data
    }
}
export const deleteItem = (data) => {
    return {
        type: "DELETE_ITEM",
        data
    }
}
