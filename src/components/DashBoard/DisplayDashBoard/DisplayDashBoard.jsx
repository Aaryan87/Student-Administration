import './DisplayDashBoard.css'
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";

function DisplayDashBoard(){
    return(
        <div>
            <NavBar/>
            <Card title="Add Student" content="Check Here" />
            <Card title="Add Staff" content="Check Here" />
            <Card title="Assignment" content="Check Here" />
        </div>
    );
}

export default DisplayDashBoard;