import Profile from './components/Profile/profile';
import user from './data/user.json';

import Statistics from './components/Statistics/statistics';
import data from './data/data.json';

import FriendList from './components/FriendList/friendList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
