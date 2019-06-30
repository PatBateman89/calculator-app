import React, { Component } from 'react';
import './App.scss';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {

    state = {
      showninput: [],
      input: []
    }

  addToInput = val => {
    this.setState({
      input: this.state.input + val
    })
  }

  addToInputSpecial = val => {
    if (val === '+' &&
        this.state.input[this.state.input.length - 1] !== '+' &&
        this.state.input[this.state.input.length - 1] !== '-' &&
        this.state.input[this.state.input.length - 1] !== '/' &&
        this.state.input[this.state.input.length - 1] !== '=' &&
        this.state.input[this.state.input.length - 1] !== '*') {
      this.setState({
        input: this.state.input + val
      })
    } else if (val === '-' &&
        this.state.input[this.state.input.length - 1] !== '+' &&
        this.state.input[this.state.input.length - 1] !== '-' &&
        this.state.input[this.state.input.length - 1] !== '/' &&
        this.state.input[this.state.input.length - 1] !== '=' &&
        this.state.input[this.state.input.length - 1] !== '*') {
      this.setState({
        input: this.state.input + val
      })
    } else if (val === '/' &&
        this.state.input[this.state.input.length - 1] !== '+' &&
        this.state.input[this.state.input.length - 1] !== '-' &&
        this.state.input[this.state.input.length - 1] !== '/' &&
        this.state.input[this.state.input.length - 1] !== '=' &&
        this.state.input[this.state.input.length - 1] !== '*') {
      this.setState({
        input: this.state.input + val
      })
    } else if (val === '*' &&
        this.state.input[this.state.input.length - 1] !== '+' &&
        this.state.input[this.state.input.length - 1] !== '-' &&
        this.state.input[this.state.input.length - 1] !== '/' &&
        this.state.input[this.state.input.length - 1] !== '=' &&
        this.state.input[this.state.input.length - 1] !== '*') {
      this.setState({
        input: this.state.input + val
      })
    } else if (val === '.' &&
        this.state.input[this.state.input.length - 1] !== '+' &&
        this.state.input[this.state.input.length - 1] !== '-' &&
        this.state.input[this.state.input.length - 1] !== '/' &&
        this.state.input[this.state.input.length - 1] !== '=' &&
        this.state.input[this.state.input.length - 1] !== '*' &&
        this.state.input[this.state.input.length - 1] !== '.') {
      this.setState({
        input: this.state.input + val
      })
    }
  }

  handleEqual = () => {
    this.setState ({
      input: math.evaluate(this.state.input).toString()
    });
  }

  componentDidMount (){
    document.addEventListener("keydown", this.setKeyCode);
  }

  setKeyCode = (e) => {
    if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4') {
      this.setState({
        input: this.state.input + e.key
      })
    } else if (e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0') {
      this.setState({
        input: this.state.input + e.key
      })
    } else if (e.key === '+' &&
        this.state.input[this.state.input.length - 1] !== '+' &&
        this.state.input[this.state.input.length - 1] !== '-' &&
        this.state.input[this.state.input.length - 1] !== '/' &&
        this.state.input[this.state.input.length - 1] !== '=' &&
        this.state.input[this.state.input.length - 1] !== '*') {
      this.setState({
        input: this.state.input + e.key
      })
    } else if (e.key === '-' &&
        this.state.input[this.state.input.length - 1] !== '+' &&
        this.state.input[this.state.input.length - 1] !== '-' &&
        this.state.input[this.state.input.length - 1] !== '/' &&
        this.state.input[this.state.input.length - 1] !== '=' &&
        this.state.input[this.state.input.length - 1] !== '*') {
      this.setState({
        input: this.state.input + e.key
      })
    } else if (e.key === 'Backspace') {
      this.setState({
        input: this.state.input.substring(0, this.state.input.length - 1)
      })
    }  else if (e.key === '/' &&
          this.state.input[this.state.input.length - 1] !== '+' &&
          this.state.input[this.state.input.length - 1] !== '-' &&
          this.state.input[this.state.input.length - 1] !== '/' &&
          this.state.input[this.state.input.length - 1] !== '=' &&
          this.state.input[this.state.input.length - 1] !== '*') {
        this.setState({
          input: this.state.input + e.key
        })
      } else if (e.key === '*' &&
          this.state.input[this.state.input.length - 1] !== '+' &&
          this.state.input[this.state.input.length - 1] !== '-' &&
          this.state.input[this.state.input.length - 1] !== '/' &&
          this.state.input[this.state.input.length - 1] !== '=' &&
          this.state.input[this.state.input.length - 1] !== '*') {
        this.setState({
          input: this.state.input + e.key
      })
    } else if (e.key === 'Enter') {
      this.handleEqual();
    } else if (e.key === '.' &&
               this.state.input[this.state.input.length - 1] !== '.') {
      this.setState({
        input: this.state.input + e.key
      })
    } else{
      console.log(this.state.input[this.state.input.length-1])
    }
}


  render() {
    return (

      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInputSpecial}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInputSpecial}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInputSpecial}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInputSpecial}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.addToInputSpecial}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>Clear</ClearButton>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
