import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Penny Tague',
			image:
				'https://media.vanityfair.com/photos/5d669dc5b5890000082acd6b/master/w_2560%2Cc_limit/Trump32.jpg',
			places: 3
		}
	];

	return <UsersList items={USERS} />;
};

export default Users;
