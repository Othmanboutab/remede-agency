const initialState = {
    user: {
        token: '',
        logged: false,
        email: '',
        firstName: '',
        lastName: ''
    },
    error: null,
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'USER_SUCCESS':
            return {
                ...state, user: action.payload, error: null
            };
        case 'USER_FAILURE':
            return { ...state, user: null, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;