import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData/User_Info.json';
import AddFriend from '../AddFriend/AddFriend';
import '../UserProfile/UserProfile.css';
import UserProfileDisplay from '../UserProfileDisplay/UserProfileDisplay';
const UserProfile = (props) => {
	const [users, setUsers] = useState([]);
	// const [count, setCount] = useState([]);
	const [addFriend, setAddFriend] = useState([]);

	// console.log(fakeData);
	useEffect(() => {
		setUsers(fakeData);
	}, []);

	// const HandleFriendCount = () => {
	// 	setCount(count + 1);
	// };
	const HandleFriendCount = (user) => {
		const newAddFriend = [...addFriend, user];
		setAddFriend(newAddFriend);
		//console.log(user);
	};

	return (
		<div className='main'>
			<div className='main-profile'>
				<ul>
					<h1>Users Profile</h1>
					{users.map((user) => (
						// <li>{user.first_name + ' ' + user.last_name}</li>

						<UserProfileDisplay
							user={user}
							HandleFriendCount={HandleFriendCount}
							key={user.id}></UserProfileDisplay>
					))}
				</ul>
			</div>
			<div className='add-friend'>
				<AddFriend
					addFriend={addFriend}
					HandleFriendCount={HandleFriendCount}></AddFriend>
			</div>
		</div>
	);
};

export default UserProfile;
