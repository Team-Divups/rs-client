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
import { useState } from "react";


const AddUser = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[position,setPosition]=useState("");
  const[role,setRole]=useState("");


  const displayinfo = () =>{
    console.log(name+email+password+position+role);
  }

  return(
    <>
    <Container>
    <ContainerWrap>
      <ContainerHeading style={{textAlign:'center'}}>Site Management</ContainerHeading>
    </ContainerWrap>
     
    <ContainerBox>
       <ContainerHeading style={{fontSize:'15px'}}>Add New Site</ContainerHeading>

       <InputBox>
       <Form>
        <Form.Group controlId="form.Name">
            <Form.Label><ContainerText >Site Name</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1}
            type='text' 
            onChange={(event)=>{
              setName(event.target.value);
            }} />
        </Form.Group><br/>

        <Form.Group controlId="form.Email">
            <Form.Label><ContainerText>Site Owner</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1}
            type='text' 
            onChange={(event)=>{
              setEmail(event.target.value);
            }}/>
        </Form.Group><br/>

        <Form.Group controlId="form.Email">
            <Form.Label><ContainerText>Password</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            onChange={(event)=>{
              setPassword(event.target.value);
            }}/>
        </Form.Group><br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Designation</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            onChange={(event)=>{
              setPosition(event.target.value);
            }}
            />
        </Form.Group><br/>

        <Form.Group controlId="form.Textarea">
            <Form.Label><ContainerText>Role</ContainerText></Form.Label>
            <Form.Control as="textarea" rows={1} 
            type='text' 
            onChange={(event)=>{
              setRole(event.target.value);
            }}
            />
        </Form.Group>
      </Form>
       </InputBox>

      <br/>
    
      <Button1 size="sm" onClick={displayinfo}>Add</Button1>
      <Button2 size="sm">Discard</Button2>

    </ContainerBox>
    </Container>
    </>
  );
};

export default AddUser;