import React, { useState } from 'react'
import './VerifyEmail.css'
import { useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const [emailToken, setEmailToken] = useState(searchParams.get('email_token'))
    return (
        <div>
            <h1>Verify Email</h1>
            
        </div>
    )
}

export default VerifyEmail