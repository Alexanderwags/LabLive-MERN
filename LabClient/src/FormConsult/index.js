import React from 'react'
import cn from 'classnames'
import Styles from './styles.module.scss'
import { FormControl,InputLabel,Input,FormHelperText,Button} from "@material-ui/core";

function FormConsult({info="",info2=""}) {
    return (
      <>
        <h1 className={cn(Styles.w90,Styles.firsth1)}>{info}</h1>
        <p  className={cn(Styles.w90,Styles.secondp)}>{info2}</p>
        
        <FormControl className={Styles.w90}>
          <InputLabel htmlFor="na">Nombre y Apellidos</InputLabel>
          <Input id="na" type="text" aria-describedby="nom-helper" />
          <FormHelperText id="nom-helper">
            Ingresa Nombre y Apellidos (completos)
          </FormHelperText>
        </FormControl>
        <FormControl  className={Styles.w90}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="text" aria-describedby="email-helper" />
          <FormHelperText id="email-helper">email personal </FormHelperText>
        </FormControl>
        <FormControl className={Styles.w90}>
          <InputLabel htmlFor="tel">Telefono</InputLabel>
          <Input id="tel" type="number" aria-describedby="tel-helper" />
          <FormHelperText id="tel-helper">
            Entre 8 y 16 caracteres
          </FormHelperText>
        </FormControl>
        <FormControl className={Styles.w90}>
          <InputLabel htmlFor="as">Asunto</InputLabel>
          <Input id="as" type="textarea" aria-describedby="asunto-helper" />
          <FormHelperText id="asunto-helper">
            Entre 8 y 16 caracteres
          </FormHelperText>
        </FormControl>
        <Button variant="contained" color="primary"className={Styles.w90}>
          Enviar
        </Button>
      </>
    );
}

export default FormConsult
