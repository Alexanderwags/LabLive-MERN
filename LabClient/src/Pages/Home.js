import React from 'react'
import Infojson from '../information/info.json'
import Information from '../information'
import Info from '../Info'
import ImgText from '../ImgText'
function Home() {
      
    return (
      <div>
        <ImgText/>
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
