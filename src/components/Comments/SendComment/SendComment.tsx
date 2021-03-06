import React from 'react';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    margin: '1rem 0',
    minWidth: '30rem',
  },
  Form: {
    width: '100%',
  },
  margin: {
    marginBottom: 10,
  },
});

const SendComment = () => {
  const classes = useStyles();
  const [comment, setComment] = React.useState('');
  const { t } = useTranslation();

  const sendForm = () => {
    if (!comment.length) return;
    console.log(comment);
    setComment('');
  };

  const handleInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey && e.key === 'Enter') sendForm();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendForm();
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.Form}>
        <TextField
          fullWidth
          multiline
          name="comment"
          type="textarea"
          placeholder={t`Leave a comment!`}
          className={classes.margin}
          size="small"
          onChange={(e) => setComment(e.currentTarget.value)}
          onKeyPress={handleInput}
          value={comment}
        />
        <Button type="submit" className={classes.margin} variant="contained">
          {t`Send`}
        </Button>
      </form>
    </Grid>
  );
};

export default SendComment;
