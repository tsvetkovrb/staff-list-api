import { Router } from 'express';

import {
  getEmployeeById,
  getAllStaff,
  addComment,
  addUser,
} from './controllers/staff';

export const baseRouter = Router();

baseRouter.get(`/staff-list`, getAllStaff);
baseRouter.get(`/staff-list/:id`, getEmployeeById);
baseRouter.post(`/add-comment`, addComment);
baseRouter.post(`/add-user`, addUser);
