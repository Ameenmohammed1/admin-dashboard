import React,{useState,useEffect} from "react";
import "./table.css";
import DataTable, { createTheme } from "react-data-table-component";
import {useNavigate}  from 'react-router-dom'
import deleteImg from '..//../icons/delete.png'
import editImage from '../../icons/editing.png'
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

function TopProducts(prop) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const [filterData, setFilterData] = useState([])
   function getData(){
    
    return new Promise((resolve,reject)=>{
        setProducts(prop.data)
          setFilterData(prop.data)
          resolve(true)
    })
   }
   useEffect(() => {
  getData().then(()=>{
    getData()
  })
   }, []);

  function deleteProduct(productID,name){
 alert('ready')
    }
  
  function editProduct(productID){
    navigate('/admin/editProduct',{state:productID})
  }
  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <img
          src={`https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1`}
          width={50}
          height={50}
          alt=""
        />
      ),
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "language",
      selector: "language",
      sortable: true,
    },

    {
      name: "version",
      selector: (row) => row.version,
      sortable: true,
    },
    {
      name: "action",
      cell: (row) => {
        return (
          <div className="CRUDbutton">
            <button onClick={() => editProduct(row._id)}>
               <img
          src={editImage}
          width={20}
          height={20}
          alt=""
        />
            </button>
            <button onClick={() =>deleteProduct(row._id,row.name)}>
                    <img
          src={deleteImg}
          width={20}
          height={20}
          alt=""
        />
            </button>
          </div>
        );
      },
    },
  ];
  useEffect(()=>{
     getData()
  },[])
 
  useEffect(() => {
    const result = products.filter(product=>{
      return product.name.toLowerCase().match(search.toLowerCase())
    })
setFilterData(result)
  }, [search]);
  createTheme('solarized', {
    text: {
      primary: '#FFFF',
      secondary: '#FFF',
    },
    background: {
      default: '#262835',
    },
    context: {
      background: '#262835',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');
  return (
    <div>
      <div className="filterDiv">
        <input
          type="text"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          placeholder="Search User"
          className="searchFilter"
        />
      </div>
      <DataTable
       
        columns={columns}
        data={filterData}
        pagination
        highlightOnHover
        fixedHeaderScrollHeight="80vh"
        theme="solarized"
      />
       {/* <ToastContainer /> */}
    </div>
  );
}

export default TopProducts;
