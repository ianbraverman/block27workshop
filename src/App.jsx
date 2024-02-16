import { useState } from "react";
import TheForm from "./Form";
import AuthenticateToken from "./authenticate";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ApiResponseToken, setApiResponseToken] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState("");
  const [ApiSuccess, setApiSuccess] = useState("");

  return (
    <div>
      <TheForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        setApiResponseToken={setApiResponseToken}
        setSignUpSuccess={setSignUpSuccess}
        signUpSuccess={signUpSuccess}
      />
      <AuthenticateToken
        ApiResponseToken={ApiResponseToken}
        setApiSuccess={setApiSuccess}
      />
      <p>{ApiSuccess}</p>
    </div>
  );
}
export default App;
