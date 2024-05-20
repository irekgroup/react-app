import { lazy } from 'react';
import { ELoginRoutes, IRoute, TRoutesMap } from './interfaces/interface';
import { loginRoutes } from './loginRoutes';
import { profileRoutes } from './profileRoutes';
import { STARTING_PAGE_ROUT } from '../routes';

export const startingAppRoute: IRoute = {
    name: 'userLogin',
    path: STARTING_PAGE_ROUT,
    component: lazy(() => import('../../pages/starting/StartingPage')),
};

export const userRoutesMap: TRoutesMap = [...profileRoutes, startingAppRoute];

export const guestRoutesMap: TRoutesMap = [...loginRoutes, startingAppRoute];

export const PUBLIC_ROUTES = [
    ELoginRoutes.LOGIN_PAGE,
    ELoginRoutes.REGISTER_PAGE,
];
