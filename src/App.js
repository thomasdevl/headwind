import SideBar from './components/SideBar';
import ChannelBar from './components/ChannelBar';
import TopNavigation from './components/ChatBar';

function App() {
  return (
    <div className="flex ">
      <SideBar />
      <ChannelBar />
      <TopNavigation />
    </div>
  );
};

export default App;
