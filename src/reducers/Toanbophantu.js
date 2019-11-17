import { withFirebase } from "../components/Firebase"

const initState = {
    key: {},
}

const reducerToanBoPhanTu = (state = initState, action) => {
    switch (action.type) {
        case "THAYDOIS":
        // this.props.firebase.customer(action.getitem.id).update({
        //     cmnd : action.getitem.cmnd,
        //     diachi : action.getitem.diachi,
        //     dv1 : action.getitem.dv1,
        //     dv2 : action.getitem.dv2,
        //     dv3 : action.getitem.dv3,
        //     gioitinh : action.getitem.gioitinh,
        //     ngaydatphong : action.getitem.ngaydatphong,
        //     ngaynhanphong : action.getitem.ngaynhanphong,
        //     ngaysinh : action.getitem.ngaysinh,
        //     ngaytraphong : action.getitem.ngaytraphong,
        //     sdt : action.getitem.sdt,
        //     tenkhach : action.getitem.tenkhach,
        //     trangthai : action.getitem.trangthai,
        // })
        return{...state,datapush:action.getitem}
        default:
            return state
    }
}

export default (reducerToanBoPhanTu);
