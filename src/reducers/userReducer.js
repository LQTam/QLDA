import { withFirebase } from "../components/Firebase";

const initState = {
    user: {},
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            const userAdvance = action.user.user;
            const userBase = action.user;
            this.props.firebase.customer(userAdvance.uid).set({
                displayName : userBase.displayName,
                isAdmin : false,
                phoneNumber : userBase.phoneNumber,
                bophan: userBase.bophan,
                gioitinh : userBase.gioitinh,
                ngaysinh : userBase.ngaysinh,
                uid: userAdvance.uid,
                email : userAdvance.email,
                emailVerified : userAdvance.emailVerified,
                isAnonymous : userAdvance.isAnonymous,
                photoURL : userAdvance.photoURL,
                providerData : {
                    providerID : userAdvance.providerData[0].providerId,
                    uid:userAdvance.providerData[0].uid,
                },
                refreshToken : userAdvance.refreshToken,
            })
        return{...state,user:action.getitem}
        default:
            return state
    }
}

export default (userReducer);
