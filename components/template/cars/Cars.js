import styles from "./Cars.module.css" ;
import carsData from "@/data/carsData";

const Cars = () => {
    return (
        <div className={styles.container}>
            {
                carsData.map(car => (
                    <p>{car.name}</p>
                ))
            }
        </div>
    );
};

export default Cars;