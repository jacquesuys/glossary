import React from 'react'
import { Row,Col } from 'react-bootstrap'
import styles from './GlossaryItem.module.css'

export default function GlossaryItem({ label, href, icon }) {
  return (
    <a href={href} rel="noreferrer" target='_blank' className={styles.item}>
      <Row className='h-100 align-items-center'>
        <Col xs='auto'>
          <img alt={label} src={icon} className={styles.item_image} />
        </Col>
        <Col>
          <div className={styles.item_label}>{label}</div>
        </Col>
      </Row>
    </a>
  )
}
