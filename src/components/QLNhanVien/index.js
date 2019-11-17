import React, { Component } from 'react'
import UserTableRow from './UserTableRow'
import ModalThemMem from './ModalThemMem'
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import {ADMIN} from '../../constants/roles';
import {withAuthorization} from '../Session';
class QLNhanVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isAdmin: false,
    }
  }
  componentWillMount() {
    this.props.firebase.users()
    .on('value', users => {
      var Mang = [];
      users.forEach(element => {
        let chucdanh = '';
        if(element.val().roles){
          element.val().roles.forEach(role=>{
            chucdanh = role;
          })
        }
        const keys = element.key;
        const gioitinh = element.val().gioitinh;
        const username = element.val().username;
        const manv = element.val().manv;
        const ngaysinh = element.val().ngaysinh;
        const isAdmin = element.val().isAdmin;
        const phoneNumber = element.val().phone;
        const bophan = element.val().bophan;
        const cmnd = element.val().cmnd;
        Mang.push({
          keys: keys,
          gioitinh: gioitinh,
          username: username,
          manv: manv,
          ngaysinh: ngaysinh,
          isAdmin: isAdmin,
          phoneNumber: phoneNumber,
          cmnd: cmnd,
          bophan: bophan,
          chucdanh: chucdanh,
        })
      });
      this.setState({
        users: Mang
      });
    })
  }


  componentDidMount() {
    this.state.users.map((user, key) => {
      if (user.isAdmin === true) {
        this.setState({ isAdmin: true })
      }
    })
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }
  
  showUsers = users => {
    let result = null;
    result = users.map((user, key) => {
      return <UserTableRow index={key} key={key} id={user.manv}
        uid={user.keys}
        chucdanh ={user.chucdanh}
        username={user.username}
        dob={user.ngaysinh}
        gender={user.gioitinh}
        cmnd = {user.cmnd}
        phone={user.phoneNumber}
        job={user.isAdmin}
        role={user.bophan}
      />
    })
    return result;
  }
  render() {
    return (
      <div className="container-fluid">
        {/* ============================================================== */}
        {/* Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <br />
            <h3 className="text-themecolor">Quản lý nhân viên</h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
              <li className="breadcrumb-item active">Quản lý nhân viên</li>
            </ol>
          </div>
        </div>
        {/* ============================================================== */}
        {/* End Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Start Page Content */}
        {/* ============================================================== */}
        <div id="content-nhan-vien">
          <div id="menu-them-nhan-vien">
            <button className="btn btn-info" data-toggle="modal" data-target="#btnThemNV">Thêm nhân viên</button>
          </div>
          <div className="card-body-nhan-vien">
            <h4 className="card-title">Danh sách nhân viên</h4>
            {/* <h6 class="card-subtitle">Add class <code>.table</code></h6> */}
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mã số NV</th>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Số điện thoại</th>
                    <th>Bộ phận</th>
                    <th>Chức danh</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <UserTableRow index = "1" id="NV01"
                    username = "Thào A Vảng"
                    dob="19/05/1998"
                    gender="Nam"
                    phone="0123268755"
                    job="Lễ Tân"
                    role="Nhân viên"
                    /> */}
                  {this.showUsers(this.state.users)}
                </tbody>
              </table>
            </div>
          </div>
          {/* Model them nhan vien */}
          {/* Satrt model */}
          <ModalThemMem />
        </div> {/* #container */}
        {/* ============================================================== */}
        {/* End footer */}
        {/* ============================================================== */}
      </div>
    )
  }
}

const condition = authUser => 
authUser && authUser.roles.includes(ADMIN);

export default compose(
  withAuthorization(condition),
  withFirebase,
)(QLNhanVien);