export default function TheForm({
  username,
  setUsername,
  password,
  setPassword,
  setApiResponseToken,
  setSignUpSuccess,
  signUpSuccess,
}) {
  const signUpFetch = async (event) => {
    event.preventDefault();
    try {
      if (!username.length || !password.length) {
        throw new Error("Please Enter Username And Password");
      }
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: { username },
            password: { password },
          }),
        }
      );
      const parsedResponse = await response.json();
      setApiResponseToken(parsedResponse.token);
      setSignUpSuccess(parsedResponse.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form>
        <label>
          Username:
          <input
            type="string"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="string"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button onClick={(event) => signUpFetch(event)}>Sign Up</button>
      </form>
      <div>{signUpSuccess ? <p>Successfully Signed Up!</p> : <p></p>}</div>
    </>
  );
}
