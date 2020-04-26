import React from 'react'
import Grid from '@material-ui/core/Grid'


function BoxTextImg({children,children2}) {
    return (
      <>
        <Grid container xs={12}>
          <Grid container xs={12} sm={6}>
            {children}
          </Grid>
          <Grid container xs={12} sm={6}>
            {children2}
          </Grid>
        </Grid>
      </>
    );
}

export default BoxTextImg
