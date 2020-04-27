import React from 'react'
import Box from '../../BoxTextImg'
import info from '../InfoPages/QuienesSomos.json'
function QuienesSomos() {
    return (
      <>
         <h1>Quienes Somos</h1>
        {
          info.map((inf) =>{
           return (
             <Box text={inf.text} key={inf.id}>
               <img src={require("../../assets/img/calidad.jpg")} alt="hg" />
             </Box>
           );
          })
        
        }
        
      </>
    );
}

export default QuienesSomos

