import React from 'react'
import cn from 'classnames'
import Styles from './styles.module.scss'
import fondo from '../assets/img/portada.jpg'

function ImgTetx({text,img}) {
    return (
      <div className={cn(Styles.container)} style={{backgroundImage: `url(${fondo})`}}>
        <div className={Styles.text}>
          <div className={Styles.box}>
            

            <h1>Lab Live</h1>
            <h3>Siempre Pensando en ti</h3>
            <p>Horario de Atención al Público: 24 Horas</p>
          </div>
        </div>
     
      </div>
    );
}


export default ImgTetx

