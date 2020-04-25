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
            {[
              "Servicios",
              "¿Quienes Somos?",
              "Contactanos",
              "Resultados en linea",
            ].map((text) => (
              <ButtonBox text={text} />
            ))}
          </ImgText>

        <Info info="BioNet con más de una década de experiencia y un liderazgo indiscutido en el mercado. La filosofía de trabajo de nuestros laboratorios y tomas de muestras se basa en cuatro factores claves de servicio, que son: Prestigio, Calidad, Ubicación y Precio." />
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
