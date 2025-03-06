import React, { useState } from "https://esm.sh/react@17.0.2";
import ReactDOM from "https://esm.sh/react-dom@17.0.2";

const SignIn = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState({
    name: "",
    email: "",
    login: "",
    password: "",
  });

  const handleCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    setLogin(newAccount.login);
    setPassword(newAccount.password);
    setShowCreateAccount(false);
  };

  return React.createElement(
    "div",
    { className: "container mt-5" },
    React.createElement(
      "div",
      { className: "text-center mb-4" },
      React.createElement("img", {
        src: "./assets/login_image.avif",
        alt: "Logo",
        className: "img-fluid",
      })
    ),
    React.createElement(
      "div",
      { className: "row justify-content-center" },
      React.createElement(
        "div",
        { className: "col-md-5" },
        React.createElement(SignInForm, {
          login,
          password,
          setLogin,
          setPassword,
          onCreateAccount: handleCreateAccount,
        })
      ),
      showCreateAccount &&
        React.createElement(
          "div",
          { className: "col-md-5" },
          React.createElement(CreateAccountForm, {
            newAccount,
            setNewAccount,
            onSubmit: handleCreateSubmit,
          })
        )
    )
  );
};

const SignInForm = ({
  login,
  password,
  setLogin,
  setPassword,
  onCreateAccount,
}) => {
  return React.createElement(
    "div",
    { className: "card p-4 shadow" },
    React.createElement("h2", { className: "text-center" }, "Sign In"),
    React.createElement("input", {
      type: "text",
      className: "form-control mb-2",
      placeholder: "Login",
      value: login,
      onChange: (e) => setLogin(e.target.value),
    }),
    React.createElement("input", {
      type: "password",
      className: "form-control mb-2",
      placeholder: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    }),
    React.createElement(
      "button",
      { className: "btn btn-primary w-100 mb-2" },
      "Sign In"
    ),
    React.createElement(
      "button",
      {
        className: "btn btn-outline-secondary w-100",
        onClick: onCreateAccount,
      },
      "Create Account"
    )
  );
};

const CreateAccountForm = ({ newAccount, setNewAccount, onSubmit }) => {
  return React.createElement(
    "div",
    { className: "card p-4 shadow" },
    React.createElement("h2", { className: "text-center" }, "Create Account"),
    React.createElement("input", {
      type: "text",
      className: "form-control mb-2",
      placeholder: "Full Name",
      value: newAccount.name,
      onChange: (e) => setNewAccount({ ...newAccount, name: e.target.value }),
    }),
    React.createElement("input", {
      type: "email",
      className: "form-control mb-2",
      placeholder: "Email",
      value: newAccount.email,
      onChange: (e) => setNewAccount({ ...newAccount, email: e.target.value }),
    }),
    React.createElement("input", {
      type: "text",
      className: "form-control mb-2",
      placeholder: "Login",
      value: newAccount.login,
      onChange: (e) => setNewAccount({ ...newAccount, login: e.target.value }),
    }),
    React.createElement("input", {
      type: "password",
      className: "form-control mb-2",
      placeholder: "Password",
      value: newAccount.password,
      onChange: (e) =>
        setNewAccount({ ...newAccount, password: e.target.value }),
    }),
    React.createElement(
      "button",
      {
        className: "btn btn-success w-100",
        onClick: onSubmit,
      },
      "Enter"
    )
  );
};

// Attach the component to a DOM element with id="root"
ReactDOM.render(React.createElement(SignIn), document.getElementById("root"));
