import React, {Component} from 'react';

class AdminNotify extends Component {
    render() {
        return (
            <>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Thông báo quản trị</h5>
                            <ul className="feeds">
                                <li>
                                    <div className="bg-light-info"><i className="fa fa-bell-o" /></div> Bạn có 4 nhiệm vụ đang chờ xử lý. <span className="text-muted">Ngay bây giờ</span></li>
                                <li>
                                    <div className="bg-light-success"><i className="fa fa-server" /></div> Máy chủ #1 bị quá tải.<span className="text-muted">2 giờ trước</span></li>
                                <li>
                                    <div className="bg-light-warning"><i className="fa fa-shopping-cart" /></div> Đơn hàng mới nhận được.<span className="text-muted">31 Tháng 5</span></li>
                                <li>
                                    <div className="bg-light-danger"><i className="fa fa-user" /></div> Người dùng mới đăng ký.<span className="text-muted">30 Tháng 5</span></li>
                                <li>
                                    <div className="bg-light-inverse"><i className="fa fa-bell-o" /></div> Phiên bản mới vừa xuất hiện. <span className="text-muted">27 Tháng 5</span></li>
                                <li>
                                    <div className="bg-light-info"><i className="fa fa-bell-o" /></div> Bạn có 4 nhiệm vụ đang chờ xử lý. <span className="text-muted">Ngay bây giờ</span></li>
                                <li>
                                    <div className="bg-light-danger"><i className="fa fa-user" /></div> Người dùng mới đăng ký.<span className="text-muted">30 Tháng 5</span></li>
                                <li>
                                    <div className="bg-light-inverse"><i className="fa fa-bell-o" /></div> Phiên bản mới vừa xuất hiện. <span className="text-muted">27 Tháng 5</span></li>
                                <li>
                                    <div className="bg-light-primary"><i className="fa fa-cog" /></div>Bạn có 4 nhiệm vụ đang chờ xử lý. <span className="text-muted">27 Tháng 5</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AdminNotify;