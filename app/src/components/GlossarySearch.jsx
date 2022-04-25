import React from 'react'
import { Form, Row, Col, CloseButton } from 'react-bootstrap'

export default function GlossarySearch({ value, setSearch }) {
  return (
    <Row>
      <Col md={11}>
        <Form.Control
          value={value}
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearch({type: "search", value: event.target.value})
          }}
        />
      </Col>
      <Col md={1}>
        <CloseButton
          className="bg-light align-middle"
          onClick={() => {
            setSearch({type: "search", value: ""})
          }}
        />
      </Col>
    </Row>
  )
}
