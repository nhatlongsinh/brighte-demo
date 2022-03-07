import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReferralTable } from '../../components/ReferralTable';
import { create, fetchAll, update, remove } from '../../features/referals';
import { RootState } from '../../store';
import { Referral } from '../../types/referral';
import style from './ReferralList.module.css';

const ReferralList: React.FC = () => {
  const dispatch = useDispatch();
  const referrals = useSelector((state: RootState) => state.referrals.data);

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const handleCreate = (data: Referral) => dispatch(create(data));
  const handleUpdate = (data: Referral) => dispatch(update(data));
  const handleDelete = (id: number) => dispatch(remove(id));

  return (
    <div className={style.frame}>
      <ReferralTable referrals={referrals} onCreate={handleCreate} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};

export { ReferralList };
