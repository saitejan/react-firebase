import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('users');
    this.unsubscribe = null;
    this.state = {
      users: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      const { name, description, uid } = doc.data();
      users.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        description,
        uid,
      });
    });
    this.setState({
      users
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              USERS LIST
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create">Add User</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Id</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(board =>
                  <tr key={board.key}>
                    <td><Link to={`/show/${board.key}`}>{board.name}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.uid}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;