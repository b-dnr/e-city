import React from 'react'
import { Alert } from 'reactstrap'

function Toaster({isOpen, children, ...props}) {
    if(!isOpen)return null;
    return (
        <Alert className="myToaster" {...props}>
            {children}
        </Alert>
    )
}

export default Toaster
