import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { Container } from '@mui/system';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white', 
    width: '50%', 
    height: '50%', 
    borderRadius: 2,
    overflow: 'scroll',
    padding: 4,
  },
}

const Dialog = ({ visibility, onClosePressed, children }) => (
  <Modal 
    open={visibility}
    onClose={onClosePressed}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={styles.container}
  >
    <Container component="main" sx={styles.content}>
      {children}
    </Container>
  </Modal>
)

export default Dialog;