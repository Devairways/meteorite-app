import React,{Component} from "react";

class SearchBox extends Component {
	constructor(props){
		super(props)
		this.state ={
			searchKey:'',
			validInput:true
		}
	}
    updateSearch = (event)=>{
    	this.setState({searchKey: event.target.value.toUpperCase()})
    }
    render(){
    	const {search} = this.props;
    	const {searchKey, validInput} = this.state;
    	const regexItem = /[!@#$%^&*()]/;
	return (
		<div>
		<input  type="Search" onChange={this.updateSearch} placeholder="Vind meteoor" />
		<button onClick={()=>{if (!searchKey.match(regexItem)){
			                  this.setState({validInput:true})
			                  search({searchKey})
			                  }else{this.setState({validInput:false})
		                  }
	                    }}>search</button>
	                    <span>
	    {validInput ? "": "Please enter valid input"}</span>
		</div>
		);
}
}

export default SearchBox;