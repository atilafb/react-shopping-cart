import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step, onChange, formValues, errors) {
  switch (step) {
    case 0:
      return <AddressForm onChange={onChange} formValues={formValues} errors={errors}/>;
    case 1:
      return <PaymentForm onChange={onChange} formValues={formValues} errors={errors}/>;
    case 2:
      return <Review formValues={formValues}/>;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

const getIsFormValid = (formValues, errors, step) => {
  if (step === 0) {
    if (errors.firstName || !formValues.firstName) {
      return false
    }
    if (errors.lastName || !formValues.lastName) {
      return false
    }
    if (errors.address1 || !formValues.address1) {
      return false
    }
    if (errors.zip || !formValues.zip) {
      return false
    }
    if (errors.city || !formValues.city) {
      return false
    }
    if (!formValues.country) {
      return false
    }
  }else if (step=== 1) {
    if (errors.cardName || !formValues.cardName) {
      return false
    }
    if (errors.cardNumber || !formValues.cardNumber) {
      return false
    }
    if (errors.expiryDate || !formValues.expiryDate) {
      return false
    }
    if (errors.cvvNumber || !formValues.cvvNumber) {
      return false
    } 
  }
  return true
}

const getAddressFormErrors = (formValues) => {
  const isFirstNameNotEmpty = formValues.firstName === ''

  return {
    ...(isFirstNameNotEmpty ? { firstName: 'First name field should not be empty' } : {}),
    ...(formValues.lastName === '' ? { lastName: 'Last name field should not be empty' } : {}),
    ...(formValues.address1 === '' ? { address1: 'Address 1 field should not be empty' } : {}),
    ...(formValues.zip === '' ? { zip: 'Zip / Postal code field should not be empty' } : {}),
    ...(formValues.city === '' ? { city: 'City field should not be empty' } : {})
  }
}

const getPaymentFormErrors = (formValues) => {
  const errors = {}
  if (formValues.cardName === '') {
    errors.cardName = 'Card Name should not be empty'
  }
  if (formValues.cardNumber === '') {
    errors.cardNumber = 'Card Number should not be empty'
  }
  if (formValues.expiryDate === '') {
    errors.expiryDate = 'Expiry Date should not be empty'
  }
  if (formValues.cvvNumber === '') {
    errors.cvvNumber = 'CVV Number should not be empty'
  }
  return errors
}

const getFormErrors = (formValues) => ({
  ...getAddressFormErrors(formValues),
  ...getPaymentFormErrors(formValues)
})

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState({})

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onFormChange = (fieldName, fieldValue) => {
    setFormValues({...formValues, [fieldName]:fieldValue})
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const errors = getFormErrors(formValues)
  const isValid = getIsFormValid(formValues, errors, activeStep)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper component="form" onSubmit={onFormSubmit} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, onFormChange, formValues, errors)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    type="submit"
                    disabled={!isValid}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>

      </Container>
    </ThemeProvider>
  );
}
