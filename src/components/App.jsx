import user from 'mocks/user.json';
import { Profile } from './Profile/Profile';

import data from 'mocks/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from 'mocks/friends.json';
import { FriendsList } from './FriendsList/FriendsList';

import items from 'mocks/transactions.json';
import { Transactions } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        width: '500px',
        padding: '0 50px',
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        alignItems: 'center',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <Transactions items={items} />
    </div>
  );
};
