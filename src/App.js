import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
		<h1>Сервис онлайн автозаполнения и подсказок адресов</h1>
		<NameForm />
      </div>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', predicts: []};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var ivalue = event.target.value;
	if (ivalue.length > 2) {
	var axios = require('axios');
    axios.get('/get_address?query='+ivalue)
		.then(res => {
			const predicts = res.data[1];
			//console.log(res.data[1])
			this.setState(
				(state, props) => ({
				  predicts
				}))
		  });	
	} else {
		this.setState({ predicts: [] });
		console.log(ivalue);
		}
	this.setState({ value: ivalue });
  }

  render() {
    return (
      <div>
		  <form>
			<label>
			  Введите адрес:&nbsp;<input type="text" value={this.state.value} onChange={this.handleChange} />
			</label>
		  </form>
		  <div className="Result">
			<ul>
			  {this.state.predicts.map(predict =>
				<li key={predict[0]}>{predict[1]}</li>
			  )}
			</ul>
		  </div>
	  </div>
    );
  }
}

export default App;
