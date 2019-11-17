import React, { Component } from 'react';
import TableDataThuephongdattruoc from './TableDatathuephongdattruoc';

export default (props)=> (
    <div>
        <div>
            {
                props.trave.map((value, key) => {
                    if (value.trangthai === 0) {
                        return <TableDataThuephongdattruoc
                            image={value.image}
                            maphong={value.maphong}
                            gia={value.gia}
                            tenkhach={value.tenkhach}
                            sdt={value.sdt}
                            ngaysinh={value.ngaysinh}
                            trangthai={value.trangthai}
                        />;
                    }
                })
            }
        </div>
    </div>
);;