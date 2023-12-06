import express, { Router } from 'express';
import * as colorsController from '../constrollers/user.controller';

export const colorRouter = Router();

colorRouter.get('/colors', colorsController.getAll);