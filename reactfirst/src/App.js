//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <ParentComp />
      <NameList />
      {/*<Table />
      <FragmentDemo />
      <LifecycleA />
      <Form />
      <Stylesheet primary={true}/>
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Counter />
      <Message />
      <Greet name = "Shane" lastName = "Wedlock">
        <p>This is a child prop</p>
      </Greet>
      <Greet name = "John" lastName = "Murphy">
      <button>This is a button</button>
      </Greet>
      <Greet name = "John" lastName = "Dunnion"/>
      <Welcome name = "Shane" lastName = "Wedlock"/>
      <Welcome name = "John" lastName = "Murphy"/>
      <Welcome name = "John" lastName = "Dunnion"/>
      <Hello />*/}
    </div>
  );
}

export default App;
