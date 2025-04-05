import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>Not Found URL</h1>
            <Link to="/">
                <h2>Back to Home</h2>
            </Link>
        </>
    )
  };
  
  export default NotFound;