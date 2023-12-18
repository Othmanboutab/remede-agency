interface LoginSuccessAction {
    type: 'LOGIN_SUCCESS';
    payload: any;
}

interface LoginFailureAction {
    type: 'LOGIN_FAILURE';
    payload: any;
}

type LoginAction = LoginSuccessAction | LoginFailureAction;

type LoginThunk = (email: string, password: string) => (dispatch: Dispatch<LoginAction>) => Promise<void>;