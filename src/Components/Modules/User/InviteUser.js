import { Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  ContainerHeading,
  ContainerText,
  ContainerWrap,
  ContainerBox,
  InputBox,
  Button1,
  Button2
} from './UserStyles';


const AddUser = () => {
  return(
    <>
    <Container>
    <ContainerWrap>
      <ContainerHeading style={{textAlign:'center'}}>User Management</ContainerHeading>
    </ContainerWrap>
     
    <ContainerBox>
       <ContainerHeading style={{fontSize:'15px'}}>Invite New User</ContainerHeading>

       <InputBox>
       <Form>
        <Form.Group controlId="form.Name">
            <Form.Label><ContainerText >User Name</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} />
        </Form.Group><br/>
        <Form.Group controlId="form.Email">
            <Form.Label><ContainerText>User Email</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} />
        </Form.Group><br/>
        <Form.Group controlId="form.Email">
            <Form.Label><ContainerText>Password</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} />
        </Form.Group><br/>
        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Designation</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} />
        </Form.Group><br/>
        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Special Comments</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={5} />
        </Form.Group>
      </Form>
       </InputBox>

      <br/>
    
      <Button1 size="sm">Invite</Button1>
      <Button2 size="sm">Back</Button2>

    </ContainerBox>
    </Container>
    </>
  );
};

export default AddUser;