/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {connect,Provider} from  'react-redux'
import {plus} from  './redux/action'
import {getStore} from './redux/configureStore'

const store = getStore();

class ReduxDemo extends Component {
  render() {
    return (
        <Provider store={store}>
      <View style={styles.container}>
       <Counter2/>
       <Counter2/>
       <Counter2/>
      </View>
        </Provider>
    );
  }
}


class __Counter2 extends Component {
 /* // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        counter:0,
      };
    }*/
    render(){
      return(

          <View style={{flexDirection:'row'}}>
            <Text style={ { fontSize:20,marginRight:20}}>计时器：{this.props.calculate.c}</Text>
            <Text style={{fontSize:20} } onPress={this.addCounter.bind(this)}>点击我</Text>
          </View>

      );
    }
    addCounter(){
      /*this.setState({
        counter:this.state.counter = 1,
      });*/
      //生成一个action分发
        this.props.dispatch(plus(1));

    }
}



//store (all)结构
/*store = {
    calculate:{c:13},
    navigator:{name:xxx},
    ...
}*/

//mapStateToProps(store)  可以拿到自己关心的数据
//配置map的映射表
const mapStateToProps = state =>{
    return {
        //state.xxx  要与reducer里面的方法名同名
        calculate:state.calculate,
    }
}
let Counter2 = connect(mapStateToProps)(__Counter2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReduxDemo', () => ReduxDemo);
