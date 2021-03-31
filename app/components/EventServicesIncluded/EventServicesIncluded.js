import React from 'react';

import Box from '@livipdev/core/Box';
import Button from '@livipdev/core/Button';
import Container from '@livipdev/core/Container';
import Grid from '@livipdev/core/Grid';

import ServicesIncluded from '../ServicesIncluded';
import BudgetDialog from '../BudgetDialog';
import TellYourCompanyDialog from '../TellYourCompanyDialog';
import ShareDialog from '../ShareDialog';

const EventServicesIncluded = () => {
  const [showQuotationDialog, setShowQuotationDialog] = React.useState(false);
  const [showTellYourCompanyDialog, setShowTellYourCompanyDialog] = React.useState(false);
  const [showShareDialog, setShowShareDialog] = React.useState(false);

  const toggleDialog = (setFunction, show) => () => setFunction(!show);

  return (
    <Box p={1} paddingBottom={8} >
      <ServicesIncluded />
      <Container>
        <Grid container spacing={1} justify="center">
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              onClick={toggleDialog(setShowQuotationDialog, showQuotationDialog)}
            >
              Solicitar orçamento
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              onClick={toggleDialog(setShowQuotationDialog, showQuotationDialog)}
            >
              Solicitar atendimento personalizado
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              onClick={toggleDialog(setShowTellYourCompanyDialog, showTellYourCompanyDialog)}
            >
              Indicar para a sua empresa
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              onClick={toggleDialog(setShowShareDialog, showShareDialog)}
            >
              Compartilhar
            </Button>
            
          </Grid>
        </Grid>
      </Container>
      <BudgetDialog
        open={showQuotationDialog}
        onClose={toggleDialog(setShowQuotationDialog, showQuotationDialog)}
      />
     <TellYourCompanyDialog
        open={showTellYourCompanyDialog}
        onClose={toggleDialog(setShowTellYourCompanyDialog, showTellYourCompanyDialog)}
      />
      <ShareDialog
        open={showShareDialog}
        onClose={toggleDialog(setShowShareDialog, showShareDialog)}
      />
    </Box>
  );
};

export default EventServicesIncluded;
