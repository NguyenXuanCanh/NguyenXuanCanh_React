const initialState = {
    mangSinhVien: [
        { maSinhVien: 1, tenSinhVien: 'asd', email: 'asdasd', email: 'lmao@gmail.com' },
        { maSinhVien: 2, tenSinhVien: 'aaaaaaa', email: 'asdasd', email: 'lmao2@gmail.com' }
    ],

    sinhVienSua: {
        maSinhVien: '',
        tenSinhVien: '',
        soDienThoai: '',
        email: '',
    }

}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN':
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return { ...state };
        case 'XOA_SINH_VIEN':
            state.mangSinhVien = [...state.mangSinhVien.filter(sv => sv.maSinhVien != action.maSinhVien)];
            return { ...state };
        case 'SUA_SINH_VIEN':
            state.sinhVienSua = action.sinhVienSua;

            return { ...state }
        default:
            return state
    }
}

