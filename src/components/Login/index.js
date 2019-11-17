import React from 'react'
import { Link, Redirect,withRouter } from 'react-router-dom'
import { Toaster, Intent } from '@blueprintjs/core'
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { AuthUserContext } from '../Session';
import { THONGKE } from '../../constants/routes';
import { ADMIN } from '../../constants/roles';

const Login = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <Redirect to={THONGKE} /> : (
                <SignInForm />
            )}
    </AuthUserContext.Consumer>
)

class LoginFormBase extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            error : null,
            isAdmin : false,
        }
    }

    handleLogin = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            await this.props.firebase.doSignInWithEmailAndPassword(email.value, password.value);
            this.setState({ redirect: true });
        }
        catch (err) {
            this.toaster.show({ intent: Intent.DANGER, message: err.message })
        }
    }

    googleLogin = async () => {
        try {
            const roles = [];

            if(this.state.isAdmin){
                roles.push(ADMIN);
            }
            this.props.firebase.doSignInWithGoogle()
            .then(authUser=>{
                return this.props.firebase
                .user(authUser.user.uid)
                .set({
                    email : authUser.user.email,
                    uid : authUser.user.uid,
                    roles,
                })
                .then(()=>{
                    this.props.history.push(THONGKE);
                })
                .catch(err=>{
                    this.toaster.show({ intent: Intent.DANGER, message: err.message })
                    this.setState({error : err.message})
                });
            })
            .catch(err=> {
                this.toaster.show({ intent: Intent.DANGER, message: err.message })
                this.setState({error : err.message})
            });;
            this.setState({ redirect: true })
        }
        catch (err) {
            this.toaster.show({ intent: Intent.DANGER, message: 'Unable to sign in with google.' })
        }
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }
        return (

            <div className="container">
                <br />  <p className="text-center" style={{
                    position:'absolute',
                    left:'50%',
                    top:'10%',
                    transform:'translateX(-50%)'
                }}><Toaster ref={element => this.toaster = element} /></p>
                <hr />
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                        <h4 className="card-title mt-3 text-center"><Toaster ref={element => this.toaster = element} /></h4>
                        <p style={{ margin: "10px 0 10px" }}>
                            <a href="#" style={{ backgroundColor: '#DD4B39' }} onClick={() => this.googleLogin()} className="btn btn-block text-white"> <i className="fa fa-google" /> &nbsp; Login via Google</a>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>
                        <form action="#" onSubmit={event => this.handleLogin(event)}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                                </div>
                                <input name='email' defaultValue="laquyettam1@gmail.com" className="form-control" placeholder="Email address" type="email" />
                            </div> {/* form-group// */}


                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                </div>
                                <input name='password' className="form-control" placeholder="Create password" type="password" />
                            </div> {/* form-group// */}

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Login</button>
                            </div> {/* form-group// */}
                            <p className="text-center">Don't have an account?<Link to="/sign-up">Sign Up</Link> </p>
                        </form>
                    </article>
                </div>
            </div>
        )
    }


}

const SignInForm = compose(
    withRouter,
    withFirebase
)(LoginFormBase);
export default Login;