import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers, addUser, deleteUser } from '../actions/userActions';

class Users extends Component {

  state = {
    name:''
  }

  onNameChange = (event) => {
    event.preventDefault();
    this.setState({ name:event.target.value });
  }

  addName = (event) => {
    event.preventDefault();
    if (!this.state.name) {
      return;
    }
    this.props.addUser(this.state.name);
    this.setState({ name:'' });
  }

  deleteName = (event, id) => {
    event.preventDefault();
    this.props.deleteUser(id);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {

    const { name } = this.state;
    const { users } = this.props.users;

    return (
      <div>
        <h3>Add User</h3>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name" value={name} onChange={this.onNameChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-success" onClick={this.addName}>Add</button>
        </div>
        {
          users
          ? users.map((user, index) => {
            return <div>
                  <h2 key={user.id}>
                    {user.name}
                    <button
                      onClick={(event) => this.deleteName(event, index)} 
                      className="btn btn-sm btn-danger float-right">Delete</button>
                  </h2>
                  </div>
          }): null
        }

        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users:state.users
});

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ getUsers: getUsers }, dispatch)
}

export default connect(mapStateToProps, { getUsers, addUser, deleteUser })(Users);
// export default connect(mapStateToProps, matchDispatchToProps)(Users);
