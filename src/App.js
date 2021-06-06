import Profile from './Components/Profile/Prfile';
import Statistics from './Components/Statistics/Statistics';
import FriendsList from './Components/Friends/FriendsList';

import user from './Data/user.json';
import statistics from './Data/statistics.json';
import friends from './Data/friends.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />

      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
