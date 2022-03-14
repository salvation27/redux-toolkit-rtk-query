import "./App.css";
import {useState} from 'react'
import {useGetGoodsQuery,useAddProductMutation} from './store/goodsApi'
import Post  from './components/Post/Post'


function App() {
const [count,setCount] = useState('')
const [newProduct,setNewProduct] = useState('')
const {data=[],isLoading} = useGetGoodsQuery(count)
const [addProduct,{isError}] = useAddProductMutation()

const hanelAddProduct = async () => {
 if(newProduct) {
   await addProduct({
     name:newProduct
   }).unwrap()
   setNewProduct('')
 }
}

if(isLoading) return <h1>Loading...</h1>

const selectChange = (e) =>  setCount(e.target.value)

  return (
    <div className="App">
      <div className="container">
    <input type="text" value={newProduct} onChange={(e)=>setNewProduct(e.target.value)}/>
    <button onClick={hanelAddProduct}>ADD PRODUCT</button>
        {
          data.map(item=> <Post key={item.id} item={item} />)
        }
        <div>
       <select name="select" id="" value={count} onChange={selectChange}>
         <option value="">all</option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
      </div>
      </div>
    </div>
  );
}

export default App;
