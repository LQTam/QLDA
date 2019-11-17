import React from 'react';

export default props => {
    const trangthai = props.trangthai === 0 ? 'đang thuê' : 'sẵn sàng';
    return (
        <div id="phong">
            <img src={props.image} alt="demo3" />
            <h2>{props.maphong}</h2>
            <h4>{props.gia}</h4>
            <h4>{props.tenkhach}</h4>
            <h4>{props.sdt}</h4>
            <h4>{props.ngaysinh}</h4>
            <h5 id="trangthaiphong-sansang">{trangthai}</h5>
            <input type="submit" name="thuephong" defaultValue="Thuê phòng" />
        </div>
    )
};