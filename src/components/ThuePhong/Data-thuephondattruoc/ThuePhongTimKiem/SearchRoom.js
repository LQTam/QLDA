import React, { Component } from 'react';

class SearchRoom extends Component {

    constructor(props){
        super(props);
        this.state = {
            tenkhacphong : ''
        };
    }

    IsChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
        this.props.Buttonluuthongtins(this.state.tenkhacphong);
    }
    
    showoption = () => {
        return this.props.dulieu.map((value) => {
            if(value.trangthai === 0)
            {
                return <option>{value.maphong}</option>
            }
            return 0;
        })
    }

    render() {
        return (
            <div>
                    <label>Tên phòng:</label>
                        <select  multiple className="form-control"  onChange={(event)=>this.IsChange(event)}  name="tenkhacphong" id="exampleFormControlSelect2">
                            {this.showoption()}
                        </select>

                    <label>Tên người đặt phòng:</label>
                    <input   type="text"  onChange={(event)=>this.IsChange(event)}  name="tenkhacphong" />
                    <label>Số điện thoại:</label>
                    <input type="number"  onChange={(event)=>this.IsChange(event)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="tenkhacphong"   placeholder="Phone number"></input>
                    <label>Ngày sinh:</label>
                    <input   type="date"  onChange={(event)=>this.IsChange(event)}  name="tenkhacphong"  />

                    <div id="tim-phong-dat-truoc">
                        <button className="btn btn-info" onClick={(dl)=>this.props.Buttonluuthongtins(this.state.tenkhacphong)}>Tìm phòng</button>
                    </div>


                    <div id="ket-qua-tim-phong-dat-truoc">

                
                    
                    </div>
            </div>
        );
    }
}

export default SearchRoom;
