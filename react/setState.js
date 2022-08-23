// React中的setState默认是异步，但是有时候是同步
// 在setTimeout或者原生事件中，setState是同步的

// 因为每次调用setState都会触发更新，异步操作是为了提高性能，将多个状态合并一起更新，减少re-render调用
// setState本身并不是异步，只是因为react的性能优化机制体现为异步。在react的生命周期函数或者作用域下为异步，在原生的环境下为同步。

// setTimeout
state={
    number:1
}
componentDidMount(){
    setTimeout(()=>{
      this.setState({number:3});
      console.log(this.state.number);
    },0)
}
// 3


// 原生事件中修改状态
state={
    number:1
}
componentDidMount(){
    document.body.addEventListener('click',this.changeVal,false);
}
changeVal=()=>{
    this.setState({number:3});
    console.log(this.state.number);
}
// 3






