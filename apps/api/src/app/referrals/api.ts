import { Referral } from '@prisma/client';
import { Request, Response } from 'express';
import prisma from '../prisma';

export const getAllReferrals = async (req: Request, res: Response) => {
  const referrals = await prisma.referral.findMany();

  res.json(referrals);
};

export const getReferralById = async (req: Request, res: Response) => {
  const { id }: { id?: number } = req.params;
  const referral = await prisma.referral.findUnique({
    where: { id: Number(id) },
  });

  res.json(referral);
};

export const deleteReferralById = async (req: Request, res: Response) => {
  const { id }: { id?: number } = req.params;
  await prisma.referral.delete({
    where: { id: Number(id) },
  });

  res.json({ id });
};
export const updateReferralById = async (req: Request, res: Response) => {
  const { id }: { id?: number } = req.params;
  const {
    addressLine,
    country,
    createdAt,
    email,
    givenName,
    phone,
    postCode,
    state,
    suburb,
    surName,
  }: Referral = req.body;

  const referral = await prisma.referral.update({
    where: { id: Number(id) },
    data: {
      addressLine,
      country,
      createdAt,
      email,
      givenName,
      phone,
      postCode,
      state,
      suburb,
      surName,
    },
  });

  res.json(referral);
};
export const createReferral = async (req: Request, res: Response) => {
  const {
    addressLine,
    country,
    createdAt,
    email,
    givenName,
    phone,
    postCode,
    state,
    suburb,
    surName,
  }: Referral = req.body;
  const referral = await prisma.referral.create({
    data: {
      addressLine,
      country,
      createdAt,
      email,
      givenName,
      phone,
      postCode,
      state,
      suburb,
      surName,
    },
  });

  res.json(referral);
};
