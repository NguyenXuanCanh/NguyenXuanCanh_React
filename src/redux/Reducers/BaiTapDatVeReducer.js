const stateDefault = {
    danhSachGheDangDat: [
        // { "soGhe": "A1", "gia": 75000, "daDat": false, },
    ],
    tongTien: 0,
}

export const baiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHON_GHE": {
            let danhSachMoi = [...state.danhSachGheDangDat];
            if (danhSachMoi.findIndex(arrGhe => arrGhe.soGhe == action.ghe.soGhe) === -1) {
                danhSachMoi.push(action.ghe);
            } else {
                danhSachMoi.splice(danhSachMoi.findIndex(arrGhe => arrGhe.soGhe == action.ghe.soGhe), 1);
            }

            state.danhSachGheDangDat = danhSachMoi;
            state.tongTien += action.ghe.gia;
            return { ...state };
        }
        case "XOA_GHE": {
            let danhSachMoi = [...state.danhSachGheDangDat];
            danhSachMoi.splice(danhSachMoi.findIndex(arrGhe => arrGhe.soGhe == action.ghe.soGhe), 1);
            state.danhSachGheDangDat = danhSachMoi;
            return { ...state };
        }
        case "DAT_VE": {
            let danhSachMoi = [...state.danhSachGheDangDat];
            while (danhSachMoi.length) {
                danhSachMoi[0].daDat = true;
                danhSachMoi.splice(0, 1);
            }
            state.danhSachGheDangDat = danhSachMoi;
            state.tongTien = 0;
            return { ...state };
        }
        default:
            return { ...state };
    }
}