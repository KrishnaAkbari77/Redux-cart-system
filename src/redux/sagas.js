import { takeEvery, put } from "redux-saga/effects"

function* getProducts() {
        try {
            const response = yield fetch('http://localhost:5000/products');
            const data = yield response.json();
            yield put({ type: "SET_PRODUCT_LIST", data: data });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }


function* productSaga() {
    yield takeEvery("GET_PRODUCTS", getProducts);
}

export default productSaga;


