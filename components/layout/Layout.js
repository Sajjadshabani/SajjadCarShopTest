import Link from "next/link";
import styles from "./Layout.module.css" ;

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h1>SajjadCars</h1>    
                    <p>
                        Choose an Buy your car
                    </p>
                </Link>
            </header>  
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>SajjadCars Project &copy;</footer>
        </>
    );
};

export default Layout;