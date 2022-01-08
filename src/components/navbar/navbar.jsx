import React, { memo, Component } from 'react';
import { Col, Row, Navbar,Nav,NavDropdown,Container, Form,Button,FormControl } from 'react-bootstrap';
import { ArchiveFill, MicFill, Search, CameraVideo, Inboxes, Bell, PersonCircle } from 'react-bootstrap-icons';

import styles from './navbar.module.css'

const Mynavbar = memo((props)=>{
  const inputRef = React.createRef();

  const getData = (event)=>{
    event.preventDefault();
    
    const searchWord = inputRef.current.value;
    // console.log(searchWord);
    
    inputRef.current.value = '';
    props.searchData(searchWord);


  }

  // const onKeyPress = (event)=>{
  //   if(event.key==='Enter'){
  //     this.getData(event)
  //   }
  // }
  
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><ArchiveFill color='red'/> ITube</Navbar.Brand>

        <Form>

          <Form.Group className={styles.search} controlId="formSearchData">
            <Form.Control className={styles.input} ref = {inputRef} type="search" placeholder="검색"/>
            <button className={styles.searchBtn} onClick={getData}>
              <Search/>
            </button>
            
          </Form.Group>

        </Form>

        <Nav className="me-auto">
          <Nav.Link className={styles.icons} href="#"><MicFill /></Nav.Link>
          <Nav.Link className={styles.icons} href="#"><CameraVideo/></Nav.Link>
          <Nav.Link className={styles.icons} href="#"><Inboxes /></Nav.Link>
          <Nav.Link className={styles.icons} href="#"><Bell /></Nav.Link>
          <Nav.Link className={styles.icons} href="#"><PersonCircle color='pink' /></Nav.Link>
  
        </Nav>

        </Container>
      </Navbar>
    </>
    )

  });


export default Mynavbar;


// import React, { Component } from 'react';
// import { ArchiveFill, MicFill, CameraVideo, Inboxes, Bell, PersonCircle } from 'react-bootstrap-icons';
// import '../index.css';

// class Mynavbar extends Component {
//   render() {
//     return (
//       <>
//         <ul className='navbar'> 
//           <h1><ArchiveFill/> ITube</h1>
          
//           <li href="#"><MicFill /></li>
//           <li href="#"><CameraVideo/></li>
//           <li href="#"><Inboxes /></li>
//           <li href="#"><Bell /></li>
//           <li href="#"><PersonCircle color='pink' /></li>

//         </ul>
//       </>
  
//     );
//   }
// }

// export default Mynavbar;