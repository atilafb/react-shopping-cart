import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import COUNTRIES_STATES from '../../constants/countriesStates.json'

export default function AddressForm({ onChange, formValues, errors }) {

  const firstName = formValues.firstName || ''
  const countrySelected = formValues.country || ''
  const provinceSelected = formValues.province || ''

  const handleChangeFirstName = (event) => {
    onChange('firstName', event.target.value)
  }
  
  const handleCountryChange = (event) => {
    onChange('country', event.target.value)
  };

  const handleProvinceChange = (event) => {
    onChange('province', event.target.value)
  };

  const countrySelectedObj = COUNTRIES_STATES.countries.find((countryObj) => countryObj.country === countrySelected)

  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={firstName}
            onChange={handleChangeFirstName}
            error={errors?.firstName}
            helperText={errors?.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="country">Country</InputLabel>
            <Select
              required
              labelId="country"
              id="country"
              value={countrySelected}
              label="Country"
              onChange={handleCountryChange}
            >
              {COUNTRIES_STATES.countries.map((country) =>(
                <MenuItem key={country.country} value={country.country}>{country.country}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="province">State/Province/Region</InputLabel>
            <Select
              labelId="province"
              id="province"
              value={provinceSelected}
              label="State/Province/Region"
              onChange={handleProvinceChange}
            >
              {countrySelectedObj?.states.map((state) => (
                <MenuItem key={state} value={state}>{state}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
