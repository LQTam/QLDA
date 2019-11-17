import React from 'react'
import { SIGN_IN } from '../../constants/routes';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './context';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    if(!condition(authUser)){
                        this.props.history.push(SIGN_IN);
                    }
                },
                ()=> this.props.history.push(SIGN_IN),
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...this.props} /> : null
                    }
                </AuthUserContext.Consumer>
            )
        }
    }

    return compose(
        withRouter,
        withFirebase
    )(WithAuthorization);
}

export default withAuthorization;