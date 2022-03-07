import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BaseModal from '@mui/material/Modal';
export interface ModalProps {
  heading: string;
  open: boolean;
  onClose?: () => void;
  cancelText?: string;
  acceptText?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ heading, open, onClose, cancelText, acceptText, children }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <BaseModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ textAlign: 'center' }}>
          {heading}
        </Typography>
        <Box sx={{ mt: 3 }}>{children}</Box>
      </Box>
    </BaseModal>
  );
};
export { Modal };
