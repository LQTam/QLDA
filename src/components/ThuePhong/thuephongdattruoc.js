import React, { Component } from "react";
import Datathuephongdattruoc from "./Data-thuephondattruoc/Datathuephongdattruoc";
import SearchRoom from "./Data-thuephondattruoc/ThuePhongTimKiem/SearchRoom";
import { withFirebase } from "../Firebase";
class thuephongdattruoc extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Search: ''
    };
  }
  componentWillMount() {
    this.props.firebase.customers()
      .on('value', (datas) => {
        var Mang = [];
        datas.forEach(element => {
          const image = element.val().image;
          const loaiphong = element.val().loaiphong;
          const maphong = element.val().maphong;
          const ngaydatphong = element.val().ngaydatphong;
          const ngaytraphong = element.val().ngaytraphong;
          const trangthai = element.val().trangthai;
          const gia = element.val().gia;
          const tenkhach = element.val().tenkhach;
          const sdt = element.val().sdt;
          const ngaysinh = element.val().ngaysinh;
          Mang.push({
            image: image,
            loaiphong: loaiphong,
            maphong: maphong,
            ngaydatphong: ngaydatphong,
            ngaytraphong: ngaytraphong,
            trangthai: trangthai,
            gia: gia,
            tenkhach: tenkhach,
            sdt: sdt,
            ngaysinh: ngaysinh
          })
        });
        this.setState({
          data: Mang
        });
      })
  }

  Buttonluuthongtin = (dl) => {
    this.setState({
      Search: dl
    });
  }


  render() {
    var ketqua = [];
    this.state.data.forEach((element) => {
      if (element.image) {
        if (element.maphong.indexOf(this.state.Search) !== -1) {
          ketqua.push(element);
        }
        else if (element.tenkhach.indexOf(this.state.Search) !== -1) {
          ketqua.push(element);
        }
        else if (element.sdt.indexOf(this.state.Search) !== -1) {
          ketqua.push(element);
        }
        else if (element.ngaysinh.indexOf(this.state.Search) !== -1) {
          ketqua.push(element);
        }
      }
    });
    return (
      <div id="tab2" className="tab_content">
        <h3 style={{ textAlign: "center" }}>
          Tra cứu thông tin phòng đã sử dụng
        </h3>
        <div id="timthongtinphong">
          <SearchRoom dulieu={this.state.data} Buttonluuthongtins={(dl) => this.Buttonluuthongtin(dl)} />
          <Datathuephongdattruoc trave={ketqua} />
        </div>
      </div>
    );
  }
}

export default withFirebase(thuephongdattruoc);
