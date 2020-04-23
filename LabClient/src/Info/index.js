import React from 'react'
import Styles from './styles.module.scss';
function Info({color="white",info}) {
    return (
        <div className={Styles.infodet}>
            {info}
        </div>
    )
}

export default Info
