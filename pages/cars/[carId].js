import { useRouter } from 'next/router';

// Car Data 
import carsData from '@/data/carsData';

// Template
import CarDetails from '@/components/template/CarDetails';

const CarDetail= () => {
    const route = useRouter() ;
    const {carId} = route.query ;
    const carDetails = carsData[carId - 1] ;

    console.log(carDetails);
    return (
        <CarDetails {...carDetails} />
    );
};

export default CarDetail;