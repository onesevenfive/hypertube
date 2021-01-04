import {
  Button,
  FormGroup,
  Grid,
  makeStyles,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    padding: '2rem 1rem',
    minWidth: '30rem',
  },
  Form: {
    width: '100%',
  },
  Input: {
    marginBottom: 10,
  },
  padding: {
    padding: '5px 10px',
  },
  Button: {
    width: '6rem',
  },
  invert: {
    filter: 'invert(1)',
  },
});

const Register = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirm: '',
  });
  const classes = useStyles();
  const history = useHistory();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Login] handleSubmit', inputs);
  };

  const handleLogin = () => {
    console.log('[Login] handleLogin');
    history.push('/login');
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <FormGroup className={classes.Form}>
        <TextField
          fullWidth
          name="email"
          type="email"
          placeholder="Enter email"
          value={inputs.email}
          onChange={handleInput}
          className={classes.Input}
          size="small"
        />
        <TextField
          fullWidth
          name="password"
          type="password"
          placeholder="Enter password"
          value={inputs.password}
          onChange={handleInput}
          className={classes.Input}
          size="small"
        />
        <TextField
          fullWidth
          name="confirm"
          type="password"
          placeholder="Confirm password"
          value={inputs.confirm}
          onChange={handleInput}
          className={classes.Input}
          size="small"
        />
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Register
        </Button>
        <Button variant="text" onClick={handleLogin}>
          Login
        </Button>
      </FormGroup>
    </Grid>
  );
};

export default Register;