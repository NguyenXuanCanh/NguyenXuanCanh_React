import { combineReducers, createStore } from 'redux'

const stateDefault = {
    gioHang: [
        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "soLuong": 1,
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },
    ]
}

const rootReducer = combineReducers({
    //Nơi chứa toàn bộ state của ứng dụng
    gioHangReducer: (state = stateDefault) => {
        return state;
    }
})

export const store = createStore(rootReducer);