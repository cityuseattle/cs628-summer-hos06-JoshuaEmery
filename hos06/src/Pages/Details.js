import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const goForward = () => {
    navigate(1);
  };
  return (
    <>
      <h2>Understanding browser router</h2>
      <p>
        In this HOS we are implementing routing using BrowserRouter. <br />
        You can learn more{" "}
        <a
          href="https://reactrouter.com/en/main/router-components/browser-router"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>
      <button onClick={goForward}>Go Forward</button>
    </>
  );
}

export default Details;
