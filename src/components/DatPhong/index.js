import React, { Component } from 'react'
import Phong from './Phong'
import { withFirebase } from '../Firebase'
import { connect } from 'react-redux'
import * as $ from 'jquery'
const mapStateToProps = state => {
  return {
    datPhongReducer: state.datPhongReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Thaydoutrangthau: () => {
      dispatch({ type: 'CHANGER_INFO' })
    }
  }
}
class DatPhong extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectrom: '',
      tenkhach: '',
      sdt: '',
      cmnd: '',
      ngaydatphong: '',
      data: [],
      search: ''
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
        datas.forEach(element => {
          const ids = element.key;
          const trangthai = element.val().trangthai;
          const maphong = element.val().maphong;
          const image = element.val().image;
          const gia = element.val().gia;
          const tenkhach = element.val().tenkhach;
          const diachi = element.val().diachi;
          const sdt = element.val().sdt;
          const cmnd = element.val().cmnd;
          const ngaydatphong = element.val().ngaydatphong;
          Mang.push({
            trangthai: trangthai,
            maphong: maphong,
            image: image,
            gia: gia,
            ids: ids,
            tenkhach: tenkhach,
            diachi: diachi,
            sdt: sdt,
            cmnd: cmnd,
            ngaydatphong: ngaydatphong,
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

  showdata = () => {
    if (this.state.data) {
      return this.state.data.map((value, key) => {
        if (value.trangthai === 2) {
          return <option key={key} value={value.maphong}>{value.maphong}*{value.ids}</option>
        }
      })
    }
  }

  resetState = () => {
    this.setState({
      selectrom: '',
      tenkhach: '',
      sdt: '',
      cmnd: '',
      ngayden: '',
      ngaydi: '',
    })
  }

  isSubmit = event => {
    event.preventDefault();
    console.log(event.target.search);
  }
  showRoom = rooms => {
    var result = [];
    result = rooms.map((room, key) => {
      if (room.trangthai === 2) {
        return <Phong key={key} image={room.image}
          maphong={room.maphong}
          gia={room.gia}
          uniqueKey={room.ids}
          tenkhach={room.tenkhach}
          diachi={room.diachi}
          sdt={room.sdt}
          cmnd={room.cmnd}
        />
      }
    });
    return result;
  }

  render() {
    var result = [];
    this.state.data.map((room, key) => {
      if (room.trangthai === 2) {
        if (room.maphong.indexOf(this.state.search) !== -1) {
          result.push(room);
        }
        else if (room.tenkhach.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1) {
          result.push(room);
        }
        else if (room.sdt.indexOf(this.state.search) !== -1) {
          result.push(room);
        }
        else if (room.cmnd.indexOf(this.state.search) !== -1) {
          result.push(room);
        }
        else if (room.ngaydatphong.indexOf(this.state.search) !== -1) {
          result.push(room);
        }
      }
    })
    return (
      <div className="container-fluid">
        {/* ============================================================== */}
        {/* Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        <div className="row page-titles mt-2">
          <div className="col-md-5 align-self-center">
            <br />
            <h3 className="text-themecolor">Đặt phòng</h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
              <li className="breadcrumb-item active">Đặt phòng</li>
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
            <li className="active" rel="tab1"> Chọn phòng và tiến hành đặt phòng</li>
          </ul>
        </div>

        <div className="tab_container">
          <div id="tab1" className="tab_content">
            <form action='#' onSubmit={(event) => this.isSubmit(event)} id="loc-phong-dat-phong">
              <label>Tên phòng:</label>
              <select name="search" onChange={(event) => this.IsChange(event)}>
                <option value={'A'}>Mời bạn chọn</option>
                {this.showdata()}
              </select>
              <label>Họ tên:</label>
              <input type="text" onChange={(event) => this.IsChange(event)} name="search" className="form-control" />
              <label>Số điện thoại:</label>
              <input type="number  " onChange={(event) => this.IsChange(event)} name="search" className="form-control" />
              <label>Số cmnd:</label>
              <input type="number" onChange={(event) => this.IsChange(event)} name="search" className="form-control" />
              <label className="clean">Ngay dat phong</label>
              <div className="display">
                <input type="date" onChange={(event) => this.IsChange(event)} name="search" className="form-control " id="usr" />
              </div>
              <button type="submit" className="btn btn-success" >Tim kiem</button>
              <button type='reset' className='btn btn-success' onClick={() => this.resetState()}>Reset</button>
              <div id="loc-phong">
                <button className="btn btn-info">Tất Cả</button>
                <button className="btn btn-info">Lọc theo tiêu chí</button>
                <button className="btn btn-info">Sẵn Sàng</button>
              </div>
            </form>
            {this.showRoom(result)}
          </div>{/* #tab1 */}
          {/* Modal */}
          {/* <ModalDatPhong /> */}
          {/* ============================================================== */}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(DatPhong));