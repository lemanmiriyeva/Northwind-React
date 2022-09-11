import {React,useState,useEffect} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const ProductList = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
    useEffect(() => {
      const loadProducts = async () => {
        setLoading(true);
        const response = await axios.get(
          "http://my-json-server.typicode.com/epam-dotnet-lab/northwind-rest-api/products"
        );
        setProducts(response.data);
        setLoading(false);
      };
  
      loadProducts();
    }, []);
  
    return (
      <div>
        <Container fluid>
        <h2 className="mt-4 mb-3">Products</h2>
        <hr className='mb-4'/>
        <input
          style={{ width: "50%", height: "45px" }}
          type="text"
          placeholder="Search by product name"
          onChange={(e) => setSearchTitle(e.target.value)}
          className="form-control"
        />
        <Table striped bordered hover className='mt-5'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Supplier Id</th>
                    <th>Category Id</th>
                    <th>Quantity Per Unit</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Units On Order</th>
                    <th>Reorder Level</th>
                    <th>Discounted</th>
                </tr>
            </thead>
            <tbody>
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          products
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.productName.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
           .map((item) => <tr key={item.productId}>
            <td>{item.productId}</td>
            <td>{item.productName}</td>
            <td>{item.supplierId}</td>
            <td>{item.categoryId}</td>
            <td>{item.quantityPerUnit}</td>
            <td>{item.unitPrice}</td>
            <td>{item.unitsInStock}</td>
            <td>{item.unitsOnOrder}</td>
            <td>{item.reorderLevel}</td>
            <td>{item.discounted}</td>
           </tr>)
        )} </tbody>
        </Table></Container></div>
    );
  }

export default ProductList
