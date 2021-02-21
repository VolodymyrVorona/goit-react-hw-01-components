import Section from './components/Section/Section';
import Profile from './components/Profile/Prfile';
import user from './Data/user.json';

function App() {
  return (
    <Section title="Завдання № 1">
      <div className="App">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
    </Section>
  );
}

export default App;
