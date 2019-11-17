import React, {Component} from 'react';

class Bdtk extends Component {
    render() {
        return (
            <>
                {/* Column */}
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex no-block">
                                <div>
                                    <h5 className="card-title m-b-0">Biểu đồ thống kê</h5>
                                </div>
                                <div className="ml-auto">
                                    <ul className="list-inline text-center font-12">
                                        <li><i className="fa fa-circle text-success" /> Trang A</li>
                                        <li><i className="fa fa-circle text-info" /> Trang B</li>
                                        <li><i className="fa fa-circle text-primary" /> Trang C</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="sales-chart" style={{height: '355px'}} />
                        </div>
                    </div>
                </div>
                </>
        );
    }
}

export default Bdtk;