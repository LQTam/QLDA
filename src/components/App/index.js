import React from 'react'
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'

import * as ROUTES from '../../constants/routes';
import ThuePhong from '../ThuePhong';
import Header from '../Header'
import SideBar1 from '../SideBar'
import DatPhong from '../DatPhong'
import LapPhieuDV from '../LapPhieuDV'
import Login from '../Login'
import Logout from '../Logout'
import Register from '../Register'
import ThongKe from '../ThongKe'
import Footer from '../Footer'
import QLNhanVien from '../QLNhanVien'
import { withAuthentication, withAuthorization, AuthUserContext } from '../Session';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <AuthUserContext.Consumer>
                    {authUser =>
                        authUser
                            ? (<div>
                                <Header />
                                <SideBar1 />
                                <div className='page-wrapper'>
                                    <Route exact path={ROUTES.THONGKE} component={ThongKe} />
                                    <Route path={ROUTES.THUE_PHONG} component={ThuePhong} />
                                    <Route path={ROUTES.DAT_PHONG} component={DatPhong} />
                                    <Route path={ROUTES.LAP_HOA_DON} component={LapPhieuDV} />
                                    <Route path={ROUTES.QUANLY_NHANVIEN} component={QLNhanVien} />
                                    <Route path={ROUTES.SIGN_IN} component={Login} />
                                    <Route path={ROUTES.SIGN_UP} component={Register} />
                                    <Route path={ROUTES.SIGN_OUT} component={Logout} />
                                </div>
                                <Footer />
                            </div>)
                            : (
                                <>
                                    <Header />
                                    <Redirect to='/sign-in' />
                                    <Route path={ROUTES.SIGN_IN} component={Login} />
                                    <Route path={ROUTES.SIGN_UP} component={Register} />
                                </>
                            )
                    }
                </AuthUserContext.Consumer>
            </Router>
        )
    }
}

const condition = authUser =>
    authUser;

export default withAuthentication((App));