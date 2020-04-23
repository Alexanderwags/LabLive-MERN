import React from 'react'
import Styles from './styles.module.scss'


function ImgTetx({text,img,children}) {
    return (
      <div className={Styles.container}>
        <div className={Styles.text}>
          <div className={Styles.box}>
            <h1>Lab Live</h1>
            <h3>Siempre Pensando en ti</h3>
            <p>Horario de Atención al Público: 24 Horas</p>
          </div>
        </div>
        <div className={Styles.url}>
            {children}
        </div>
      </div>
    );
}


export default ImgTetx

