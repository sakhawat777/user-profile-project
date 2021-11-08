import React from 'react';
import '../UserProfileDisplay/UserProfileDisplay.css';
const UserProfileDisplay = (props) => {
	const user = props.user;
	// console.log(user);
	const HandleFriendCount = props.HandleFriendCount;

	// let totalAnnualIncome = 0;
	// for (let i = 0; i < user.length; i++) {
	// 	const income = user[i];
	// 	total = total + income.annual_income;
	// }
	// const totalAnnualIncome = user.reduce(
	// 	(total, income) => total + income.annual_income,
	// 	0
	// );
	return (
		<div>
			<div className='user-profile'>
				<div className='user-img'>
					<img src={user.img} alt='' />
				</div>

				<div className='user-info'>
					<h3>{'User Name: ' + user.first_name + ' ' + user.last_name}</h3>
					<h4>{'Cell_No: ' + user.phone_no}</h4>
					<h5>{'E-Mail: ' + user.email}</h5>
					<h5>{'Annual_Income: ' + user.annual_income + ' TK'}</h5>
					<h5>{'Address: ' + user.address}</h5>
					<button
						onClick={() => HandleFriendCount(props.user.annual_income)}>
						Add Friend
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserProfileDisplay;
