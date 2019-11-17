import reducer1 from '../../reducers/reducer1';
import reducer2 from '../../reducers/reducer2';
import reducer3 from '../../reducers/reducer3';
import reducer4 from '../../reducers/reducer4';
import reducer5 from '../../reducers/reducer5';
import reducer6 from '../../reducers/reducer6';
import reducer7 from '../../reducers/reducer7';
import datPhongReducer from '../../reducers/datPhongReducer'
import reducerToanBoPhanTu from '../../reducers/Toanbophantu';
import userReducer from '../../reducers/userReducer';
var redux = require('redux');

var allreducer = redux.combineReducers({
    Trangthaipushkhongai : reducer1,
    Thongbao : reducer2,
    Thaydoitrangthai : reducer3,
    Themdulieudichvu : reducer4,
    Themdulieudichvu2 : reducer5,
    Themdulieudichvu3 : reducer6,
    thaydoitrangthaikhach : reducer7,
    datPhongReducer : datPhongReducer,
    ToanBoPhanTu : reducerToanBoPhanTu,
    userReducer : userReducer,
})

var store = redux.createStore(allreducer);
store.subscribe(()=>{
    // console.log(JSON.stringify(store.getState()));
})
export default store;