import React from 'react'
import Styles from './styles.module.scss';
function Info({color="white",info}) {
    return (
      <div className={Styles.infodet}>
        <div className={Styles.text}>
          <h1>{info}</h1>
        </div>
      </div>
    );
}

export default Info
