import React, { Component } from 'react';
import BDTK from './BDTK';
import Guest from './Guest';
import ProjectMonth from './ProjectMonth';
import Notify from './Notify';
import AdminNotify from './AdminNotify';
import Idea from "./Idea";
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
class ThongKe extends Component {
    render() {
        return (
            <div className="container-fluid">
                {/* ============================================================== */}
                {/* Bread crumb and right sidebar toggle */}
                {/* ============================================================== */}
                <br />
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Thống kê</h3>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                            <li className="breadcrumb-item active">Thống kê</li>
                        </ol>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* End Bread crumb and right sidebar toggle */}
                {/* ============================================================== */}
                {/* Sales Chart and browser state*/}
                {/* ============================================================== */}
                <div className="row">
                    <BDTK />
                    <Guest />
                </div>
                {/* ============================================================== */}
                {/* End Sales Chart */}
                {/* ============================================================== */}
                {/* Projects of the Month */}
                {/* ============================================================== */}
                <div className="row">
                    <ProjectMonth />
                    <Idea />
                </div>
                {/* ============================================================== */}
                {/* End Projects of the Month */}
                {/* ============================================================== */}
                {/* Notification And Feeds */}
                {/* ============================================================== */}
                <div className="row">
                    <Notify />
                    {/* Start Feeds */}
                    <AdminNotify />
                    {/* End Feeds */}
                </div>
                {/* ============================================================== */}
                {/* End Notification And Feeds */}
                {/* ============================================================== */}
                {/* End Page Content */}
                {/* ============================================================== */}
            </div>
        );
    }
}

const condition = authUser => 
authUser;

export default compose(
  withAuthorization(condition),
  withFirebase,
)(ThongKe);