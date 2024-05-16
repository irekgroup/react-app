import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import localStorageManager from '../../localStorage/localStorageManager';

import { PUBLIC_ROUTES } from '../../routes/routes';

import { AUTH_TOKEN } from './constants';
import { ELoginRoutes } from '../../routes';

export const useCheckUserAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const authToken = localStorageManager.getValue(AUTH_TOKEN);

    const isPublicRoute = useMemo(
        () => PUBLIC_ROUTES.some((route) => route === location.pathname),
        [location]
    );

    useEffect(() => {
        if (isPublicRoute) {
            return;
        } else {
            if (!authToken) {
                navigate(ELoginRoutes.LOGIN_PAGE, {
                    state: {
                        goToAfterLogin: location.pathname,
                    },
                });
            }
        }
    }, [isPublicRoute, authToken, navigate]);
};
