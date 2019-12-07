import React, { Component } from "react";
import Logo from "./Logo";
import AlertInfo from "../Thongbao/AlertInfo";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";

const HeaderBase = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <>
    <ul class="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/" aria-expanded="false">
          <i className="fa fa-telegram" />
          <span className="hide-menu">Thống kê</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/thue-phong" aria-expanded="false">
          <i className="fa fa-address-book" />
          <span className="hide-menu">Thuê phòng</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dat-phong" aria-expanded="false">
          <i className="fa fa-id-card" />
          <span className="hide-menu">Đặt phòng</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/lap-hoa-don" aria-expanded="false">
          <i className="fa fa-file" />
          <span className="hide-menu">Lập phiếu dịch vụ</span>
        </Link>
      </li>
      {authUser.roles.includes("ADMIN") && (
          <li className="nav-item">
          <Link className="nav-link" to="/quanly-nhanvien" aria-expanded="false">
            <i className="fa fa-file" />
            <span className="hide-menu">Quan ly nhan vien</span>
          </Link>
        </li>
      )}
    </ul>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a
          id="navbarDropdown"
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          v-pre
        >
             <img src="../assets/images/users/1.jpg" height="30" alt="user" />
          {authUser.email} <span class="caret"></span>
        </a>

        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdown"
        >
          <Link to="/sign-out" class="dropdown-item">
            Logout
          </Link>
        </div>
      </li>
    </ul>
  </>
);

const NavigationNonAuth = () => (
  <>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <Link to="/sign-up" class="nav-link">
          Sign Up
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/sign-in" class="nav-link">
          Sign In
        </Link>
      </li>
    </ul>
  </>
);
class Header extends Component {
  showdata = () => {
    if (this.props.trangthaithongbao === true) {
      return <AlertInfo />;
    }
  };

  render() {
    return (
      <header className="topbar mb-2">
        {this.showdata()}
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
          <div class="container">
            <Link class="navbar-brand" to="/">
              THTV
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="{{ __('Toggle navigation') }}"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <HeaderBase />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    trangthaithongbao: state.Thongbao.trangthai
  };
};
export default connect(mapStateToProps)(Header);
