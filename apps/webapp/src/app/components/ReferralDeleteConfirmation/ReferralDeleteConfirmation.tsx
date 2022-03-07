import React from 'react';
import { Confirmation } from '../Confirmation';

export interface ReferralDeleteConfirmationProps {
  open: boolean;
  onDelete(): void;
  onClose(): void;
}

const ReferralDeleteConfirmation: React.FC<ReferralDeleteConfirmationProps> = ({ open, onDelete, onClose }) => {
  return (
    <Confirmation
      cancelText="Cancel"
      acceptText="Delete"
      heading="Delete referral"
      open={open}
      onAccept={onDelete}
      onClose={onClose}
    >
      Are you sure you want to delete this referral? This action can't be undone!
    </Confirmation>
  );
};
export { ReferralDeleteConfirmation };
