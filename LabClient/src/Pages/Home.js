import React from 'react'
import Infojson from '../information/info.json'
import Information from '../information'
import Info from '../Info'
import ImgText from '../ImgText'
import ButtonBox from '../ButtonBox'
function Home() {
      
    return (
      <div>
        <ImgText>
        {
          ["Servicios", "¿Quienes Somos?", "Contactanos","Resultados en linea"].map( text => (<ButtonBox text={text}/>) )
        }
        </ImgText>
        <Info />
        {Infojson.map((info) => {
          return (
            <Information
              title={info.title}
              description={info.description}
              key={info.id}
              cont={info.id}
            />
          );
        })}
        <Info />
      </div>
    );
}

export default Home
