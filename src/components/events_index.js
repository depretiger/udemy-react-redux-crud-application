import React, { Component } from "react";
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions';
class EventsIndex extends Component{
  componentDidMount() {
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
      ))
  }

  render() {
    return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>

      <Link to="/events/new">New Event</Link>
    </React.Fragment>
    );
  }
}

// mapStateToProps: stateの情報からこのコンポーネントに必要なものを取り出して、このコンポーネントのpropsにマッピングする関数
// どういったオブジェクトをpropsにマッピングするかを戻り値として返す　
const mapStateToProps = (state) => ({events: state.events});

// mapDispatchToProps: あるアクションが発生したときに、Reducerにタイプに応じた状態遷移を実行させるためのDispatch関数を引数に取る
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

// 省略形
const mapDispatchToProps = ({ readEvents })


export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

