import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from '../../Firebase';

class dataphongtructiep extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Username: '',
      dateofbirt: '',
      address: '',
      sex: '',
      cmnd: '',
      Sđt: '',
      NameRoom: '',
      ngaydat: '',
      dv1: this.props.dv1,
      dv2: this.props.dv2,
      dv3: this.props.dv3,
      error : false,
    };
  }

  componentWillMount() {
    this.props.firebase.customers()
    .on('value', (datas) => {
      var Mang = [];
      datas.forEach(element => {
        const keys = element.key;
        const image = element.val().image;
        const loaiphong = element.val().loaiphong;
        const maphong = element.val().maphong;
        const ngaydatphong = element.val().ngaydatphong;
        const ngaytraphong = element.val().ngaytraphong;
        const trangthai = element.val().trangthai;
        const gia = element.val().gia;
        const tenkhach = element.val().tenkhach;
        Mang.push({
          keys: keys,
          image: image,
          loaiphong: loaiphong,
          maphong: maphong,
          ngaydatphong: ngaydatphong,
          ngaytraphong: ngaytraphong,
          trangthai: trangthai,
          gia: gia,
          tenkhach: tenkhach
        })
      });
      this.setState({
        data: Mang
      });
    })
  }

  IsChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleRoomChange = evt=>{
    this.setState({NameRoom: [...evt.target.NameRoom].map(o => o.value)}); 
    console.log(this.state.NameRoom);
  }

  showoption = () => {
    return this.state.data.map((value, key) => {
      if (value.trangthai === 1) {
        return <option value={value.keys}>{value.maphong}*{value.keys}</option>
      }
    })
  }


  ButtonPushData = (e) => {
    e.preventDefault();
    var info = {};
    info.keyPhong = this.state.NameRoom;
    info.tenkhach = this.state.Username;
    info.ngaysinh = this.state.dateofbirt;
    info.diachi = this.state.address;
    info.gioitinh = this.state.sex;
    info.cmnd = this.state.cmnd;
    info.sdt = this.state.Sđt;
    info.ngaydat = this.state.ngaydat;
    info.trangthai = 0;
    if (this.state.Username === '') {
      this.props.trangthaithaydoi();
      this.props.Dulieukemtheo('thông tin người dùng còn trống');
    }
    else if (this.state.dateofbirt === '') {
      this.props.trangthaithaydoi();
      this.props.Dulieukemtheo('thông tin ngày sinh còn trống');
    }
    else if (this.state.address === '') {
      this.props.trangthaithaydoi();
      this.props.Dulieukemtheo('thông tin quê quán còn trống');
    }
    else if (this.state.sex === '') {
      this.props.trangthaithaydoi();
      this.props.Dulieukemtheo('thông tin giới tính còn trống');
    }
    else if (this.state.cmnd === '') {
      this.props.trangthaithaydoi();
      this.props.Dulieukemtheo('thông tin số cmnd còn trống');
    }
    else if (this.state.Sđt === '') {
      this.props.trangthaithaydoi();
      this.props.Dulieukemtheo('thông tin số điện thoại còn trống');
    }
    else if (this.state.NameRoom === '') {
      this.props.trangthaithaydoi();
      this.props.Dulieukemtheo('thông tin phòng để thuê còn trống');
    }
    else {
      console.log(info);
      this.props.firebase.customer(info.keyPhong).update({
        tenkhach : info.tenkhach,
        ngaysinh : info.ngaysinh,
        diachi : info.diachi,
        gioitinh : info.gioitinh,
        cmnd : info.cmnd,
        sdt : info.sdt,
        ngaydat : info.ngaydat,
        trangthai : 2,
      })
      document.getElementById('closeCustForm').click();
      this.props.trangthaithaydoi();
      this.props.Dulieukemtheo('thêm mới   ' + this.state.Username + '    thành công');
    }


  }


  trangthai = () => {
    if (this.props.trangthai === 0) {
      return (' đang được thuê');
    }
    else if (this.props.trangthai === 2) {
      return ('đã đặt');
    }
    else {
      return ('sẵn sàng');
    }
  }


  Buttonkeys = () => {
    var info = {};
    info.key = this.props.madaan.keys;
    this.setState((prevState) => ({
      dv1: prevState.dv1 + 1
    }));
    info.dv1 = this.state.dv1;
    console.log(info.dv1);
    this.props.firebase.customer(info.key).update({
      dv1 : info.dv1
  })
    // this.props.Thongtinduocguile(info);
  }


  Buttonkeys1 = () => {
    var info = {};
    info.key = this.props.madaan.keys;
    this.setState((prevState) => ({
      dv1: prevState.dv1 - 1
    }));
    info.dv1 = this.state.dv1;
    console.log(info.dv1);
    this.props.firebase.customer(info.key).update({
      dv1 : info.dv1
  })
    // this.props.Thongtinduocguile(info);
  }



  Buttonkeys2 = () => {
    var info = {};
    info.key = this.props.madaan.keys;
    this.setState((prevState) => ({
      dv2: prevState.dv2 + 1
    }));
    info.dv2 = this.state.dv2;
    this.props.firebase.customer(info.key).update({
          dv2 : info.dv2
      })
    this.props.Thongtinduocguile2(info);
  }


  Buttonkeys4 = () => {
    var info = {};
    info.key = this.props.madaan.keys;
    this.setState((prevState) => ({
      dv2: prevState.dv2 - 1
    }));
    info.dv2 = this.state.dv2;
    this.props.firebase.customer(info.key).update({
      dv2 : info.dv2
  })
    this.props.Thongtinduocguile2(info);
  }



  Buttonkeys3 = () => {
    var info = {};
    info.key = this.props.madaan.keys;
    this.setState((prevState) => ({
      dv3: prevState.dv3 + 1
    }));
    info.dv3 = this.state.dv3;
    this.props.firebase.customer(info.key).update({
      dv3 : info.dv3
  })
    this.props.Thongtinduocguile3(info);
  }

  Buttonkeys5 = () => {
    var info = {};
    info.key = this.props.madaan.keys;
    this.setState((prevState) => ({
      dv3: prevState.dv3 - 1
    }));
    info.dv3 = this.state.dv3;
    this.props.firebase.customer(info.key).update({
      dv3 : info.dv3
  })
    this.props.Thongtinduocguile3(info);
  }


  showtoanbo = () => {
    const isInValid = this.state.Username === '' ||
    this.state.dateofbirt === '' ||
    this.state.address === '' ||
    this.state.ngaydat === '' ||
    this.state.sex === '' ||
    this.state.cmnd === '' ||
    this.state.Sđt === '' ||
    this.state.NameRoom === '';
    if (this.props) {
      return (
        <div id="phong">
          <img src={this.props.image} alt="demo6" />
          <h2>{this.props.maphong}</h2>
          <h4>{this.props.gia}</h4>
          <h4>{this.props.tenkhach}</h4>
          <h5 id="trangthaiphong-sansang">{this.trangthai()}</h5>
          <button type="button" className="fa fa-address-card-o btn btn-secondary" data-toggle="modal" data-target={"#" + this.props.madaan.keys}></button>



          {/* Modal */}
          <div className="modal fade" id={this.props.madaan.keys} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Thêm dịch vụ</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div>
                    <div>
                      <label>BCS</label>
                      <button type="button" className="btn btn-secondary fa fa-plus" onClick={this.Buttonkeys.bind(this)} ></button>
                      <button type="button" className="btn btn-secondary fa fa-minus" onClick={this.Buttonkeys1.bind(this)} ></button>
                      {this.props.dv1}
                    </div>
                    <div>
                      <label>AUTOGTA</label>
                      <button type="button" className="btn btn-secondary fa fa-plus" onClick={this.Buttonkeys2.bind(this)} ></button>
                      <button type="button" className="btn btn-secondary fa fa-minus" onClick={this.Buttonkeys4.bind(this)} ></button>
                      {this.props.dv2}
                    </div>
                    <div>
                      <label>MEOMEOMEO</label>
                      <button type="button" className="btn btn-secondary fa fa-plus" onClick={this.Buttonkeys3.bind(this)}  ></button>
                      <button type="button" className="btn btn-secondary fa fa-minus" onClick={this.Buttonkeys5.bind(this)} ></button>
                      {this.props.dv3}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <button type="button" className="fa fa-plus-square btn btn-primary" data-toggle="modal" data-target="#modalDatTruocPhong"></button>
          {/* Modal */}
          <div className="modal fade" id="modalDatTruocPhong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" id='closeCustForm' className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                <div className="modal-header">
                    <h3 className="modal-title" style={{ marginTop: '5px' }}>Nhập thông tin khách hàng</h3>
                  </div>
                  <div className="modal-body">
                    <form action="#" onSubmit={event=>this.ButtonPushData(event)}>
                      <label htmlFor="fname">Họ Và Tên:</label>
                      <input type="text" id="name" name="Username" onChange={(event) => this.IsChange(event)} placeholder="Nhập họ và tên..." />
                      <label htmlFor="lname">Ngày Sinh:</label>
                      <input type="date" id="dateofbirt" name="dateofbirt" onChange={(event) => this.IsChange(event)} />
                      <label htmlFor="address">Địa Chỉ:</label>
                      <input type="text" id="address" name="address" placeholder="Nhập địa chỉ..." onChange={(event) => this.IsChange(event)} />

                      <label htmlFor="address">Ngày đặt:</label>
                      <input type="date" id="address" name="ngaydat" onChange={(event) => this.IsChange(event)} />

                      <label htmlFor="lname">Giới Tính:</label>
                      <select name="sex" onChange={(event) => this.IsChange(event)}>
                        <option value>Chọn giới tính</option>
                        <option value="nam">Nam</option>
                        <option value="nu">Nữ</option>
                        <option value="khac">Khác</option>
                      </select><br /><br />
                      <label htmlFor="lname">Số CMND/Thẻ căn cước:</label>
                      <input type="text" id="cmnd" name="cmnd" onChange={(event) => this.IsChange(event)} placeholder="Nhập số CMND/Thẻ căn cước..." />
                      <label htmlFor="country">Số Điện Thoại:</label>
                      <input type="text" id="phone" name="Sđt" onChange={(event) => this.IsChange(event)} placeholder="Nhập số điện thoại..." />
                      <label htmlFor="country">Phòng Còn trống:</label>
                      <select multiple className="form-control" name="NameRoom" id="exampleFormControlSelect2" onChange={(event) => this.IsChange(event)}>
                        {this.showoption()}
                      </select>
                      <input class="mt-2 btn btn-primary" type="submit" value="Dat Phong" />
                    </form>
                  </div>
                  <div className="modal-footer">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.showtoanbo()}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Dataorigin: state.Trangthaipushkhongai,
    Thaydoitrangthai: state.Thongbao.trangthai
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    Thongtinduocguile: (getitem) => {
      dispatch({ type: 'THEMDICHVU', getitem })
    },
    Thongtinduocguile2: (getitem) => {
      dispatch({ type: 'THEMDICHVU2', getitem })
    },
    Thongtinduocguile3: (getitem) => {
      dispatch({ type: 'THEMDICHVU3', getitem })
    },

    Dulieukemtheo: (gettion) => {
      dispatch({ type: 'GET_DATA', gettion })
    },
    trangthaithaydoi: () => {
      dispatch({ type: 'CHANGER_INFO' })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(dataphongtructiep))