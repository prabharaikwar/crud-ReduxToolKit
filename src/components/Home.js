import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {  removeUser,getUser } from '../services/reducer/reducer';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
   const Data = useSelector((state) =>state.users.allUsers);
console.log(Data)

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        dispatch(getUser(res.data))
    })
  },[dispatch])

  const handleDelete = async (userId) => {

    dispatch(removeUser(userId));
  
  };
  

  return (
       <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((user,index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <Button variant="info" onClick={() => navigate(`/edit/${user.id}`)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(user.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </Container>
   );
};

export default Home;
