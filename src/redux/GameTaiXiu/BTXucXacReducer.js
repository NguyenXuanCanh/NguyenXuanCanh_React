const stateDefault = {
    taiXiu: true, //true la tai, tong diem 3-11
    mangXucXac: [
        { ma: 1, hinhAnh: './img/imgGame/1.png' },
        { ma: 1, hinhAnh: './img/imgGame/1.png' },
        { ma: 1, hinhAnh: './img/imgGame/1.png' },
    ],
    soBanDaChoi: 0,
    soBanThang: 0,
}
const BTGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu;
            return { ...state }
        case 'PLAY_GAME':
            let RanDomMangXucXac = [];
            let count = 0;
            for (let i = 0; i < 3; i++) {
                let ma = Math.floor(Math.random() * 6) + 1;
                let xucXacRandom = { ma: ma, hinhAnh: `./img/imgGame/${ma}.png` };
                count += ma;
                RanDomMangXucXac.push(xucXacRandom);
            }
            state.mangXucXac = RanDomMangXucXac;
            state.soBanDaChoi += 1;
            if (state.taiXiu === true && count <= 11) state.soBanThang++;
            if (state.taiXiu === false && count >= 12) state.soBanThang++;
            return { ...state };
        default:
            return { ...state };
    }
}

export default BTGameXucXacReducer;