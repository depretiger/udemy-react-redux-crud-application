import React, { Component } from "react";
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { postEvent } from '../actions';

class EventsNew extends Component{
  render() {
    return (
    <React.Fragment>
      <div>dafa</div>
    </React.Fragment>
    );
  }
}


// mapDispatchToProps: あるアクションが発生したときに、Reducerにタイプに応じた状態遷移を実行させるためのDispatch関数を引数に取る
// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(EventsNew);