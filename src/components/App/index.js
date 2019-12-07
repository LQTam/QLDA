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
import { withAuthentication,  AuthUserContext } from '../Session';
import Loadable from 'react-loadable';
const ThuePhongLoadable = Loadable({
    loader : () => import ('../ThuePhong'),
    loading : ()=> (<h1>Loading...</h1>)
});

const DatPhongLoadable = Loadable({
    loader : () => import ('../DatPhong'),
    loading : ()=> (<h1>Loading...</h1>)
});

const LapPhieuLoadable = Loadable({
    loader : () => import ('../LapPhieuDV'),
    loading : ()=> (<h1>Loading...</h1>)
});

const QLNV = Loadable({
    loader : () => import ('../QLNhanVien'),
    loading : ()=> (<h1>Loading...</h1>)
});

const LoginLoadable = Loadable({
    loader : () => import ('../Login'),
    loading : ()=> (<h1>Loading...</h1>)
});

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
                            ? (<>
                                <Header />
                                {/* <SideBar1 /> */}
                                    <Route exact path={ROUTES.THONGKE} component={ThongKe} />
                                    <Route path={ROUTES.THUE_PHONG} component={ThuePhongLoadable} />
                                    <Route path={ROUTES.DAT_PHONG} component={DatPhongLoadable} />
                                    <Route path={ROUTES.LAP_HOA_DON} component={LapPhieuLoadable} />
                                    <Route path={ROUTES.QUANLY_NHANVIEN} component={QLNV} />
                                    <Route path={ROUTES.SIGN_IN} component={LoginLoadable} />
                                    <Route path={ROUTES.SIGN_UP} component={Register} />
                                    <Route path={ROUTES.SIGN_OUT} component={Logout} />
                                <Footer />
                            </>)
                            : (
                                <>
                                    <Header />
                                    <Redirect to='/sign-in' />
                                    <Route path={ROUTES.SIGN_IN} component={LoginLoadable} />
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

export default withAuthentication(App);
