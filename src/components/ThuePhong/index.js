import React, { Component } from 'react';
import Thuephongtructiep from './thephongtructiep';
import Thuephongdattruoc from './thuephongdattruoc';
import Themkhachhang from './themkhachhang';
import * as $ from 'jquery';
class ThuePhong extends Component {
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

            // $("#modalThemBangTay").click(function () {
            //     $("#myModalThemBangTay-Content").modal();
            // });
            // $("#modalThemBangAI").click(function () {
            //     $("#myModalThemBangAI-Content").modal();
            // });
        });
    }
    

    render() {
        return (
            <div className="container-fluid">
                {/* ============================================================== */}
                {/* Bread crumb and right sidebar toggle */}
                {/* ============================================================== */}
                <div className="row page-titles mt-2">
                    <div className="col-md-5 align-self-center">
                        <br />
                        <h3 className="text-themecolor">Thuê phòng</h3>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                            <li className="breadcrumb-item active">Thuê phòng</li>
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
                        <li className="active" rel="tab1"> Thuê phòng trực tiếp</li>
                        <li rel="tab2"> Thuê phòng đặt trước</li>
                        <li rel="tab3" className="dropbtn"> Thêm khách hàng</li>
                    </ul>
                </div>
                <div className="tab_container pt-5">
                    <Thuephongtructiep />
                    <Thuephongdattruoc />
                    <Themkhachhang />
                </div> {/* .tab_container */}
            </div>
        );
    }
}

export default ThuePhong;