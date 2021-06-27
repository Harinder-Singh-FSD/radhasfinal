import React from 'react'
import { Row ,Col} from 'react-bootstrap'

const CourseCardMiddle = ({item}) => {
    let {title,content} = item
    return (
        <Row>
           <Col lg={3}>
               <h1>{title}</h1>
           </Col> 
           <Col lg={6}>
               {content}
           </Col> 
        </Row>
    )
}

export default CourseCardMiddle
