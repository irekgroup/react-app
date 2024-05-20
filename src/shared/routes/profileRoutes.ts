import { lazy } from 'react';

import { EProfileRoutes, TRoutesMap } from './interfaces/interface';

export const profileRoutes: TRoutesMap = [
    {
        name: 'profile',
        path: EProfileRoutes.PROFILE_PAGE,
        component: lazy(() => import('../../pages/profile/Profile')),
    },
];
