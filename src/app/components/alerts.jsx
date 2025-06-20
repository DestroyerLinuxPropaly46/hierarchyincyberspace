'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

export default function alert() {
    return (    
        <div className='error'>
            <div className='d'>
                <h3><FontAwesomeIcon icon={faWarning} className='icon'></FontAwesomeIcon> Under Development..</h3>
            </div>
        </div>
    )
}