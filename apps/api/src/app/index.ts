import * as cors from 'cors';
import * as express from 'express';
import {
  createReferral,
  deleteReferralById,
  getAllReferrals,
  getReferralById,
  updateReferralById,
} from './referrals/api';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/referrals', getAllReferrals);
app.get('/referrals/:id', getReferralById);
app.delete('/referrals/:id', deleteReferralById);
app.patch('/referrals/:id', updateReferralById);
app.post('/referrals', createReferral);

export default app;
