import React from 'react'
import Infojson from '../information/info.json'
import Information from '../information'
import Info from '../Info'
import ImgText from '../ImgText'
import GoogleMapsDir from '../GoogleMapsDir'
import FormConsult from '../FormConsult'
import Grid from '@material-ui/core/Grid'

function Home() {
      
    return (
      <>
        <ImgText/>
         
      

        <Info info="Lablive con más de una década de experiencia y un liderazgo indiscutido en el mercado. " />
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
        <Info info="Contactanos"/>
        <Grid container xs={12}>
          <Grid
            container
            xs={12}
            sm={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <FormConsult
              info="Tienes Dudas"
              info2="Buscamos ayudarle en cualquier momento, si necesita información déjenos sus datos"
            />
          </Grid>
          <Grid container xs={12} sm={6}>
            <GoogleMapsDir />
          </Grid>
        </Grid>
      </>
    );
}

export default Home
