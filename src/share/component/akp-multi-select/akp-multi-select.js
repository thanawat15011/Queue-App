
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import styled from "styled-components";

export default function TheMultiSelect() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
            <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
        
    );
}
        


