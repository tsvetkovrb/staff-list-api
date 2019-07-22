import { Request, Response } from 'express';

import { Comment, Employee, IAddComment } from '../types/staffTypes';

import { Staff } from '../models/staff';

const staff = new Staff();

export const getAllStaff = (req: Request, res: Response): void => {
  const allStaff: Array<Employee> = staff.getStaff();
  res.send(allStaff);
};

export const getEmployeeById = (
  req: Request,
  res: Response,
): void | Response => {
  const userID: number = parseInt(req.params.id, 10);

  const employee: Employee | undefined = staff.findEmployee(userID);

  if (!employee) return res.sendStatus(404);

  res.send(employee);
};

export const addComment = (req: IAddComment, res: Response): void => {
  const { id, comment } = req.body;

  const employee: Employee | undefined = staff.findEmployee(id);

  if (employee) {
    const indexEmployee: number = staff.getStaff().indexOf(employee);

    const { comments } = employee;

    const updatedComments: Array<Comment> = [...comments, comment];

    const updatedEmploee: Employee = {
      ...employee,
      comments: [...updatedComments],
    };

    const user: Employee = staff.editEmployee(indexEmployee, updatedEmploee);

    res.send(user);
  } else {
    res.status(404);
  }
};

export const addUser = (req: Request, res: Response): void => {
  const allStaff: Array<Employee> = staff.getStaff();

  const nextId: number = allStaff[allStaff.length - 1].id + 1;

  const randomBooleanValue: boolean = !!Math.round(Math.random());

  const womenOrMen: string = randomBooleanValue ? 'women' : 'men';

  const employee: Employee = {
    id: nextId,
    ...req.body,
    photo: `https://randomuser.me/api/portraits/${womenOrMen}/${nextId}.jpg`,
    comments: [],
  };

  staff.addEmployee(employee);

  res.status(201).json(staff.getStaff());
};
