import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Box from '@livipdev/core/Box';
import Button from '@livipdev/core/Button';
import Dialog from '@livipdev/core/Dialog';

import messages from './messages';
import BudgetDialogTextFields from '../BudgetDialogTextFields';
import BudgetDialogCheckboxes from '../BudgetDialogCheckboxes';
import BudgetDialogMultiline from '../BudgetDialogMultiline';
import api from '../../apiServices';
const CHECKBOXES = 'services';

const BudgetDialog = ({ onSubmit, ...props }) => {
  const intl = useIntl();
  const [quote, setQuote] = React.useState({ [CHECKBOXES]: {} });

  const onInputChange = (event) => {
    const value = event.target.name === CHECKBOXES
      ? { ...quote[CHECKBOXES], [event.target.value]: event.target.checked }
      : event.target.value;

    setQuote({
      ...quote,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, phone, company,quantity, comments } = quote;
    const res = await api.post('api/sendmail', {
      name: name,
      email,
      phone,
      company: company || null,
      quantity,
      comments
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
        <BudgetDialogTextFields value={quote} onChange={onInputChange} />
        <BudgetDialogCheckboxes value={quote} name={CHECKBOXES} onChange={onInputChange} />
        <BudgetDialogMultiline value={quote} onChange={onInputChange} />
        <Box textAlign="center" mt={6}>
          <Button type="submit" color="primary" variant="contained" size="large">
            {intl.formatMessage(messages.send)}
          </Button>
        </Box>
      </form>
    </Dialog>
  );
};

BudgetDialog.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};

export default BudgetDialog;
