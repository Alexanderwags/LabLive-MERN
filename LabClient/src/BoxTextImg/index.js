import React from 'react'
import Grid from '@material-ui/core/Grid'


function BoxTextImg({children,text}) {
    return (
      <>
        <Grid container xs={12}>
          <Grid container xs={12} sm={6}>
            {children}
          </Grid>
          <Grid container xs={12} sm={6}>
              <h1>{text}</h1>
          </Grid>
        </Grid>
      </>
    );
}

export default BoxTextImg
