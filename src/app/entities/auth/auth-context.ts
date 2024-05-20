import { createContext } from 'react';
import { AuthUpdaterType } from './types';

const AuthContext = createContext<boolean | null>(null);

const AuthUpdaterContext = createContext<AuthUpdaterType | null>(null);

export { AuthContext, AuthUpdaterContext };
