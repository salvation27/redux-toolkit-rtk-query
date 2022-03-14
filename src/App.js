import "./App.css";
// import {useState} from 'react'
import {useGetGoodsQuery} from './store/goodsApi'
import Post  from './components/Post/Post'


function App() {
// const [count,setCount] = useState('')
const {data=[],isLoading} = useGetGoodsQuery()

if(isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <div className="container">
        {
          data.map(item=> <Post key={item.id} item={item} />)
        }
      </div>
    </div>
  );
}

export default App;
