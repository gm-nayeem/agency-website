import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>merndev</div>
            <div className={styles.text}>
                Mern creative thoughts agency © All rights reserved.
            </div>
        </div>
    );
};

export default Footer;