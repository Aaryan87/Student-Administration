import './DisplayDashBoard.css'
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import { useNavigate } from 'react-router-dom';

function DisplayDashBoard(props){
    const history = useNavigate();
    const temp = ()=>{
        history("/studentlist")
      }
    return(
        <div>
            <NavBar/>
            <Card title="Add Student" function={temp} content="Check Here"  />
            <Card title="Add Staff" content="Check Here" />
            <Card title="Assignment" content="Check Here" />
        </div>
    );
}

export default DisplayDashBoard;