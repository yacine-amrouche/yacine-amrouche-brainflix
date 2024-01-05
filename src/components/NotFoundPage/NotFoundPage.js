import { Link } from "react-router-dom";
function NotFoundPage(){
    return (
        <div>404 - Page Not Found - Go back <Link to="/">Main</Link></div>
    );
}

export default NotFoundPage;