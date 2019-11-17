import React from 'react'
import { withFirebase } from '../Firebase';

const UserTableRow =  props => {
  const job = props.job === true ? 'Admin' : 'Nhan Vien';
  const gender = props.gender == 1 ? 'Male' : 'Female';
  let success = '';
  const isSubmit =async e=>{
    e.preventDefault();
    const { username, ngaysinh, gioitinh, phone, cmnd, bophan, chucdanh } = e.target.elements;
    
    const roles = [];
    if (chucdanh.value) {
      roles.push(chucdanh.value);
    }
    
    const info = {
      username : username.value,
      ngaysinh : ngaysinh.value,
      gioitinh : gioitinh.value,
      phone : phone.value,
      cmnd : cmnd.value,
      bophan : bophan.value,
      roles,
    };

    await props.firebase.user(props.uid)
    .update(info);

    success = "Sua thong tin thanh cong";

      document.getElementById('closeModal').click();
  }

  const confirmDelete =async (uid)=>{
    if(window.confirm("Ban co chac chan muon xoa")){
      await props.firebase.user(uid).remove();
    }
  }
  return (
    <>
      <tr>
        <td>{props.index + 1}</td>
        <td>{props.uid}</td>
        <td>{props.username}</td>
        <td>{props.dob}</td>
        <td>{props.gender}</td>
        <td>{props.phone}</td>
        <td>{props.role}</td>
        <td>{props.chucdanh}</td>
        <td>
          <button id="sua-nhan-vien" className="btn btn-info" data-toggle="modal" data-target={`#${props.uid}`}>Sửa</button>
          <button type='button' id="xoa-nhan-vien" className="btn btn-info" onClick={(uid)=>confirmDelete(props.uid)}>Xóa</button>
        </td>
      </tr>

      {console.log(success)}
      <div className="modal fade" id={props.uid} role="dialog">
        <div className="modal-md modal-dialog" >
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" style={{ marginTop: '5px' }}>Nhập thông tin nhân viên</h3>
            </div>
            <div className="modal-body">
              <form action="#" onSubmit={event => isSubmit(event)}>
                <label htmlFor="username">Họ Và Tên:</label>
                <input type="text" id="username" name="username" defaultValue={props.username} placeholder="Nhập họ và tên..." />
                <label htmlFor="ngaysinh">Ngày Sinh:</label>
                <input type="date" id="ngaysinh " defaultValue = {props.dob} name="ngaysinh" />
                <label htmlFor="gioitinh">Giới Tính:</label>
                <select id='gioitinh' name='gioitinh' defaultValue={props.gender}>
                  <option value>Chọn giới tính</option>
                  <option value="nam">Nam</option>
                  <option value="nu">Nữ</option>
                  <option value="khac">Khác</option>
                </select><br /><br />
                <label htmlFor="phone">Số Điện Thoại:</label>
                <input type="text" id="phone" name="phone" defaultValue={props.phone} placeholder="Nhập số điện thoại..." />
                <label htmlFor="cmnd">So CMND:</label>
                <input type="text" id="cmnd" name="cmnd" defaultValue={props.cmnd} placeholder="Nhap so chung minh nhan dan" />
                <label htmlFor="address">Bộ phận:</label>
                <select id='address' name='bophan' defaultValue={props.role}>
                  <option value>Chọn bo phan</option>
                  <option value="le tan">Le Tan</option>
                </select><br /><br />
                <label htmlFor="chucdanh">Chức danh:</label>
                <select id='chucdanh' name='chucdanh' defaultValue={props.chucdanh}>
                  <option value>Chọn chuc danh</option>
                  <option value="ADMIN">Admin</option>
                  <option value="LETAN">Le Tan</option>
                </select><br /><br />

                <div className="modal-footer">
                  <button type="submit" className="btn btn-info">Sua nhân viên</button>
                  <button type="button" className="btn btn-info" data-dismiss="modal" id='closeModal'>Hủy</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withFirebase(UserTableRow);
