import StaffFilterComponent from "../StaffFilterComponent/StaffFilterComponent";
import StaffFilterData from "../StaffFilterData/StaffFilterData";

function AllStaffFilterData({filteredRows, handleFilter}){
    <div>
            <StaffFilterData filteredData={filteredRows} />
            <StaffFilterComponent onFilter={handleFilter} />
        </div>
}

export default AllStaffFilterData;