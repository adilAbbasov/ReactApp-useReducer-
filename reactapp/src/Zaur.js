import React, { Component } from 'react'

export default class Zaur extends Component {
    constructor(props){
        super(props);
        this.state = {a: 10}
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.setState({a:20});
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('componentDidUpdate')  
    }

    render() {
        console.log('render')
        //this.setState({a:20});
        return (
        <div>Zaur</div>
        )
    }
}
