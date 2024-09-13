import Friend from './Friend';

function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul  className="friend-list">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default FriendList;
