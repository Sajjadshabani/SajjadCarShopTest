import { useRouter } from 'next/router';

import carsData from '@/data/carsData';
import CarsList from '@/components/template/CarsList';
const filtersCars = () => {

    const router = useRouter();
    const filters = router.query.slug || [];
    

    const [min , max ] = filters ;
    
    const carsFilters = carsData.filter(car => min < car.price && car.price < max) ;

    if(!carsFilters.length) return <h3>Not Found</h3>;

    return <CarsList data={carsFilters}/>;
};

export default filtersCars;