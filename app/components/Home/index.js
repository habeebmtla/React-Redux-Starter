import React, { Component } from 'react';
import {store} from '../../stores'
import {connect} from 'react-redux'
import {getApi} from '../../actions/AppActionCreators'
import Loader from '../Loader';

class Home extends Component {

  componentDidMount(){
    getApi('users','/users')
  }

  render() {
    let {users,loading} = this.props.sample
    console.log(users)
    return (
      <div className="container" >
        { loading && <Loader />}
        <h1>Hi I am starter react Redux</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sample: state.sample
  };
}

export default connect(mapStateToProps)(Home);
