
import './App.css';
import Header from './Header';
import List1 from './List1';
import List2 from './List2';
import List3 from './List3';
import List4 from './List4';
import List5 from './List5';
import { List6 } from './List6';
import List7 from './List7';

function App() {
  return (
    <>
    <Header />
    <div className='boxApp' >
    <List1 />
    <List2 />
    <List3 />
    </div>
    <div className='boxApp'>
    <List4 />
    <List5 />
    <List6 />
    </div>
    <div className='boxApp'>
    <List7 />
    </div>
    </>
  );
}

export default App;
