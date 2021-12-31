import React, {useContext} from "react";
import { DocumentContext } from "./DocumentProvider";
import { Form, Col } from "react-bootstrap";

export const DocumentSearch = () => {

    const {setSearchTerms} = useContext(DocumentContext)
//react bootstrap classname.my = margin 

    return ( 
        <Form>
              {/* <Row className="align-items-center"> */}
              {/* react bootstrap classname.my = margin column size for small pix display*/}
                <Col sm="auto" className="my-1 align-items-center">
                    <Form.Label htmlFor="inlineFormInputName" >Search documents </Form.Label>
                    <Form.Control id="inlineFormInputName" placeHolder="search for a document.." onKeyUp={(event) => setSearchTerms(event.target.value)}></Form.Control>
                </Col>

                {/* <Col xs="auto" className="my-1">
                  <Button className=" btn-secondary" onClick={()=> {navigate(`/`)}}>Home</Button>
                </Col> */}
              {/* </Row> */}
        </Form>
    )
}