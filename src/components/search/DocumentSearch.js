import React, {useContext} from "react";
import { DocumentContext } from "../documents/DocumentProvider";
// import { Form, Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const DocumentSearch = () => {

    const {setSearchTerms} = useContext(DocumentContext)
//react bootstrap classname.my = margin 

    return ( 
      <div id="bgGrad">
        <div id="content">
          
              <p className="input__title">Document search here:</p>
       
         <input type="text"
        className="input__wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an document... " />
        
    </div>
 
        <div id="sizeControl2"></div>
      </div>
        // <Form>
        //       {/* <Row className="align-items-center"> */}
        //       {/* react bootstrap classname.my = margin column size for small pix display*/}
        //         <Col sm="auto" className="my-1 align-items-center">
        //             <Form.Label htmlFor="inlineFormInputName" >Search documents </Form.Label>
        //             <Form.Control id="inlineFormInputName" placeholder="search for a document.." onKeyUp={(event) => setSearchTerms(event.target.value)}></Form.Control>
        //         </Col>

        //         {/* <Col xs="auto" className="my-1">
        //           <Button className=" btn-secondary" onClick={()=> {navigate(`/`)}}>Home</Button>
        //         </Col> */}
        //       {/* </Row> */}
        // </Form>
    )
}