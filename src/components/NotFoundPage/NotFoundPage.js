import { Link } from "react-router-dom";
function NotFoundPage(){
    return (
        <div>404 - Page Not Found - Go back to main page <Link to="/">Main</Link></div>
    );
}

export default NotFoundPage;