import AllCarsButton from "@/components/module/AllCarsButton";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import Cars from "@/components/template/CarsPage";

import carsData from "@/data/carsData";



const Index = () => {

    const carsfirst = carsData.slice(0,3) ;

    return (
        <div>
            <SearchBar/>
            <Categories/>
            <AllCarsButton/>
            <Cars carsData={carsfirst}/>
        </div>
    );
};

export default Index;