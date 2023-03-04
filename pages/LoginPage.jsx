import { useLogin } from "react-admin";

const MyLoginForm = () => {
  const login = useLogin();
  const redirectTo = window.location.toString();

  const handleSubmit = (event) => {
    login(
      {
        email: event.target.email.value,
        password: event.target.password.value,
      },
      redirectTo
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default MyLoginForm;
