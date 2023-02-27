import styles from "./CarsPage.module.css" ;
import Card from "../module/Card";


const Cars = ({carsData}) => {
    return (
        <div className={styles.container}>
            {
                carsData.map(car => (
                    <Card key={car.id}  {...car} />
                ))
            }
        </div>
    );
};

export default Cars;