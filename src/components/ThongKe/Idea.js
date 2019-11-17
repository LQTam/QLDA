import React, {Component} from 'react';

class Idea extends Component {
    render() {
        return (
            <>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="up-img" style={{backgroundImage: 'url(./assets/images/big/img1.jpg)'}} />
                        <div className="card-body">
                            <h5 className=" card-title">Phát triển kinh doanh</h5>
                            <span className="label label-info label-rounded">Công nghệ</span>
                            <p className="m-b-0 m-t-20" />
                            <div className="d-flex m-t-20">
                                <a className="link" href="/">Xem thêm</a>
                                <div className="ml-auto align-self-center">
                                    <a href="/" className="link m-r-10"><i className="fa fa-heart-o" /></a>
                                    <a href="/" className="link m-r-10"><i className="fa fa-share-alt" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Idea;