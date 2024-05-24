
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function TheSelectButton() {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    <div className="card flex justify-content-center">
        <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
    </div>
}
        