
import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import homeIcon from './assets/home.svg'
import saveIcon from './assets/bookmark.svg'
import upgradeIcon from './assets/rocket.svg'
function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='logoSide'>
            <img src={gptLogo} alt='' className='logo'></img>
            <span className='brand'>Chat GPT clone</span>
          </div>
          <button className='midButton'>
            <img src={addBtn} alt='' className='addButton'></img> New Chat
          </button>
          <div className='queryList'>
            <button className='query'>
            <img src={msgIcon} alt='' className='msgButton'></img>
              What is programming?
            </button>
            <button className='query'>
            <img src={msgIcon} alt='' className='msgButton'></img>
              How to use an API?
            </button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'>
            <img src={homeIcon} alt='' className='listItemsImg'></img>Home
          </div>
          <div className='listItems'>
            <img src={saveIcon} alt='' className='listItemsImg'></img>Save
          </div>
          <div className='listItems'>
            <img src={upgradeIcon} alt='' className='listItemsImg'></img>Upgrade to Pro
          </div>
        </div>
      </div>
      <div className='main'></div>

    </div>
  );
}

export default App;
