const login: LoginThunk = (email, password) => async (dispatch: any) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.body.token });
        localStorage.setItem('token', data.body.token);
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error });
    }
};

const signup = async ({ data }: {
    data: {
        email: string,
        password: string,
        firstName: string,
        lastName: string
    }
}) => {
    const request = await fetch("http://localhost:3001/api/v1/user/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    try {
        const user = await request.json()
        return user
    } catch (e) {
        console.error(e)
    }
}

const updateUser = ({ firstName, lastName, token }: any) => async (dispatch: any) => {
    const request = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ firstName, lastName }),
    })

    try {
        const user = await request.json()

        return user
    } catch (e) {
        console.error(e)
    }
}


const getUserData = ({ token }: { token: string }) => async (dispatch: any) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const user = await response.json()
        dispatch({ type: 'USER_SUCCESS', payload: user.body });
    } catch (error) {
        dispatch({ type: 'USER_FAILURE', payload: error });
    }
}




export { login, signup, updateUser, getUserData }