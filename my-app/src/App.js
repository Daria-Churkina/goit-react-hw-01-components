import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import StatList from './components/Statistic/statList/statList';
import statisticalData from './components/Statistic/statistical-data.json';
import FriendList from './components/FriendList/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/Transaction/TransactionHistory/TransactionHistory';
import transactions from './components/Transaction/transactions.json';

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
