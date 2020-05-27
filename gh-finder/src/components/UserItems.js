import React, { Component } from 'react';
import UserItem from './UserItem';

export class UserItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 'id',
                    login: 'reee',
                    avatar: 'rreeeeeee',
                    url: 'https://github.com/gofuckyourself',
                },
                {
                    id: 'id',
                    login: 'reee',
                    avatar: 'rreeeeeee',
                    url: 'https://github.com/gofuckyourself',
                },
                {
                    id: 'id',
                    login: 'reee',
                    avatar: 'rreeeeeee',
                    url: 'https://github.com/gofuckyourself',
                },
            ],
        };
    }

    render() {
        const { users } = this.state;
        return (
            <div
                className="userItems"
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat( auto-fit, minmax(250px, 1fr))',
                    textAlign: 'center'
                }}
            >
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

export default UserItems;
