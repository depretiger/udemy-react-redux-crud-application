import React, { Component } from "react";
import { connect } from 'react-redux';

import { increment, decrement} from '../actions';
class App extends Component{
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick = {props.increment}>+1</button>
        <button onClick = {props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

// mapStateToProps: stateの情報からこのコンポーネントに必要なものを取り出して、このコンポーネントのpropsにマッピングする関数
// どういったオブジェクトをpropsにマッピングするかを戻り値として返す　
const mapStateToProps = (state) => ({ value: state.count.value});

// mapDispatchToProps: あるアクションが発生したときに、Reducerにタイプに応じた状態遷移を実行させるためのDispatch関数を引数に取る
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

// 省略形
const mapDispatchToProps = ({increment, decrement})


export default connect(mapStateToProps, mapDispatchToProps)(App);

