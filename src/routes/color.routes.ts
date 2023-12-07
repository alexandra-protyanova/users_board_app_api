import express, { Router } from 'express';
import * as colorsController from '../constrollers/color.controller';

export const colorRouter = Router();

colorRouter.get('/', colorsController.getAll);