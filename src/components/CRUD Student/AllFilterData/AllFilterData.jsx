import FilterComponent from "../FilterComponent/FilterComponent";
import FilterData from "../FilterData/FilterData";


function AllFilterData({filteredRows, handleFilter}){
    
    return(
        <div>
             <FilterData filteredData={filteredRows} />
            <FilterComponent onFilter={handleFilter} />
        </div>
    );
    
}

export default AllFilterData;