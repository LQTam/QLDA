import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from '../../Firebase';
class ThemmoikhongAi extends Component {
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


    showoption = () => {
        return this.state.data.map((value, key) => {
            if (value.trangthai === 1) {
                return <option key={key} value={value.keys}>{value.maphong}*{value.keys}</option>
            }
        })
    }


    ButtonPushData = (event) => {
        event.preventDefault();
        let d = new Date();
        let nam = d.getFullYear();
        let thang = d.getMonth() + 1;
        let ngay = d.getDate();
        var info = {};
        info.tenkhach = this.state.Username;
        info.ngaysinh = this.state.dateofbirt;
        info.diachi = this.state.address;
        info.gioitinh = this.state.sex;
        info.cmnd = this.state.cmnd;
        info.sdt = this.state.Sđt;
        info.maphong = this.state.NameRoom;
        info.ngaydat = nam + "-" + thang + "-" + ngay;

        info.trangthai = 2;
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
            this.props.firebase.customer(info.maphong).update({
                cmnd : info.cmnd,
                diachi : info.diachi,
                gioitinh : info.gioitinh,
                ngaydatphong : info.ngaydat,
                ngaysinh : info.ngaysinh,
                sdt : info.sdt,
                tenkhach : info.tenkhach,
                trangthai : info.trangthai,
            })

            document.getElementById('closeAddCustModal').click();
            // this.props.Thongtinduocguile(info);
            // this.props.trangthaithaydoi();
            this.props.Dulieukemtheo('thêm mới   ' + this.state.Username + '    thành công');
        }


    }


    render() {
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" style={{ marginTop: '5px' }}>Nhập thông tin khách hàng</h3>
                    <button type="button" data-dismiss='modal' id='closeAddCustModal' className="close"  aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form action="#" onSubmit={(event) => this.ButtonPushData(event)}>
                        <label htmlFor="fname">Họ Và Tên:</label>
                        <input type="text" id="name" name="Username" onChange={(event) => this.IsChange(event)} placeholder="Nhập họ và tên..." />
                        <label htmlFor="lname">Ngày Sinh:</label>
                        <input type="date" id="dateofbirt" name="dateofbirt" onChange={(event) => this.IsChange(event)} />
                        <label htmlFor="address">Địa Chỉ:</label>
                        <input type="text" id="address" name="address" placeholder="Nhập địa chỉ..." onChange={(event) => this.IsChange(event)} />
                        

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
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-info" >Thêm khách hàng</button>
                            <button type="reset"  className="btn btn-info">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        );
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
            dispatch({ type: 'PUSHDATA', getitem })
        },

        Dulieukemtheo: (gettion) => {
            dispatch({ type: 'GET_DATA', gettion })
        },
        trangthaithaydoi: () => {
            dispatch({ type: 'CHANGER_INFO' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(ThemmoikhongAi))