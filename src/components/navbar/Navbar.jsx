import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
// import { auth } from "@/lib/auth";

const Navbar = async () => {

    // const session = await auth();
    const session = "true";

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <div>
                <Links session={session} />
            </div>
        </div>
    )
}

export default Navbar;