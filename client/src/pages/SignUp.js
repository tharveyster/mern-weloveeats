import Axios from "axios";
import Policies from "../components/Policies";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUp = () => {

  return (
    <div className="signInContainer">
      <div className="column">
        <div className="header">
          <h3>Sign Up</h3>
          <span>to continue to WeLoveEats.com</span>
        </div>
        <div className="loginForm">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              email2: "",
              username: "",
              password: "",
              password2: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .min(2, "First name must be between 2 and 25 characters")
                .max(25, "First name must be between 2 and 25 characters")
                .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
                .required("First name is required"),
              lastName: Yup.string()
                .min(2, "Last name must be between 2 and 25 characters")
                .max(25, "Last name must be between 2 and 25 characters")
                .matches(/^[a-zA-Z]+$/, "Last name must contain only letters")
                .required("Last name is required"),
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
              email2: Yup.string()
                .oneOf([Yup.ref("email"), null], "Email addresses do not match")
                .required("Confirm email is required"),
              username: Yup.string()
                .min(5, "Username must be between 5 and 25 characters")
                .max(25, "Last name must be between 5 and 25 characters")
                .matches(/^[a-zA-Z0-9]+$/, "Username must contain only letters and numbers")
                .required("Username is required"),
              password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
              password2: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords do not match")
                .required("Confirm password is required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                Axios.post("http://localhost:3001/api/user/signUp", values)
                  .then((response) => {
                    console.log(response);
                  })
                  .catch((err) => {
                    console.log(err);
                    return "Something went wrong";
                  });
                setSubmitting(false);
              }, 2000);
              resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className="signUpForm" onSubmit={handleSubmit}>
                {errors.firstName && touched.firstName && (
                  <span className="alert alert-danger">{errors.firstName}</span>
                )}
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                {errors.lastName && touched.lastName && (
                  <span className="alert alert-danger">{errors.lastName}</span>
                )}
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {errors.email && touched.email && (
                  <span className="alert alert-danger">{errors.email}</span>
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email2 && touched.email2 && (
                  <span className="alert alert-danger">{errors.email2}</span>
                )}
                <input
                  type="email"
                  name="email2"
                  placeholder="Confirm email"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email2}
                />
                {errors.username && touched.username && (
                  <span className="alert alert-danger">{errors.username}</span>
                )}
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {errors.password && touched.password && (
                  <span className="alert alert-danger">{errors.password}</span>
                )}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password2 && touched.password2 && (
                  <span className="alert alert-danger">{errors.password2}</span>
                )}
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm password"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password2}
                />
                <input type="submit" name="submit" value="SUBMIT" disabled={isSubmitting} />
              </form>
            )}
          </Formik>
        </div>
        <a className="signInMessage" href="/signIn">
          Already have an account? Sign in here!
        </a>
        <br />
        <br />
        <Policies />
      </div>
    </div>
  );
};

export default SignUp;

/*{errorMessage && (
  <div>
    <p className="alert alert-danger error-text">
      {errorMessage}
    </p>
  </div>
)}
{successMessage && (
  <div>
    <p className="alert alert-success error-text">
      {successMessage}
    </p>
  </div>
)}
window.location.replace("/");
*/
