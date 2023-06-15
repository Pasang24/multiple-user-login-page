import { useState, useReducer } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiFillLock,
  AiOutlinePhone,
  AiFillBook,
  AiOutlineShop,
} from "react-icons/ai";
import Form from "../components/form_components/Form";
import Input from "../components/custom_components/Input";
import PasswordInput from "../components/form_components/PasswordInput";
import UserSelectSection from "../components/form_components/UserSelectSection";
import LinkSection from "../components/form_components/LinkSection";
import axios from "axios";
import Spinner from "../components/loader_components/Spinner";

//defining action types for reducer function
const UPDATE_USER = "updateUser";
const UPDATE_NAME = "updateName";
const UPDATE_EMAIL = "updateEmail";
const UPDATE_PASSWORD = "updatePassword";
const UPDATE_NUMBER = "updateNumber";
const UPDATE_EDUCATION = "updateEducation";
const UPDATE_COMPANY = "updateCompany";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, role: action.payload, education: "", company: "" };
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case UPDATE_NUMBER:
      return { ...state, phoneNumber: parseInt(action.payload) || 0 };
    case UPDATE_EDUCATION:
      return { ...state, education: action.payload };
    case UPDATE_COMPANY:
      return { ...state, company: action.payload };
    default:
      return state;
  }
};

function NewAccountPage() {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    role: "applicant",
    name: "",
    email: "",
    password: "",
    phoneNumber: 0,
    education: "",
    company: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSpinner(true);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/signup`, state)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.log({ err });
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
          heading="Choose Account Type You Want To Create"
          desc={`Hello ${state.role}! Please fill out the form below to get started`}
          user={state.role}
          setUser={dispatch}
        />
        <Input
          type="text"
          value={state.name}
          setValue={dispatch}
          actionType={UPDATE_NAME}
          placeholder="Full Name"
        >
          <AiOutlineUser color="rgba(0, 0, 0, 0.75)" />
        </Input>
        <Input
          type="text"
          value={state.email}
          setValue={dispatch}
          actionType={UPDATE_EMAIL}
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
        <Input
          type="number"
          value={state.phoneNumber || ""}
          actionType={UPDATE_NUMBER}
          setValue={dispatch}
          placeholder="Phone Number"
        >
          <AiOutlinePhone color="rgba(0, 0, 0, 0.75)" />
        </Input>
        {state.role === "applicant" && (
          <Input
            type="text"
            value={state.education}
            actionType={UPDATE_EDUCATION}
            setValue={dispatch}
            placeholder="Education"
          >
            <AiFillBook color="rgba(0, 0, 0, 0.75)" />
          </Input>
        )}
        {state.role === "recruiter" && (
          <Input
            type="text"
            value={state.company}
            setValue={dispatch}
            actionType={UPDATE_COMPANY}
            placeholder="Company Name"
          >
            <AiOutlineShop color="rgba(0, 0, 0, 0.75)" />
          </Input>
        )}
        <LinkSection
          buttonText="Create Account"
          desc="Already have an account?"
          linkText="Login"
          to="/login"
        />
      </Form>
      {showSpinner &&
        createPortal(<Spinner />, document.getElementById("spinner-div"))}
    </>
  );
}

export default NewAccountPage;
