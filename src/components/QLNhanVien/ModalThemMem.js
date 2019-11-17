import React from 'react'
import { withFirebase } from '../Firebase';
class ModalThemMem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      success : null,
    }
  }

  isSubmit = e => {
    e.preventDefault();

    const { username, email, ngaysinh, gioitinh, phone, cmnd, bophan, chucdanh } = e.target.elements;

    const roles = [];
    if (chucdanh.value) {
      roles.push(chucdanh.value);
    }

    this.props.firebase.doCreateUserWithEmailAndPassword(email.value, '123456')
      .then(authUser => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            email: email.value,
            username: username.value,
            ngaysinh: ngaysinh.value,
            gioitinh: gioitinh.value,
            phone: phone.value,
            cmnd: cmnd.value,
            bophan: bophan.value,
            chucdanh: chucdanh.value,
            uid: authUser.user.uid,
            roles,
          })
          .then(()=>{
            this.setState({success : "Them moi thanh cong!"});
          })
          .catch(err=> console.log(err));
      })
      .catch(err => {
        this.setState({ error: err.message })
      });
      document.getElementById('closeModal').click();
  }
  render() {
    return (
      <div className="modal fade" id="btnThemNV" role="dialog">
        <div className="modal-md modal-dialog" >
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" style={{ marginTop: '5px' }}>Nhập thông tin nhân viên</h3>
            </div>
            <div className="modal-body">
              <form action="#" onSubmit={event => this.isSubmit(event)}>
                <label htmlFor="username">Họ Và Tên:</label>
                <input type="text" id="username" name="username" placeholder="Nhập họ và tên..." />
                <label htmlFor="email">Email:</label>
                <input type="email" class='form-control' id="email" name="email" placeholder="Nhap email..." />
                <label htmlFor="ngaysinh">Ngày Sinh:</label>
                <input type="date" id="ngaysinh" name="ngaysinh" />
                <label htmlFor="gioitinh">Giới Tính:</label>
                <select id='gioitinh' name='gioitinh'>
                  <option value>Chọn giới tính</option>
                  <option value="nam">Nam</option>
                  <option value="nu">Nữ</option>
                  <option value="khac">Khác</option>
                </select><br /><br />
                <label htmlFor="phone">Số Điện Thoại:</label>
                <input type="text" id="phone" name="phone" placeholder="Nhập số điện thoại..." />
                <label htmlFor="cmnd">So CMND:</label>
                <input type="text" id="cmnd" name="cmnd" placeholder="Nhap so chung minh nhan dan" />
                <label htmlFor="address">Bộ phận:</label>
                <select id='address' name='bophan'>
                  <option value>Chọn bo phan</option>
                  <option value="le tan">Le Tan</option>
                </select><br /><br />
                <label htmlFor="chucdanh">Chức danh:</label>
                <select id='chucdanh' name='chucdanh'>
                  <option value>Chọn chuc danh</option>
                  <option value="ADMIN">Admin</option>
                  <option value="LETAN">Le Tan</option>
                </select><br /><br />

                <div className="modal-footer">
                  <button type="submit" className="btn btn-info">Thêm nhân viên</button>
                  <button type="button" className="btn btn-info" data-dismiss="modal" id='closeModal'>Hủy</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End model */}
        {/* End content */}
      </div>
    )
  }
}

export default withFirebase(ModalThemMem);
