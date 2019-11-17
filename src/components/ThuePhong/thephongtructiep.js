import React, { Component } from 'react';
import Dataphongtructiep from './Data-Phongtructiep/dataphongtructiep';
import {connect} from 'react-redux';
import { withFirebase } from '../Firebase';
class thuephongtructiep extends Component {
constructor(props){
  super(props);
  this.state = {
    data : [],
    change : 1
  };
}
componentWillMount() {
  this.props.firebase.customers()
  .on('value',(datas) => {
    var Mang = [];
    datas.forEach(element => {
      const keys = element.key;
      const image = element.val().image;
      const loaiphong = element.val().loaiphong;
      const maphong = element.val().maphong;
      const ngaydatphong = element.val().ngaydatphong;
      const ngaytraphong = element.val().ngaytraphong;
      const ngaynhanphong = element.val().ngaynhanphong;
      const trangthai = element.val().trangthai;
      const gia = element.val().gia;
      const tenkhach = element.val().tenkhach;
      const dv1 = element.val().dv1;
      const dv2 = element.val().dv2;
      const dv3 = element.val().dv3;
      Mang.push({
        image : image,
        loaiphong : loaiphong,
        maphong : maphong,
        ngaydatphong : ngaydatphong,
        ngaytraphong : ngaytraphong,
        trangthai : trangthai,
        gia : gia,
        tenkhach : tenkhach,
        ngaynhanphong : ngaynhanphong,
        keys :keys,
        dv1 : dv1,
        dv2 : dv2,
        dv3 : dv3
      })
    });
    this.setState({
      data : Mang
    });
  })
}

showdata = () => {
  if(this.state.data)
  {
    return this.state.data.map((value , key) => {
        if(value.trangthai === this.state.change)
        {
          return <Dataphongtructiep 
          key={key}
          index = {key}
          dv1={value.dv1}
          dv2={value.dv2}
          dv3={value.dv3}
          madaan={value}
          keys={value.keys}
          image={value.image}
          loaiphong={value.loaiphong}
          maphong={value.maphong}
          ngaydatphong={value.ngaydatphong}
          ngaytraphong={value.ngaytraphong}
          ngaynhanphong={value.ngaynhanphong}
          trangthai={value.trangthai}
          gia={value.gia}
          tenkhach={value.tenkhach}
          />
        }
    })
  }
}




Buttonthuocsansan = () => {
 this.setState({
   change : 1
 });
}
Buttondaconguoithue = () => {
  this.setState({
    change : 0
  });
}
Buttonthuoc = () => {
  this.setState({
    change : 2
  });
}

tuhuy = () => {
  let d = new Date();
  var ngay = d.getDate();
  if(this.state.data)
  {
    return this.state.data.map((value , key) => {
        if(value.trangthai === 2)
        {
          if(value.ngaydatphong.slice(0,2) > ngay)
          {
              var info = {};
              info.key = value.keys;
              info.trangthai = 1;
              info.sdt = "";
              info.tenkhach = "";
              info.diachi = "";
              info.cmnd = "";
              info.ngaysinh = "";
              info.gioitinh = "";
              info.ngaydat ="";
              // this.props.Thaydoigiatri(info);
          }
        }
    })
  }
}


 render() {
   this.tuhuy();
   console.log(this.state.change);
   return (
    <div id="tab1" className="tab_content"> 
     <div id="loc-phong">
        <button className="btn btn-info" onClick={()=>this.Buttonthuocsansan()}>Sẵn sàng</button>
        <button className="btn btn-info" onClick={()=>this.Buttonthuoc()}>Booking</button>
        <button className="btn btn-info" onClick={()=>this.Buttondaconguoithue()}>Đang thuê</button>
    </div>
    {this.showdata()}
    </div>
   )
 }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Giatrigoc: state.Thaydoitrangthai
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    Thaydoigiatri: (getitem) => {
      dispatch({type:'THAYDOI',getitem})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(thuephongtructiep));