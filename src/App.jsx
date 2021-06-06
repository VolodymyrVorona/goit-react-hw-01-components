import Section from './components/Section/Section';
import Profile from './components/Profile/Prfile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/Friends/FriendsList';
import Transactions from './components/Transactions/Transactions';

import user from './Data/user.json';
import statistics from './Data/statistics.json';
import friends from './Data/friends';
import transactions from './Data/transactions';

function App() {
  return (
    <>
      <Section title="Завдання № 1">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Завдання № 2">
        <Statistics title="Upload stats" stats={statistics} />
        <Statistics stats={statistics} />
      </Section>

      <Section title="Завдання № 3">
        <FriendsList friends={friends} />
      </Section>

      <Section title="Завдання № 4">
        <Transactions items={transactions} />
      </Section>
    </>
  );
}

export default App;
