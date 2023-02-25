import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case "DELETE":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
    default:
      return state
  }
}

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Zaur",
        department: "Development",
        salary: 1000
      },
      {
        id: 2,
        name: "Turan",
        department: "Lazy",
        salary: 100
      },
      {
        id: 3,
        name: "Parvin",
        department: "PHP Master",
        salary: 10000
      },
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;