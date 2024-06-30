import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { setShowSignupModal } from "../../store/slices/utilsSlice";
import { setUserData } from "../../store/slices/userSlice";

const RegisterForm = () => {
  const [userSignupData, setUserSignupData] = useState({
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserSignUp = (e) => {
    const { name, value } = e.target;

    setUserSignupData({
      ...userSignupData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Api Call
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/register`;
    try {
      const res = await axios.post(url, userSignupData);
      // console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUserData(res.data.data));

        dispatch(setShowSignupModal(false));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setUserSignupData({
        email: "",
      });
    }
  };

  return (
    <div className={styles.registerUserWrapper}>
      <div className={styles.registerUserContent}>
        <div className={styles.registerContainer}>
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className={styles.registerHeading}>Sign Up Form</h2>
          </div>
          <form className={styles.registerForm} onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={userSignupData.email}
                onChange={handleUserSignUp}
                className={styles.registerInputBox}
                required
              />
            </div>

            <div>
              <button type="submit" className={styles.signupBtn}>
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
