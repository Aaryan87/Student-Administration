import './DisplayDashBoard.css'
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import { useNavigate } from 'react-router-dom';

function DisplayDashBoard(props){
    const history = useNavigate();
    const temp = ()=>{
        history("/studentlist");
      }
    return(
        <div>
            <NavBar/>
            <Card title="Add Student" function={temp} content="Check Here" path="/studentlist"/>
            <Card title="Add Staff" content="Check Here" path="/stafflist"/>
            <Card title="Assignment" content="Check Here" path="/file-upload"/>
        </div>
    );
}

export default DisplayDashBoard;