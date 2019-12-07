import React, { Component } from 'react'
import TablePhieuDV from './TablePhieuDV';
import { withFirebase } from '../Firebase';
import * as $ from 'jquery';
class LapPhieuDV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      chonphong: ''
    };
  }

  componentWillMount() {
    $(document).ready(function () {
      // ẩn tất cả các thẻ div với class="tab_content".
      $(".tab_content").hide();
      // Mặc định nội dung thẻ tab đầu tiên sẽ được hiển thị
      $(".tab_content:first").show();

      $("ul.tabs li").click(function () {
        // gỡ bỏ class="active" cho tất cả các thẻ <li>
        $("ul.tabs li").removeClass("active");
        // chèn class="active" vào phần tử <li> vừa được click
        $(this).addClass("active");
        // ẩn tất cả thẻ <div> với class="tab_content"
        $(".tab_content").hide();
        //Hiển thị nội dung thẻ tab được click với hiệu ứng Fade In
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
      });
    });

    this.props.firebase.customers()
      .on('value', (datas) => {
        var Mang = [];
        var Mang2 = [];
        datas.forEach(element => {
          const id = element.key;
          const maphong = element.val().maphong;
          const dv1 = element.val().dv1;
          const dv2 = element.val().dv2;
          const dv3 = element.val().dv3;
          const trangthai = element.val().trangthai;
          const tenkhach = element.val().tenkhach;
          const ngaynhanphong = element.val().ngaynhanphong;
          const ngaytraphong = element.val().ngaytraphong;
          Mang.push({
            id: id,
            maphong: maphong,
            trangthai: trangthai,

          })
          Mang2.push({
            id: id,
            dv1: dv1,
            dv2: dv2,
            dv3: dv3,
            trangthai: trangthai,
            maphong: maphong,
            tenkhach: tenkhach,
            ngaynhanphong: ngaynhanphong,
            ngaytraphong: ngaytraphong,
          })
        });
        this.setState({
          data: Mang,
          data2: Mang2,
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
  ShowSelectOptionLapPhieuDV = () => {
    if (this.state.data) {
      return this.state.data.map((value, key) => {
        if (value.trangthai === 0) {
          return <option value={value.id}>{value.maphong}</option>
        }
      })
    }
  }
  render() {
    var ketqua = [];
    this.state.data2.forEach(element => {
      if (element.id.indexOf(this.state.chonphong) !== -1) {
        ketqua.push(element);
      }
    });
    console.log(ketqua);
    return (
      <div className="container-fluid">
        {/* ============================================================== */}
        {/* Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        <div className="row page-titles mt-2">
          <div className="col-md-5 align-self-center">
            <br />
            <h3 className="text-themecolor">Lập hóa đơn</h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="javascript:void(0)">Trang chủ</a></li>
              <li className="breadcrumb-item active">Lập phiếu dịch vụ</li>
            </ol>
          </div>
        </div>
        {/* ============================================================== */}
        {/* End Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Start Page Content */}
        {/* ============================================================== */}
        <div id="content">
          <ul className="tabs">
            <li className="active" rel="tab1"> Lập phiếu dịch vụ</li>
          </ul>
        </div>
        <div className="tab_container">
          <div id="tab1" className="tab_content">
            <div id="form-lap-phieu">
              <form action="#" id="form-input-dich-vu">
                Tên phòng:<br />
                <select name="chonphong" onChange={(event) => this.IsChange(event)} >
                  <option value>Chọn phòng...</option>
                  {this.ShowSelectOptionLapPhieuDV()}
                </select>
                Chọn dịch vụ:<br />
                {/* <div id="danh-sach-dich-vu" style={{ color: 'gray' }}>
                </div> */}
                
                <TablePhieuDV dulieudachon={ketqua} />
              </form>
            </div>
          </div>{/* #tab1 */}
        </div>
      </div>
    );
  }
}

export default withFirebase(LapPhieuDV);