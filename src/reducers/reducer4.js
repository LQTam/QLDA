import { withFirebase } from "../components/Firebase"

const initState = {
    datapush: {},
}

const reducer4 = (state = initState, action) => {
    switch (action.type) {
        case "THEMDICHVU":
        // this.props.firebase.customer(action.getitem.key).update({
        //     dv1 : action.getitem.dv1
        // })
        return{...state,datapush:action.getitem}
        default:
            return state
    }
}

export default (reducer4);
