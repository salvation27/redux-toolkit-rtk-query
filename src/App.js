import "./App.css";
import {useState} from 'react'
import {useGetGoodsQuery} from './store/goodsApi'
import Post  from './components/Post/Post'


function App() {
const [count,setCount] = useState('')
const {data=[],isLoading} = useGetGoodsQuery(count)

if(isLoading) return <h1>Loading...</h1>

const selectChange = (e) =>  setCount(e.target.value)

  return (
    <div className="App">
      <div className="container">
    
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
