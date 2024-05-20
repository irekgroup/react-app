import { FC } from 'react';

export interface IRoute {
    name: string;
    path?: string;
    component: FC<any>;
    exact?: boolean;
}

export enum ELoginRoutes {
    LOGIN_PAGE = '/login',
    REGISTER_PAGE = '/register',
}

export enum EProfileRoutes {
    PROFILE_PAGE = '/health/profile',
}

export enum EAboutAppRoutes {
    ABOUT_PAGE = 'health/about',
}

/* export type TRouteNames = ELoginRoutes | EProfileRoutes | EAboutAppRoutes; */

export type TRoutesMap = Array<IRoute>;
