import React, { Component } from 'react';
 import {tryConvert, mapUnit} from './Module'
 
  
 export default class Calculator extends React.Component {
    constructor(props) {
      super();
      this.state ={
        inputTemp : "",
        inputUnit : "",
        studentInput : "",
        studentInputUnit : "",
        correction : ""
      }
      this.onChange =this.onChange.bind(this);
      this.onSubmit =this.onSubmit.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
    }
    onKey

    onChange(e){

        e.preventDefault();
           this.setState(
             {
               [e.target.name] : e.target.value
             }
           )
         }
         onKeyPress(e){
             console.log("Inside onKeyPress")
            this.setState({correction : " "})

         }
  
         onSubmit(e){
            e.preventDefault();
            const studentRecord = {
                inputTemp : this.state.input,
                inputUnit : this.state.inputUnit,
                studentInput :this.state.studentInput,
                studentInputUnit : this.state.studentInputUnit
            }                  
            
            const result1  =  tryConvert(studentRecord.inputTemp, studentRecord.inputUnit)
            console.log("result1 "+ result1 )
            const result2=   tryConvert(studentRecord.studentInput, studentRecord.studentInputUnit)
            console.log("result2 "+ result2 )
            if(result1 == result2){
              this.setState({correction : "Correct"})
            }else{
              this.setState({correction : "InCorrect"})
            }
          }
  
    render() {
     
  
      return (
        <div class="scienceProject">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                   
                    <h4 class="display-4 text-center">Student Records</h4>
                    <form onSubmit={this.onSubmit}>
                      <div class="form-group">
                          <input type="text" class="form-control form-control-lg" name="input" placeholder="Input For temperature" value = {this.state.inputTemp} 
                          onChange={this.onChange} onKeyPress={this.onKeyPress}/>
                      </div>
                      <div class="form-group">
                          <select class="form-control form-control-lg" placeholder="Input temperature Unit" name="inputUnit" value = {this.state.inputUnit} onChange={this.onChange} onKeyPress={this.onKeyPress}>
                              <option value="">Select Unit</option>
                              <option value="K">Kelvin</option>
                              <option value="C">Celsius</option>
                              <option value="F">Fahrenheit</option>
                              <option value="R">Rankine</option>
                          </select>
                       </div>
                      <div class="form-group">
                          <input type="text" class="form-control form-control-lg" placeholder="Student Input" name="studentInput" value = {this.state.studentInput} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
                      </div>
                      <div class="form-group">
                          <select class="form-control form-control-lg" placeholder="Student temperature Unit" name="studentInputUnit" value = {this.state.studentInputUnit} onChange={this.onChange} onKeyPress={this.onKeyPress}> 
                              <option value="">Select Unit</option>
                              <option value="K">Kelvin</option>
                              <option value="C">Celsius</option>
                              <option value="F">Fahrenheit</option>
                              <option value="R">Rankine</option>
                          </select>
                      </div>
                      
                      <input type="submit" class="btn btn-primary btn-block mt-4"  />
                  </form>
                  <div>
                      <p>{this.state.correction} </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }
  
