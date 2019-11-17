import { withFirebase } from "../components/Firebase"

const initState = {
    datapush: {},
}

const reducer6 = (state = initState, action) => {
    switch (action.type) {
        case "THEMDICHVU3":
        // this.props.firebase.customer(action.getitem.key).update({
        //     dv3 : action.getitem.dv3
        // })
        return{...state,datapush:action.getitem}
        default:
            return state
    }
}

export default (reducer6);
