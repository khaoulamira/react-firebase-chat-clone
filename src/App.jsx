import Chat from "./components/chat/chat"
import List from "./components/chat/list/list"
import Details from "./components/details/details"

const App = () => {
  return (
    <div className="blur-overlay">
      <div className='container'>
      <List/>
        <Chat />
        <Details /> 
       
      </div>
    </div>
  )
}

export default App