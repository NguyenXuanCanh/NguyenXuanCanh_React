import { bindActionCreators } from "redux";

const stateDefault = {
    gioHang: [
        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "soLuong": 1,
            "gia": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },
    ]
}

//state để trả xuống cho các component, action để nhận
export const gioHangReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // console.log(action);
            let gioHangCapNhat = [...state.gioHang];//sao chep state.gioHang ra 
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP == action.spGioHang.maSP);
            // console.log(index);
            if (index != -1) {
                gioHangCapNhat[index].soLuong++;
            } else {
                gioHangCapNhat.push(action.spGioHang);
            }
            //cap nhat lai state tuong ung setState
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }
        // break;
        case 'XOA_GIO_HANG': {
            // console.log(action);
            let gioHangCapNhat = [...state.gioHang];//sao chep state.gioHang ra 
            // let index = gioHangCapNhat.findIndex(spGH => spGH.maSP == action.maSP);
            // console.log(index);
            gioHangCapNhat.splice(action.index, 1);
            //cap nhat lai state tuong ung setState
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }
        case 'TANG_GIAM_SO_LUONG': {
            // console.log(action.spGioHang.maSP);
            let gioHangCapNhat = [...state.gioHang];//sao chep state.gioHang ra 
            // console.log(action.spGiohang);
            // let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            // console.log(index);
            if (action.index != -1) {
                if (action.math == "cong") {

                    gioHangCapNhat[action.index].soLuong++;
                } else {
                    if (gioHangCapNhat[action.index].soLuong == 1) {
                        gioHangCapNhat.splice(action.index, 1);
                    } else {
                        gioHangCapNhat[action.index].soLuong--;
                    }
                }
            }
            //cap nhat lai state tuong ung setState
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }
    }
    return state;
}