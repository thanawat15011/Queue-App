
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function TheCheckbox() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
            <label>{String(value)}</label>
        </div>
    );
}
        