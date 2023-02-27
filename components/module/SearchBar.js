import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    const router = useRouter();
    const [min , setMin] = useState('');
    const [max , setMax] = useState('');

    const searchHandler = () =>  {
        if(min , max){
            router.push(`/filter/${min}/${max}`);
        }else{
            alert("Pleas Enter a minimun and maximum price!") ;
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <input 
                    type="text"
                    placeholder="Enter min-price"
                    onChange={e => setMin(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Enter max-price" 
                    onChange={e => setMax(e.target.value)}
                />
            </div>
            <button onClick={searchHandler}>Search</button>
        </div>
    );
};

export default SearchBar;