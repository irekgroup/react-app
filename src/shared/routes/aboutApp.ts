import { lazy } from 'react';

import { EAboutAppRoutes, TRoutesMap } from './interfaces/interface';

export const aboutAppRoutes: TRoutesMap<EAboutAppRoutes> = [
    {
        name: 'userLogin',
        path: EAboutAppRoutes.ABOUT_PAGE,
        component: lazy(() => import('../../pages/about/About')),
    },
];
