import { Button, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import React, { useState } from 'react';
import { ReactComponent as CreateIcon } from '../../../assets/create-24px.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/delete-24px.svg';
import { Referral } from '../../types/referral';
import { IconButton } from '../IconButton';
import { ReferralModal } from '../ReferralModal';
import { ReferralDeleteConfirmation } from '../ReferralDeleteConfirmation/index';
import style from './ReferralTable.module.css';

const TableHeadCell: React.FC = ({ children }) => (
  <TableCell classes={{ root: style.tableHeadCell }}>{children}</TableCell>
);

const TableBodyCell: React.FC = ({ children }) => (
  <TableCell classes={{ root: style.tableBodyCell }}>{children}</TableCell>
);

interface ActionBodyCellProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const ActionBodyCell: React.FC<ActionBodyCellProps> = ({ onEditClick, onDeleteClick }) => (
  <TableCell classes={{ root: style.actionBodyCell }}>
    <IconButton onClick={onEditClick}>
      <CreateIcon />
    </IconButton>
    <IconButton onClick={onDeleteClick}>
      <DeleteIcon />
    </IconButton>
  </TableCell>
);

interface ReferralTableProps {
  referrals: Referral[];
  onDelete?: (id: number) => void;
  onCreate?: (data: Referral) => void;
  onUpdate?: (data: Referral) => void;
}

const ReferralTable: React.FC<ReferralTableProps> = ({ referrals, onDelete, onCreate, onUpdate }) => {
  const [deleteId, setDeleteId] = useState<number | undefined>(undefined);
  const [selectedItem, setSelectedItem] = useState<Referral | undefined>(undefined);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const handleDelete = () => {
    if (onDelete) {
      onDelete(deleteId);
    }
    setDeleteId(undefined);
  };

  const handleCloseModal = () => {
    setSelectedItem(undefined);
    setShowEditModal(false);
  };
  const handleSubmitReferral = (data) => {
    if (selectedItem) {
      if (onUpdate) {
        onUpdate({ id: selectedItem.id, ...data });
      }
    } else {
      if (onCreate) {
        onCreate(data);
      }
    }
    setSelectedItem(undefined);
    setShowEditModal(false);
  };

  return (
    <>
      <TableContainer classes={{ root: style.container }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Given Name</TableHeadCell>
              <TableHeadCell>Surname</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Phone</TableHeadCell>
              <TableHeadCell>Address Line</TableHeadCell>
              <TableHeadCell>Suburb</TableHeadCell>
              <TableHeadCell>State</TableHeadCell>
              <TableHeadCell>Postcode</TableHeadCell>
              <TableHeadCell>Country</TableHeadCell>
              <TableHeadCell>Actions</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {referrals.map((referral) => (
              <TableRow key={referral.id}>
                <TableBodyCell>{referral.givenName}</TableBodyCell>
                <TableBodyCell>{referral.surName}</TableBodyCell>
                <TableBodyCell>{referral.email}</TableBodyCell>
                <TableBodyCell>{referral.phone}</TableBodyCell>
                <TableBodyCell>{referral.addressLine}</TableBodyCell>
                <TableBodyCell>{referral.suburb}</TableBodyCell>
                <TableBodyCell>{referral.state}</TableBodyCell>
                <TableBodyCell>{referral.postCode}</TableBodyCell>
                <TableBodyCell>{referral.country}</TableBodyCell>
                <ActionBodyCell
                  onEditClick={() => {
                    setSelectedItem(referral);
                    setShowEditModal(true);
                  }}
                  onDeleteClick={() => {
                    setDeleteId(referral.id);
                  }}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack direction="row" spacing={2} sx={{ mt: 4 }} justifyContent="flex-end">
          <Button variant="outlined" startIcon={<AddOutlinedIcon />} onClick={() => setShowEditModal(true)}>
            Create New
          </Button>
        </Stack>
      </TableContainer>
      <ReferralDeleteConfirmation
        open={deleteId !== undefined}
        onDelete={handleDelete}
        onClose={() => setDeleteId(undefined)}
      />
      <ReferralModal
        open={showEditModal}
        data={selectedItem}
        onSubmit={handleSubmitReferral}
        onClose={handleCloseModal}
      />
    </>
  );
};

export { ReferralTable };
