import React from 'react';
import ContactFormModal from './Components/ContactFormModal';
import { Button, Thumbnail, Col } from 'react-bootstrap';

const Student = ({gender,name,availability,skills,city,OnClickAdd,image}) => (
    <Col xs={1} md={4}>
      <Thumbnail >
        {/* <Image src={image} width="150px" height="150px" circle /> */}
        <div className='student-image' style={{ backgroundImage: `url(${image})` }} > </div>
        <h2>{name}</h2>
        <h3>City: {city}</h3>
        <h3>Availability: </h3>
        <p>{availability}</p>
        <h3>Skills: </h3>
        <p>#{skills.join(' #')}</p>
        {/* <p> {skills.map((s) =>
            <p>#{ ' ' + skills.s}</p>
          ) 
        } 
        </p> */}
        <hr />
        <p>
        {/* <Button bsStyle="primary">See More</Button>&nbsp; */}
        <ContactFormModal name={name} />
        <Button bsStyle="success" onClick={OnClickAdd}>Add to list</Button>
        </p>
      </Thumbnail>
    </Col>
  );

  export default Student;