import React, { Component } from "react";
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import { readEvents } from '../actions';
class EventsIndex extends Component{
  componentDidMount() {
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
      ))
  }

  render() {
    return (
    <React.Fragment>
      <FloatingActionButton containerElement={<Link to="/events/new"/>} style={{position: "fixed", right:12, bottom:12}}> 
        <ContentAdd />
      </FloatingActionButton>
      <Table>
        <TableHeader 
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Body</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.renderEvents()}
        </TableBody>
      </Table>
      
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

