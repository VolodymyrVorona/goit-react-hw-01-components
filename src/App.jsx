import Section from './components/Section/Section';
import Profile from './components/Profile/Prfile';
import user from './Data/user.json';
import Statistics from './components/Statistics/Statistics';
import statistics from './Data/statistics.json';

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
    </>
  );
}

export default App;
