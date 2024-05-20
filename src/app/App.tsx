import { FC, Suspense } from 'react';

import { GuestLayout } from '../layouts';
import { Providers } from './providers';
import { useCheckUserAuth } from '../shared/hooks/userAuth/useCheckUserAuth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { guestRoutesMap, userRoutesMap } from '../shared/routes/routes';
import { UserLayout } from '../layouts/UserLayout';
import { useAuth } from './entities/auth';
import { ModalController } from '../shared/modal';
import { ANALYZE_MODAL_TYPE, AnalyzeModal } from './entities/analyze';

const AppInner: FC = () => {
    useCheckUserAuth();

    const isAuth = useAuth();

    if (isAuth) {
        return (
            <UserLayout>
                <Suspense fallback={'Загрузка...'}>
                    <Routes>
                        {userRoutesMap.map((route) => (
                            <Route
                                path={route?.path}
                                key={route?.path}
                                element={<route.component />}
                            />
                        ))}

                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
                <ModalController
                    type={ANALYZE_MODAL_TYPE}
                    component={AnalyzeModal}
                />
            </UserLayout>
        );
    }

    return (
        <GuestLayout>
            <Suspense fallback={'Загрузка...'}>
                <Routes>
                    {guestRoutesMap.map((route) => (
                        <Route
                            path={route?.path}
                            key={route?.path}
                            element={<route.component />}
                        />
                    ))}

                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Suspense>
        </GuestLayout>
    );
};

const App: FC = () => {
    return (
        <Providers>
            <AppInner />
        </Providers>
    );
};

export { App };
