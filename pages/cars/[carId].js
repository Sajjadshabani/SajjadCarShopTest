import { useRouter } from 'next/router';
import React from 'react';
import carsData from '@/data/carsData';

const CarDetails = () => {
    const route = useRouter() ;
    const {carId} = route.query ;
    const carDetails = carsData[carId - 1] ;

    console.log(carDetails);
    return (
        <div>
            detail
        </div>
    );
};

export default CarDetails;