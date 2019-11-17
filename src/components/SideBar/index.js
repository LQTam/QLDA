import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as $ from 'jquery';
import { AuthUserContext } from '../Session';
import { ADMIN } from '../../constants/roles';

const SideBarBase = () => {
    return <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser
                    ? <SideBarAuth authUser={authUser} />
                    : null}
        </AuthUserContext.Consumer>
    </div>
}

const SideBarAuth = ({ authUser }) => (
    <>
        <li>
            <Link className="waves-effect waves-dark" to="/" aria-expanded="false"><i className="fa fa-telegram" /><span className="hide-menu">Thống kê</span></Link>
        </li>
        <li>
            <Link className="waves-effect waves-dark" to="/thue-phong" aria-expanded="false"><i className="fa fa-address-book" /><span className="hide-menu">Thuê phòng</span></Link>
        </li>
        <li> <Link className="waves-effect waves-dark" to="/dat-phong" aria-expanded="false"><i className="fa fa-id-card" /><span className="hide-menu">Đặt phòng</span></Link>
        </li>
        <li> <Link className="waves-effect waves-dark" to="/lap-hoa-don" aria-expanded="false"><i className="fa fa-file" /><span className="hide-menu">Lập phiếu dịch vụ</span></Link>
        </li>
        {!!authUser.roles.includes(ADMIN) && (
            <li> <Link className="waves-effect waves-dark" to="/quanly-nhanvien" aria-expanded="false"><i className="fa fa-users" /><span className="hide-menu">Quản lý nhân viên</span></Link>
            </li>
        )}
    </>
)

class Sidebar extends Component {
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
    }
    
    render() {
        return (
            <>
                <aside className="left-sidebar">
                    {/* Sidebar scroll*/}
                    <div className="scroll-sidebar">
                        {/* Sidebar navigation*/}
                        <nav className="sidebar-nav">
                            <ul id="sidebarnav">
                                <SideBarBase />
                            </ul>
                        </nav>
                        {/* End Sidebar navigation */}
                    </div>
                    {/* End Sidebar scroll*/}
                </aside>
            </>
        );
    }
}

export default Sidebar;