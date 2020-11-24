import Profile from "./components/Profile";
import user from "./user.json";
import StatList from "./components/statList";
import statisticalData from "./statistical-data.json"
import FriendList from "./components/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./transactions.json";



export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatList title="Upload stats" stats={statisticalData} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>

  );
}

// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';

// export default function App() {
//   return (
//     <div>
//       <Section title="Топ недели">
//         <PaintingList items={paintings} />
//       </Section>

//       <Section title="Лучшее"></Section>
//     </div>
//   );
// }