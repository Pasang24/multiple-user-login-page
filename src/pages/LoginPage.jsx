import { useState, useReducer } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import Form from "../components/form_components/Form";
import UserSelectSection from "../components/form_components/UserSelectSection";
import Input from "../components/custom_components/Input";
import PasswordInput from "../components/form_components/PasswordInput";
import LinkSection from "../components/form_components/LinkSection";
import SpinnerContainer from "../components/loader_components/SpinnerContainer";
import axios from "axios";

//defining action types for reducer function
const UPDATE_USER = "updateUser";
const UPDATE_EMAIL = "updateEmail";
const UPDATE_PASSWORD = "updatePassword";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, role: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

function LoginPage({ setHasLoggedIn }) {
  const navigate = useNavigate();

  const [showSpinner, setShowSpinner] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    role: "applicant",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSpinner(true);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/login`, state)
      .then((res) => {
        //storing loginState and userToken in localStorage for persisting user login
        localStorage.setItem("hasLoggedIn", JSON.stringify(true));
        localStorage.setItem("role", JSON.stringify(state.role));
        localStorage.setItem("userToken", JSON.stringify(res.data.token));
        setHasLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 401) {
          console.log(err);
        }
      })
      .finally(() => {
        setShowSpinner(false);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <UserSelectSection
          heading="Choose Account Type"
          user={state.role}
          setUser={dispatch}
          desc={`Hello ${state.role}! Please login to get started`}
        />
        <Input
          type="text"
          value={state.email}
          actionType={UPDATE_EMAIL}
          setValue={dispatch}
          placeholder="Email"
        >
          <AiOutlineMail color="rgba(0, 0, 0, 0.75)" />
        </Input>
        <PasswordInput
          value={state.password}
          actionType={UPDATE_PASSWORD}
          setValue={dispatch}
          placeholder="Password"
        >
          <AiFillLock color="rgba(0, 0, 0, 0.75)" />
        </PasswordInput>
        <LinkSection
          buttonText="Login"
          desc="No account?"
          linkText="Create new account"
          to="/signup"
        />
      </Form>
      {showSpinner &&
        createPortal(
          <SpinnerContainer />,
          document.getElementById("spinner-div")
        )}
    </>
  );
}

export default LoginPage;
