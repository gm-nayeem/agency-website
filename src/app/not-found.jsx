import Link from "next/link";

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href="/" >Return To Home</Link>
        </div>
    )
}

export default NotFound;