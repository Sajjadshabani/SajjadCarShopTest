import Link from "next/link";
import styles from "./AllCarsButton.module.css" ;

const AllCarsButton = () => {
    return (
        <div className={styles.container}>
            <Link href='/cars' >See all cars</Link>
        </div>
    );
};

export default AllCarsButton;