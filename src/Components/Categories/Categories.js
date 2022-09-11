import {React,useState,useEffect} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const Categories = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
    useEffect(() => {
      const loadCategories = async () => {
        setLoading(true);
        const response = await axios.get(
          "http://my-json-server.typicode.com/epam-dotnet-lab/northwind-rest-api/categories"
        );
        setCategories(response.data);
        setLoading(false);
      };
  
      loadCategories();
    }, []);
  
    return (
      <div>
        <Container fluid>
        <h2 className="mt-4 mb-3">Categories</h2>
        <hr className='mb-4'/>
        <input
          style={{ width: "50%", height: "45px" }}
          type="text"
          placeholder="Search by category name"
          onChange={(e) => setSearchTitle(e.target.value)}
          className="form-control"
        />
        <Table striped bordered hover className='mt-5'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Category Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          categories
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.categoryName.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
           .map((item) => <tr key={item.categoryId}>
            <td>{item.categoryId}</td>
            <td>{item.categoryName}</td>
            <td>{item.description}</td>
           </tr>)
        )} </tbody>
        </Table></Container></div>
    );
  }

export default Categories
