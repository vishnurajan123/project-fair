import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import Profile from '../Components/Profile'
import MyProject from '../Components/MyProject'

function Dashboard() {
  return (
    <div>
      <Header insideDashboard/>
      <Row style={{marginTop:"100px"}} className='container-fluid'>
        <Col  sm={12} md={8} >
          <h2>Welcome <span className='text-warning'>User</span></h2>
          {/* my projects */}
<MyProject/>
        </Col>
        <Col className='d-flex justify-content-center ' sm={12} md={4}  >
      <Profile/>
        </Col>

      </Row>
    </div>
  )
}

export default Dashboard
