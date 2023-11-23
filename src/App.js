import logo from './logo.svg';
import './App.css';
import Completed from './components/Completed/Completed';
import UsingClass from './components/Tutorial/UsingClass';
import Counter from './components/Tutorial/Counter';
import PropsImplementation from './components/Tutorial/PropsImplementation';
import ClickEventHandler from './components/Tutorial/ClickEventHandler';
import EventBind from './components/Tutorial/EventBind';
import PostList from './components/Tutorial/Http/PostList';
import PostForm from './components/Tutorial/Http/PostForm';
import UseState from './components/Tutorial/Hooks/UseState';
import ExpTable from './components/Tutorial/Bootstrap/ExpTable';
import ChartjsOne from './components/Tutorial/ChartjsOne';
import SampleOne from './components/Backstage/SampleOne';

function App() {
  return (
    <div className="App">
      <SampleOne/>
      {/* <ChartjsOne/> */}
      
      {/* <UseState/>
      <ExpTable/> */}

    {/* <PostList/>
    <PostForm/> */}

      {/* <Completed userName="Prakash" task="Update">
        <p>This is a sample update</p>
        </Completed>
      <Completed userName="Dinesh" task="Delete">
        <button>Revert</button>
      </Completed>
      <Completed userName="Ranga" task="Re-apply"/>
      <UsingClass></UsingClass>
      <Counter/>
      <PropsImplementation userName="Prakash1" task="Update"/>
      <ClickEventHandler></ClickEventHandler>
      <EventBind/> */}

      <div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
      
    </div>
  );
}

export default App;
