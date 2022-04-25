import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GlossaryItem from './GlossaryItem'
import Empty from './Empty'

export default function GlossarryList({ list }) {
  return (
    <Row className='g-3'>
      {list.length ? (
        list.map((item,index) => (
          <Col md={3} key={index}>
          <GlossaryItem label={item.label} icon={item.icon} href={item.href} />
          </Col>)
        )) : <Empty />} 
    </Row>
  )
}
