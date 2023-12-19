const BASE_URL = "http://localhost:3001/api/v1/user";

const login: LoginThunk =
    (email, password, rememberMe) => async (dispatch: any) => {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            dispatch({
                type: "LOGIN_SUCCESS", payload: {
                    token: data.body.token,
                    rememberMe
                }
            });
            localStorage.setItem("token", data.body.token);
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error });
        }
    };

const signup = async ({
    data,
}: {
    data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    };
}) => {
    const request = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const user = await request.json();
        return user;
    } catch (e) {
        console.error(e);
    }
};

const updateUser = async ({ firstName, lastName, token }: any) => {
    const request = await fetch(`${BASE_URL}/profile`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName }),
    });

    try {
        const user = await request.json();

        return user;
    } catch (e) {
        console.error(e);
    }
};

const getUserData =
    ({ token }: { token: string }) =>
        async (dispatch: any) => {
            try {
                const response = await fetch(`${BASE_URL}/profile`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                const user = await response.json();
                dispatch({ type: "USER_SUCCESS", payload: user.body });
            } catch (error) {
                dispatch({ type: "USER_FAILURE", payload: error });
            }
        };

export { login, signup, updateUser, getUserData };
