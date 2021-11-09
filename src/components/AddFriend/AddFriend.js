import React from 'react';
import '../AddFriend/AddFriend.css';

const AddFriend = (props) => {
	// const count = props.count;
	

	const addFriend = props.addFriend;
	console.log(addFriend);
	
	//  let totalAnnualIncome = 0;
	// for (let i = 0; i < addFriend.length; i++) {
	// 	const income = addFriend[i];
	// 	totalAnnualIncome = totalAnnualIncome + income;
	// }
	const totalAnnualIncome = addFriend.reduce(
			(sum, currentValue) => sum + currentValue,
			0
		);
	return (
		<div className='add-friend-info'>
			<h2>Add Friend Info. </h2>
			<h4>Total Add Friend: {addFriend.length}</h4>
			<h4>Total Annual Income: {totalAnnualIncome} TK </h4>
			
		</div>
	);
};

export default AddFriend;
