import { Request } from 'express';

export type Comment = {
  title: string;
  comment: string;
  phone: string;
};

export type Employee = {
  id: number;
  name: string;
  email: string;
  position: string;
  photo: string;
  address: string;
  comments: Array<Comment>;
};

export interface IAddComment extends Request {
  body: {
    id: number;
    comment: Comment;
  };
}
