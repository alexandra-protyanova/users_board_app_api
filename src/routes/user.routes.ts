import express, { Router } from 'express';
import * as userController from '../constrollers/user.controller';

export const userRouter = Router();

userRouter.get('/', userController.getAll);

userRouter.get('/:userId', userController.getOne);

userRouter.post('/', userController.create);
