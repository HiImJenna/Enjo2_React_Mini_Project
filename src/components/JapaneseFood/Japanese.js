import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Data from './data';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
// import Detail from './componets/Detail';

function Japanese() {

  let [data, setData] = useState(Data);

  console.log(Data);  
    let navigate = useNavigate();

  return (
    <Card className="text-center" >
      <div className='container'>
      <div className='row'>
      {data.map((item, i) => {
          return (
            <>
              <div className='col-md-4'>
                <Card.Body>
                  <Card.Title><h3>{item.title}</h3></Card.Title>
                  <Card.Text>
                    <img width="100%" height="400px" 

                        onClick={() => {
                          navigate(`/detail/${item.id}`);
                        }}
                        src={item.img}
                    />
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{item.content}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link onClick={() => {
                          navigate(`/detail/${data.id}`);
                        }}>상세보기
                  </Card.Link>
                </Card.Body> 
              </div>   
           </>
          );
        })}
        </div>
        </div>
    </Card>
  )}

export default Japanese;