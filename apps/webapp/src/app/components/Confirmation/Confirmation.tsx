import React from 'react';
import style from './Dialog.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export interface ConfirmationProps {
  heading: string;
  open: boolean;
  onClose?: () => void;
  onAccept?: () => void;
  cancelText?: string;
  acceptText?: string;
  children: React.ReactNode;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  heading,
  open,
  onClose,
  onAccept,
  cancelText,
  acceptText,
  children,
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  const handleAccept = () => {
    if (onAccept) {
      onAccept();
    }
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{heading}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{cancelText || 'Cancel'}</Button>
        <Button onClick={handleAccept} autoFocus>
          {acceptText || 'Okay'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { Confirmation };
