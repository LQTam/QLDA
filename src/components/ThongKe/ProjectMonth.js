import React, {Component} from 'react';

class ProjectMonth extends Component {
    render() {
        return (
            <>
                {/* Column */}
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <div>
                                    <h5 className="card-title">Dự án của tháng</h5>
                                </div>
                                <div className="ml-auto">
                                    <select className="custom-select b-0">
                                        <option selected value={1}>Tháng 1</option>
                                        <option value={2}>Tháng 2</option>
                                        <option value={3}>Tháng 3</option>
                                        <option value={4}>Tháng 4</option>
                                        <option value={5}>Tháng 5</option>
                                        <option value={6}>Tháng 6</option>
                                        <option value={7}>Tháng 7</option>
                                        <option value={8}>Tháng 8</option>
                                        <option value={9}>Tháng 9</option>
                                        <option value={10}>Tháng 10</option>
                                        <option value={11}>Tháng 11</option>
                                        <option value={12}>Tháng 12</option>
                                    </select>
                                </div>
                            </div>
                            <div className="table-responsive m-t-20 no-wrap">
                                <table className="table vm no-th-brd pro-of-month">
                                    <thead>
                                    <tr>
                                        <th colSpan={2}>Assigned</th>
                                        <th>Name</th>
                                        <th>Budget</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td style={{width: '50px'}}><span className="round">S</span></td>
                                        <td>
                                            <h6>Sunil Joshi</h6><small className="text-muted">Web Designer</small></td>
                                        <td>Elite Admin</td>
                                        <td>$3.9K</td>
                                    </tr>
                                    <tr className="active">
                                        <td><span className="round"><img src="../assets/images/users/2.jpg" alt="user" width={50} /></span></td>
                                        <td>
                                            <h6>Andrew</h6><small className="text-muted">Project Manager</small></td>
                                        <td>Real Homes</td>
                                        <td>$23.9K</td>
                                    </tr>
                                    <tr>
                                        <td><span className="round round-success">B</span></td>
                                        <td>
                                            <h6>Bhavesh patel</h6><small className="text-muted">Developer</small></td>
                                        <td>MedicalPro Theme</td>
                                        <td>$12.9K</td>
                                    </tr>
                                    <tr>
                                        <td><span className="round round-primary">N</span></td>
                                        <td>
                                            <h6>Nirav Joshi</h6><small className="text-muted">Frontend Eng</small></td>
                                        <td>Elite Admin</td>
                                        <td>$10.9K</td>
                                    </tr>
                                    <tr>
                                        <td><span className="round round-warning">M</span></td>
                                        <td>
                                            <h6>Micheal Doe</h6><small className="text-muted">Content Writer</small></td>
                                        <td>Helping Hands</td>
                                        <td>$12.9K</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProjectMonth;