import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


export default function Review({ formValues, cartItem }) {

  const firstName = formValues.firstName || ''
  const lastName = formValues.lastName || ''
  const address1 = formValues.address1 || ''
  const address2 = formValues.address2 || ''
  const zip = formValues.zip || ''
  const city = formValues.city || ''
  const country = formValues.country || ''
  const province = formValues.province || ''

  const cardName = formValues.cardName || ''
  const cardNumber = formValues.cardNumber || ''
  const expiryDate = formValues.expiryDate || ''

  const maskedNumber = cardNumber.slice(-4)

  const addresses = [address1, address2, city, zip, country, province];
  const payments = [
    { name: 'Card holder', detail: cardName },
    { name: 'Card number', detail: 'XXXX-XXXX-XXXX-' + maskedNumber },
    { name: 'Expiry date', detail: expiryDate }
  ];

  const totalPrice = cartItem.map((item) => Number(item.price)).reduce((previousValue, currentValue) => previousValue + currentValue);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItem.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {'R$ ' + totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{firstName} {lastName}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
