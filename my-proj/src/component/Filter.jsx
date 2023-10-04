import { FilterHeader } from './FilterBar/FilterHeader';
import { FilterLocation } from './FilterBar/FilterLocation';
import { FilterLogictics } from './FilterBar/FilterLogictics';
import '../styles/SideBarFilter.css'
import 'boxicons';

export const SideBarFilter = () =>{
    return(
        <div className="shop-search-filter">
            <FilterHeader />
            <FilterLocation />
            <FilterLogictics />
        </div>
    );
}
