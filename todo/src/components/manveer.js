import React, { useState } from 'react'
import shid from './shid';
export default function manveer() {
    const [data, setData] = useState('sahid');

    return (
        <div>
            manveer

<shid setData={setData} data={data}/>
        </div>
    )
}
