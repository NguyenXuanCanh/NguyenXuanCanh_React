import { combineReducers, createStore } from 'redux'
import BTGameXucXacReducer from './GameTaiXiu/BTXucXacReducer';
import { baiTapDatVeReducer } from './Reducers/BaiTapDatVeReducer';
import { gioHangReducer } from './Reducers/gioHangReducer';
// import { baiTapDatVeReducer } from './Reducers/BaiTapDatVeReducer';

const rootReducer = combineReducers({
    //Nơi chứa toàn bộ state của ứng dụng
    gioHangReducer: gioHangReducer,
    baiTapDatVeReducer: baiTapDatVeReducer,
    BTGameXucXacReducer: BTGameXucXacReducer,
})

export const store = createStore(rootReducer);