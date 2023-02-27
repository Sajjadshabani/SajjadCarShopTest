import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import Cars from "@/components/template/CarsPage";
import carsData from "@/data/carsData";



const Details = () => {
    return (
        <div>
            <SearchBar/>
            <Categories/>
            <Cars carsData={carsData} />
        </div>
    );
};

export default Details;