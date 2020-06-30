import React, {useState} from 'react'
import { Container, Typography, Paper, TextField, Button } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) => ({
  root: {
    backgroundColor: '#E5E5E5',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: '40px 0px 0px 34px',
    color: '#3D5170'
  },
  form: {
    padding: '48px 34px 28px',
  },
  input: {
    paddingBottom: '28px'
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end'
  },


}))

function SignIn() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  console.log(email,password);
  const classes = useStyles()

  const onChangeHandler = (event) => {
      const { name, value } = event.currentTarget;
      if (name === 'userEmail') {
        setEmail(value);
      } else if (name === 'userPassword') {
        setPassword(value);
      }

  };

  return (
    <div className={classes.root}>
      <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper}>
          <Typography className={classes.text} component='h1' variant='h5'>
            Авторизация
          </Typography>
          <form className={classes.form}>
            <TextField
              className={classes.input}
              color='primary'
              variant="outlined"
              fullWidth
              value={email}
              onChange={event => onChangeHandler(event)}
              id="email"
              label="Email"
              name="userEmail"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              color='primary'
              value={password}
              className={classes.input}
              fullWidth
              onChange={event => onChangeHandler(event)}
              name="userPassword"
              label="Пароль"
              type="text"
              id="password"
              autoComplete="current-password"
            />
            <div className={classes.button}>
              <Button
                variant='contained'
                color='primary'
                className={classes.palette}
              >Войти</Button>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  )
}
export default SignIn;