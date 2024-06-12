import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Gender, IUser } from '../../../shared/types/user';

interface ISignInEmailAndPassword {
    email: string;
    password: string;
}

interface ISignInEmailAndPasswordReturnProps {
    refreshToken: string;
}

const MOCK_USER: IUser = {
    name: 'Иванов Иван Иванович',
    gender: Gender.male,
    email: 'ivanov@mail.com',
};

export const fetchUser = async ({
    email,
}: {
    email: string;
}): Promise<IUser> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ...MOCK_USER, email });
        }, 500);
    });
};

export const signInEmailAndPassword = async ({
    email,
    password,
}: ISignInEmailAndPassword): Promise<ISignInEmailAndPasswordReturnProps> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ refreshToken: '0000-1111-2222-3333' });
        }, 500);
    });
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    );
    const firebaseUser = userCredential.user;
    const userRefreshToken = firebaseUser.refreshToken;

    return { refreshToken: userRefreshToken };
};
