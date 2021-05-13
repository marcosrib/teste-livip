import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Box from '@livipdev/core/Box';
import Button from '@livipdev/core/Button';
import Dialog from '@livipdev/core/Dialog';

import messages from './messages';
import TellYourCompanyDialogTextFields from '../TellYourCompanyDialogTextFields';
import api from '../../apiServices';

const TellYourCompanyDialog = ({ onSubmit, ...props }) => {
  const intl = useIntl();
  const [quote, setQuote] = React.useState({});

  const onInputChange = (event) => {
    setQuote({
      ...quote,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(quote);
    const { name, email, phone, company,deptRole } = quote;
    const res = await api.post('api/sendmail', {
      name: name,
      email,
      phone,
      company: company || null,
      deptRole,
     
    })
  };

  return (
    <Dialog
      {...props}
      fullWidth
      maxWidth="lg"
      title={messages.title}
      subtitle={messages.subtitle}
    >
      <form onSubmit={handleSubmit}>
        <TellYourCompanyDialogTextFields value={quote} onChange={onInputChange} />
        <Box textAlign="center" mt={6}>
          <Button type="submit" color="primary" variant="contained" size="large">
            {intl.formatMessage(messages.send)}
          </Button>
        </Box>
      </form>
    </Dialog>
  );
};

TellYourCompanyDialog.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};

export default TellYourCompanyDialog;
