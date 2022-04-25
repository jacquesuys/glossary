import React from 'react'
import { Row, Col} from 'react-bootstrap'

export default function Empty() {
  return (
    <Row className='g-3'>
      <Col md={12} className="text-center">
        Nothing Found. Try a different search term...
      </Col>
    </Row>
  )
}
