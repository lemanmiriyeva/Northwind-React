import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProductList from '../Products/ProductList'
import Categories from '../Categories/Categories'
import Customers from '../Customers/Customers'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function NavMenu() {
  return (
    <>
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Northwind React</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to='/' href="#home">Products</Nav.Link>
            <Nav.Link as={Link} to='/categories' href="#categories">Categories</Nav.Link>
            <Nav.Link as={Link} to='/customers' href="#customers">Customers</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
          <Route path="/" element={  <ProductList/>}>
            
          </Route>
          <Route path="categories" element={  <Categories />}>
            
          </Route>
          <Route path="customers" element={  <Customers />}>
            
          </Route>
          
          
        </Routes>
      </Router>
    </>
  );
}

export default NavMenu