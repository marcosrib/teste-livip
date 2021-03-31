import React, { useEffect } from 'react';
import Container from '@livipdev/core/Container';
import Header from '@livipdev/containers/Header';
import Footer from '@livipdev/containers/Footer';
import BudgetDialog from '../../components/BudgetDialog';
import TellYourCompanyDialog from '../../components/TellYourCompanyDialog';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Layout = ({ children, variant, ...props }) => {
  const [showQuotationDialog, setShowQuotationDialog] = React.useState(false);
  const [showShareDialog, setShowShareDialog] = React.useState(false);

  const toggleDialog = (setFunction, show) => () => setFunction(!show);

  useEffect(() => {

      window.addEventListener("click", function(event) {
       let valueElement =  event.target.innerHTML;
        if( valueElement === 'Solicitar orçamento' && event.target.attributes.href !== undefined ) {
          setShowQuotationDialog(true)
        }

        if( valueElement === 'Indique para sua empresa' ) {
          setShowShareDialog(true)
        }

      });
    

    
  }, [showQuotationDialog,showShareDialog ]);


  return (<Container
    disableGutters
    maxWidth={false}
    {...props}
  >
    <Header variant={variant} rootLogotype />
    {children}
    <Footer variant={variant} />
    <BudgetDialog
      open={showQuotationDialog}
      onClose={toggleDialog(setShowQuotationDialog, showQuotationDialog)}
    />
    <TellYourCompanyDialog
      open={showShareDialog}
      onClose={toggleDialog(setShowShareDialog, showShareDialog)}
    />
  </Container>)
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;