import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux';
class AlertInfo extends Component {

    HanLer = () => {
        this.props.Thaydoutrangthau();
    }

    render() { 
        return (
            <AlertContainer>
                <Alert timeout={1000} onDismiss={()=>this.HanLer()} type="success">{this.props.Baivietthonbao}</Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        Baivietthonbao: state.Thongbao.content
    }
} 
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        Thaydoutrangthau: () => {
            dispatch({type:'CHANGER_INFO'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);