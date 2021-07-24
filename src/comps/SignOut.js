import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', left: '0',backgroundColor: '#1E1E1E', top: 0, borderBottom: '#2c2f31', zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '10px', fontWeight: '600', color: '#E4E4E4'}} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut