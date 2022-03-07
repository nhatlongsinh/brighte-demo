import React, { useEffect } from 'react';
import { Modal } from '../Modal';
import { Referral } from '../../types/referral';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

export interface ReferralModalProps {
  data?: Referral;
  open: boolean;
  onSubmit(data): void;
  onClose(): void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ data, open, onSubmit, onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm();

  useEffect(() => {
    clearErrors();
    const { givenName, surName, email, phone, addressLine, suburb, state, postCode, country } = data || {};
    setValue('givenName', givenName || '');
    setValue('surName', surName || '');
    setValue('email', email || '');
    setValue('phone', phone || '');
    setValue('addressLine', addressLine || '');
    setValue('suburb', suburb || '');
    setValue('state', state || '');
    setValue('postCode', postCode || '');
    setValue('country', country || '');
  }, [open]);

  return (
    <Modal heading={data ? 'Edit Referral' : 'Create Referral'} open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom component="h2" sx={{ mb: 2 }}>
          Personal Details
        </Typography>
        <Stack spacing={2}>
          <Controller
            name="givenName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                helperText={errors.givenName ? 'This field is required' : ''}
                error={!!errors.givenName}
                id="givenName"
                label="Given Name"
                variant="outlined"
                {...field}
              />
            )}
          />
          <Controller
            name="surName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                helperText={errors.surName ? 'This field is required' : ''}
                error={!!errors.surName}
                id="surName"
                label="Surname"
                variant="outlined"
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                helperText={errors.email ? 'This field is required' : ''}
                error={!!errors.email}
                id="email"
                label="Email"
                variant="outlined"
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                helperText={errors.phone ? 'This field is required' : ''}
                error={!!errors.phone}
                id="phone"
                label="Phone"
                variant="outlined"
                {...field}
              />
            )}
          />
        </Stack>
        <Typography variant="h6" gutterBottom component="h2" sx={{ mb: 2, mt: 4 }}>
          Address
        </Typography>
        <Stack spacing={2}>
          <Controller
            name="addressLine"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                helperText={errors.addressLine ? 'This field is required' : ''}
                error={!!errors.addressLine}
                id="addressLine"
                label="Address Line"
                variant="outlined"
                {...field}
              />
            )}
          />
          <Controller
            name="suburb"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                helperText={errors.suburb ? 'This field is required' : ''}
                error={!!errors.suburb}
                id="suburb"
                label="Suburb"
                variant="outlined"
                {...field}
              />
            )}
          />
          <Controller
            name="state"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                helperText={errors.state ? 'This field is required' : ''}
                error={!!errors.state}
                id="state"
                label="State"
                variant="outlined"
                {...field}
              />
            )}
          />
          <Controller
            name="postCode"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                helperText={errors.postCode ? 'This field is required' : ''}
                error={!!errors.postCode}
                id="postCode"
                label="Postcode"
                variant="outlined"
                {...field}
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                helperText={errors.country ? 'This field is required' : ''}
                error={!!errors.country}
                id="country"
                label="Country"
                variant="outlined"
                {...field}
              />
            )}
          />
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }} justifyContent="flex-end">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)} autoFocus>
            {data ? 'Save Changes' : 'Create'}
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};
export { ReferralModal };
