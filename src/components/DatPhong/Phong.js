import React from 'react';
import ModalDatPhong from './ModalDatPhong';

export default props => {
    const { image, maphong, gia, uniqueKey, tenkhach, diachi, sdt, cmnd } = props;
    return (
        <div>
            <div id="phong">
                <img src={image} alt="khach san" />
                <h2>{maphong}</h2>
                <h4>{gia}</h4>
                <h5 style={{ color: "orange" }}>Booking</h5>
                {/* <input type="button" name="thuephong" defaultValue="Detail" /> */}
                <button type="button"
                    className="fa fa-address-card-o btn btn-secondary"
                    data-toggle="modal"
                    data-target={"#" + uniqueKey}>Detail</button>
            </div>
            <ModalDatPhong uniqueKey={uniqueKey}
                tenkhach={tenkhach}
                diachi={diachi}
                sdt={sdt}
                cmnd={cmnd}
                maphong={maphong}
            />
        </div>
    );
};