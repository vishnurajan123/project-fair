import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { tokenAutherizationContext } from '../Contexts/TokenAuth';

function Header({insideDashboard}) {
  const {isAutherized,setIsAutherized}=useContext(tokenAutherizationContext)
  const naviage=useNavigate()
  const handleLogout=()=>{
    // remove all existing user details from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAutherized(false)
    // naviagte to landing page
    naviage('/')

  }
  return (
    <Navbar className="bg-black">
        <Container>
          <Navbar.Brand >

            <Link style={{textDecoration:"none",color:"white"}} to={'/'}>
            <div style={{ fontWeight: 'bold' }}>{' '}Project-Fair</div>
            </Link>
          
         
          </Navbar.Brand>
{insideDashboard&&
          <button onClick={handleLogout} className='btn btn-dark rounded-4'>
            Logout
          </button>}
        </Container>
      </Navbar>
  );
}

export default Header;