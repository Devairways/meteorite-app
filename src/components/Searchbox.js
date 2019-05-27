import React,{Component} from "react";

class SearchBox extends Component {
	constructor(props){
		super()
		this.state ={
			searchKey:''
		}
	}
    updateSearch = (event)=>{
    	this.setState({searchKey: event.target.value})
    }
    render(){
    	const {search} = this.props
    	const {searchKey} = this.state
	return (
		<div className= "pa2">
		<input className="pa3 ba b---green bg-lightest-blue" type="Search" onChange={this.updateSearch} placeholder="Vind meteoor" />
		<button onClick={()=>(search({searchKey}))}>search</button>
		</div>
		);
}
}

export default SearchBox;