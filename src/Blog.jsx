import React from 'react';
import Article from './Article';
import {Foo, Bar} from './components/FooBar';
import Hoge from './components/Hoge';

const Blog = () => {



  // componentDidMount(){
  //   // ボタンがクリックされたらいいねをカウントアップする
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  // }

  // componentDidUpdate(){
  //   if (this.state.count >= 10) {
  //     this.setState({
  //       count: 0
  //     })
  //   }
  // }

  // componentWillUnmount(){
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }

  // 公開状態を反転させる関数


  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }


    // const authorName = "Torahack"
    return(
      <>
        <Article title={"Reactの使い方"}
        // count={this.state.count}
        />
        <Foo />
        <Bar />
        <Hoge />
      </>
    )

}

export default Blog
