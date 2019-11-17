import React, {Component} from 'react';

class Guest extends Component {
    render() {
        return (
            <>
                {/* Column */}
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex m-b-30 no-block">
                                <h5 className="card-title m-b-0 align-self-center">Khách thăm</h5>
                                <div className="ml-auto">
                                    <select className="custom-select b-0">
                                        <option selected value={0}>Hôm nay</option>
                                        <option value={1}>Ngày mai</option>
                                    </select>
                                </div>
                            </div>
                            <div id="visitor" style={{height: '260px', width: '100%'}} />
                            <ul className="list-inline m-t-30 text-center font-12">
                                <li><i className="fa fa-circle text-purple" /> Máy tính bảng</li>
                                <li><i className="fa fa-circle text-success" /> Máy tính để bàn</li>
                                <li><i className="fa fa-circle text-info" /> Điện thoại</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Guest;