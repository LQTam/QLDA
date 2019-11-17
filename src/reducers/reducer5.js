import { withFirebase } from "../components/Firebase"

const initState = {
    datapush: {},
}

const reducer5 = (state = initState, action) => {
    switch (action.type) {
        case "THEMDICHVU2":
        // this.props.firebase.customer(action.getitem.key).update({
        //     dv2 : action.getitem.dv2
        // })
        return{...state,datapush:action.getitem}
        default:
            return state
    }
}

export default (reducer5);
