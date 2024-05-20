import { lazy } from 'react';

import { ELoginRoutes, TRoutesMap } from './interfaces/interface';

export const loginRoutes: TRoutesMap = [
    {
        name: 'userLogin',
        path: ELoginRoutes.LOGIN_PAGE,
        component: lazy(() => import('../../pages/login/LoginPage')),
    },
    {
        name: 'userRegister',
        path: ELoginRoutes.REGISTER_PAGE,
        component: lazy(() => import('../../pages/login/RegisterPage')),
    },
];
