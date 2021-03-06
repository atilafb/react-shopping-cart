import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm({ onChange, formValues, errors }) {

  const {
    cardName = '',
    cardNumber = '',
    expiryDate = '',
    cvvNumber = ''
  } = formValues

  const handleChangeCardName = (event) => {
    onChange('cardName', event.target.value)
  }

  const handleChangeCardNumber = (event) => {
    onChange('cardNumber', event.target.value)
  }

  const handleChangeExpiryDate = (event) => {
    onChange('expiryDate', event.target.value)
  }

  const handleChangeCvvNumber = (event) => {
    onChange('cvvNumber', event.target.value)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={cardName}
            onChange={handleChangeCardName}
            error={Boolean(errors.cardName)}
            helperText={errors.cardName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={cardNumber}
            onChange={handleChangeCardNumber}
            error={Boolean(errors.cardNumber)}
            helperText={errors.cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={expiryDate}
            onChange={handleChangeExpiryDate}
            error={Boolean(errors.expiryDate)}
            helperText={errors.expiryDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={cvvNumber}
            onChange={handleChangeCvvNumber}
            error={Boolean(errors.cvvNumber)}
            helperText={errors.cvvNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
