
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function TheAvatar() {
    return (
        <div className="flex flex-wrap gap-5">
            <div className="flex-auto">
                <h5>Badge</h5>
                <Avatar label="U" size="xlarge" className="p-overlay-badge" style={{ backgroundColor: '#4caf4f', color: '#ffffff' }}>
                    <Badge value="4" />
                </Avatar>
            </div>
        </div>
    )
}
        