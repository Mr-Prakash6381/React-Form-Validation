export default function validata(values) {
  let errors = {};

  if (!values.userName.trim()) {
    errors.userName = "Username required";
  }
  if (!values.email.trim()) {
    errors.email = "Email required";
  } else if (
    !/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/.test(values.email)
  ) {
    errors.email = "Email address is invalid";
  }
  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  if (!values.conPassword.trim()) {
    errors.conPassword = "Password is required";
  } else if (values.conPassword !== values.password) {
    errors.conPassword = "Password do not match";
  }
  return errors;
}
