const initialState = {
    user: {
        token: '',
        logged: false,
        userInfo: {}
    },
    error: null,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state, user: {
                    token: action.payload.token,
                    rememberMe: action.payload.rememberMe,
                    logged: true,
                }, error: null
            };
        case 'LOGIN_FAILURE':
            return { ...state, user: null, error: action.payload };
        case 'LOGOUT':
            return {
                ...state, user: {
                    token: null,
                    logged: false
                }, error: null
            };
        default:
            return state;
    }
};

export default authReducer;