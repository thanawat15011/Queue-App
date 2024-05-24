
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function TheAlert() {
    const msgs = useRef(null);

    useMountEffect(() => {
        msgs.current.show(
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }
        );
    }); 

    return (
        <div className="card flex justify-content-center">
            <Messages ref={msgs} />
        </div>
    )
}
        