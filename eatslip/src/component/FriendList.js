import Friend from "./Friend";

function FriendList({ friends, onSelection, selectedFriend }) {
  // const friend = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        ></Friend>
      ))}
    </ul>
  );
}

export default FriendList;
