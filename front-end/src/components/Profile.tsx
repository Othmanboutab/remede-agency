import { useEffect, useState } from "react";
import { getUserData, updateUser } from "../request/user";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const token = localStorage.getItem("token");
  const userReducer = useSelector((state: any) => state.userReducer);

  const { user } = userReducer;
  const [edit, setEdit] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const dispatch: any = useDispatch();

  const update = async () => {
    await dispatch(updateUser({ firstName, lastName, token }));
    setEdit(false);
  };

  const handleCancel = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEdit(false);
  };

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }, [user]);

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        await dispatch(getUserData({ token }));
      }
    };
    getUser();
  }, [token]);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {!edit && (
          <p>
            <span>{firstName}</span>&nbsp;
            <span>{lastName}</span>
          </p>
        )}
      </h1>
      {edit ? (
        <>
          <div className="inputs-container">
            <input
              placeholder={firstName}
              className="input"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              placeholder={lastName}
              className="input"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" onClick={update}>
              Save
            </button>
            <button className="btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <div>
          <button className="edit-button" onClick={() => setEdit(true)}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
