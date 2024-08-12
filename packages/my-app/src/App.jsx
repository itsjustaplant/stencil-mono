import './App.css'
import { LeafComponent, ParentComponent, defineCustomElements } from 'plants-react-library';


defineCustomElements();
function App() {
  return (
    <>
      <ParentComponent>
        <LeafComponent onClick={(e) => {
          console.log('leaf click');
          e.stopPropagation();
          e.preventDefault();
        }}/>
        </ParentComponent>
    </>
  )
}

export default App
