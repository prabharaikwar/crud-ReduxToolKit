import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Container, Button } from 'react-bootstrap';
import { editUser } from '../services/reducer/reducer'
import { useDispatch, useSelector } from 'react-redux';

const EditUser = () => {
  const { id } = useParams(); // to get prefilled data in the input

  const data = useSelector((state) =>state.users.allUsers);

  const [inputData, setInputData] = useState({
    id: '',
    name: '',
    username: ''
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();

   useEffect(()=>{
    console.log(data,'data-edit')
    const toEdit = data.find((item)=> item.id === parseInt(id))
    console.log(toEdit,'toedit')
    setInputData({
      ...toEdit
    })
   },[data, id])


  const handleEditUser = () => {
    // Dispatch the editUser action with the updated data
    dispatch(editUser({ id: parseInt(id), inputData }));

    // Navigate back after editing
    navigate('/');
  };

  return (
    <Container className=''>
      <Form style={{ width: "50%" }}>
        <Form.Group >
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Id" value={inputData.id} onChange={e => setInputData({ ...inputData, id: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" value={inputData.name} onChange={e => setInputData({ ...inputData, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Body" value={inputData.username} onChange={e => setInputData({ ...inputData, username: e.target.value })} />
        </Form.Group>
      </Form>
      <Button onClick={() => { navigate('/') }} className='me-2' variant="outline-secondary">Back</Button>
      <Button onClick={() => { handleEditUser(inputData.id) }} variant="outline-warning">Edit User</Button>
    </Container>
  )
}

export default EditUser;