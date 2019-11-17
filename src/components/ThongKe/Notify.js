import React, {Component} from 'react';

class Notify extends Component {
    render() {
        return (
            <>
                {/* Start Notification */}
                <div className="col-lg-6 col-md-12">
                    <div className="card card-body mailbox">
                        <h5 className="card-title">Thông báo</h5>
                        <div className="message-center ps ps--theme_default ps--active-y" data-ps-id="a045fe3c-cb6e-028e-3a70-8d6ff0d7f6bd">
                            {/* Message */}
                            <a href="/">
                                <div className="btn btn-danger btn-circle"><i className="fa fa-link" /></div>
                                <div className="mail-contnet">
                                    <h5>Khởi chạy quản trị</h5> <span className="mail-desc">Chỉ cần gặp quản trị viên mới của tôi!</span> <span className="time">9:30 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a href="/">
                                <div className="btn btn-success btn-circle"><i className="fa fa-calendar-check-o" /></div>
                                <div className="mail-contnet">
                                    <h5>Sự kiện hôm nay</h5> <span className="mail-desc">Nhắc nhở các sự kiện</span> <span className="time">9:10 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a href="/">
                                <div className="btn btn-info btn-circle"><i className="fa fa-cog" /></div>
                                <div className="mail-contnet">
                                    <h5>Cài đặt</h5> <span className="mail-desc">Cài đặt theo ý muốn của bạn</span> <span className="time">9:08 AM</span> </div>
                            </a>
                            {/* Message */}
                        </div>
                    </div>
                </div>
                {/* End Notification */}
            </>
        );
    }
}

export default Notify;