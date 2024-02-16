export default function AuthenticateToken({ ApiResponseToken, setApiSuccess }) {
  const authenticateFetch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ApiResponseToken}`,
          },
        }
      );
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      setApiSuccess(parsedResponse.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={(event) => authenticateFetch(event)}>Authenticate</button>
  );
}
