import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import axios from "axios"
function App() {
  const [productList, setProductList] = useState([])
  const fetchData = async () => {
    try {
      let res = await axios.get("http://localhost:3000/getProductAll",{
        timeout: 30000
      })
      if (res.data.rs) {
        console.log(res.data.data)
        setProductList(res.data.data)
      }
      // console.log(res);
    } catch(e) {
      console.log(e)
    }
  }

  useEffect( () => fetchData,[])
  return (<table>
    <tbody>
    <tr>
      <th>Product</th>
      <th>Product Name</th>
      <th>Slug</th>
      <th>Description</th>
      <th>Price</th>
    </tr>
    {productList.map((v) => <tr key={v?._id}>
      <td>{v?._id}</td>
      <td>{v?.name}</td>
      <td>{v?.slug}</td>
      <td>{v?.description}</td>
      <td>{v?.price}</td>
    </tr>)}
    </tbody>
    </table>
  );
}

export default App;
