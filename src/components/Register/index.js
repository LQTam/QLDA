import React from 'react'
// import { base } from '../../Firebaseconntion';
import { Toaster, Intent } from '@blueprintjs/core'
import { withRouter, Redirect, Link } from 'react-router-dom'
import * as ROLES from '../../constants/roles';
import { THONGKE, SIGN_IN } from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { AuthUserContext } from '../Session';
const INITIAL_STATE = {
    email: '',
    password: '',
    isAdmin: false,
    error: null,
};

const Register = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <Redirect to={THONGKE} /> : (
                <SignUpForm />
            )}
    </AuthUserContext.Consumer>
)

class SignUpFormBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { INITIAL_STATE };
    }
    handleRegister = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            const roles = [];

            if (this.state.isAdmin) {
                roles.push(ROLES.ADMIN);
            }

            this.props.firebase.doCreateUserWithEmailAndPassword(email.value, password.value)
                .then(authUser => {
                    return this.props.firebase
                        .user(authUser.user.uid)
                        .set({
                            email: email.value,
                            uid: authUser.user.uid,
                            roles,
                        })
                        .then(() => {
                            this.setState({ INITIAL_STATE });
                            this.props.history.push(THONGKE);
                        })
                        .catch(err => {
                            this.toaster.show({ intent: Intent.DANGER, message: err.message })
                            this.setState({ error: err.message })
                        });
                })
                .catch(err => {
                    this.toaster.show({ intent: Intent.DANGER, message: err.message })
                    this.setState({ error: err.message })
                });

            this.props.history.push(THONGKE)
        }
        catch (err) {
            this.toaster.show({ intent: Intent.DANGER, message: err.message })
        }

    }

    googleLogin = async () => {
        try {
            const roles = [];

            if (this.state.isAdmin) {
                roles.push(ROLES.ADMIN);
            }
            this.props.firebase.doSignInWithGoogle()
                .then(authUser => {
                    return this.props.firebase
                        .user(authUser.user.uid)
                        .set({
                            email: authUser.user.email,
                            uid: authUser.user.uid,
                            roles,
                        })
                        .then(() => {
                            this.props.history.push(THONGKE);
                        })
                        .catch(err => {
                            this.toaster.show({ intent: Intent.DANGER, message: err.message })
                            this.setState({ error: err.message })
                        });
                })
                .catch(err => {
                    this.toaster.show({ intent: Intent.DANGER, message: err.message })
                    this.setState({ error: err.message })
                });;
            this.setState({ redirect: true })
        }
        catch (err) {
            this.toaster.show({ intent: Intent.DANGER, message: 'Unable to sign in with google.' })
        }
    }

    render() {
        if (this.props.authenticated === true) {
            this.props.history.push(THONGKE)
        }

        return (
            <div className="container">
                <br />  <p className="text-center"><Toaster ref={element => this.toaster = element} /></p>
                <hr />
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                        {/* <p><Toaster ref={element => this.toaster = element} /></p> */}
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free account</p>
                        <p>
                            <a href='#' onClick={() => this.googleLogin()} className="btn btn-block" style={{ backgroundColor: '#DD4B39' }}> <i className="fa fa-google" /> &nbsp; Login via Google</a>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>
                        <form action="#" onSubmit={(event) => this.handleRegister(event)}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                                </div>
                                <input name='email' className="form-control" placeholder="Email address" type="email" />
                            </div> {/* form-group// */}


                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                </div>
                                <input name='password' className="form-control" placeholder="Create password" type="password" />
                            </div> {/* form-group// */}

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Create Account</button>
                            </div> {/* form-group// */}
                            <p className="text-center">Have an account? <Link to={SIGN_IN}>Sign In</Link> </p>
                        </form>
                    </article>
                </div>
            </div>
        )
    }
}

const SignUpForm = compose(
    withRouter,
    withFirebase
)(SignUpFormBase);

export default (Register);