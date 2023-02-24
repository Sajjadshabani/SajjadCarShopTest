import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarsList from "@/components/template/CarsList";

const Categories = () => {

    const router = useRouter() ;
    const {categori} = router.query ;
    const categoriCars = carsData.filter(car => car.category === categori) ;

    return (
        <CarsList data={categoriCars} />
    );
};

export default Categories;