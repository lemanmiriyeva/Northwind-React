import {React,useState,useEffect} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const Customers = () => {
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
    useEffect(() => {
      const loadCustomers = async () => {
        setLoading(true);
        const response = await axios.get(
          "http://my-json-server.typicode.com/epam-dotnet-lab/northwind-rest-api/customers"
        );
        setCustomers(response.data);
        setLoading(false);
      };
  
      loadCustomers();
    }, []);
  
    return (
      <div>
        <Container fluid>
        <h2 className="mt-4 mb-3">Customers</h2>
        <hr className='mb-4'/>
        <input
          style={{ width: "50%", height: "45px" }}
          type="text"
          placeholder="Search by customer name"
          onChange={(e) => setSearchTitle(e.target.value)}
          className="form-control"
        />
        <Table striped bordered hover className='mt-5'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Postal Code</th>
                    <th>Country</th>
                    <th>Phone</th>
                    <th>Region</th>
                    <th>Fax</th>
                </tr>
            </thead>
            <tbody>
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          customers
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.contactName.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
           .map((item) => <tr key={item.customerId}>
            <td>{item.customerId}</td>
            <td>{item.companyName}</td>
            <td>{item.contactName}</td>
            <td>{item.contactTitle}</td>
            <td>{item.address}</td>
            <td>{item.city}</td>
            <td>{item.postalCode}</td>
            <td>{item.country}</td>
            <td>{item.phone}</td>
            <td>{item.region}</td>
            <td>{item.fax}</td>
           </tr>)
        )} </tbody>
        </Table></Container></div>
    );
  }

export default Customers
