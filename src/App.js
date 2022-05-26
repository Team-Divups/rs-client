import {Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/General/Footer/Footer';
import Sidebar from './Components/General/Sidebar/SideBar';
import AddUser from "./Components/Modules/User/AddUser";

function App() {
  return (
    <>
    <Row>
      <Col sm={4}>
      <Sidebar/>
      </Col>
      <Col sm={5}>
        <AddUser/>
      </Col>
    </Row>
    <Footer/>
    </>
  );
}

export default App;
