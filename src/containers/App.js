import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBox from '../components/Searchbox';
import ErrorBoundry from '../components/ErrorBoundry';
import TableList from '../components/TableList';
import Pagination from '../components/Pagination';


class App extends Component  {
  constructor(){
    super();
    this.state = {
      search:"",
      searchResults: 0,
      searchDisplay:[],
      count: 1
    };
  }

  componentDidMount(){
    this.totalResultCount();
  }

  totalResultCount = () =>{
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=49999")
    .then(res => res.json())
    .then(data => {
      this.setState({searchResults: data.length},this.paginate)
     })
    .catch(err => console.log(err));
  }
 
  paginate = (event) =>{
    const {count} = this.state;
    fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$offset=${count * 25}&$limit=25`)
    .then(res => res.json())
    .then(data => {this.setState({searchDisplay: data});
     })
    .catch(err => console.log(err));
  }

 browsePagination = (bool)=>{
  if (bool){
    this.setState(state =>({count: state.count + 1}),this.paginate);
  }else if (this.state.count !== 1){
    this.setState(state =>({count: state.count - 1}),this.paginate);
    
  }
 }

 getSearchResult = ()=>{
  const {search} = this.state;
  fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$where=upper(name)=upper('${search}')`)
  .then(res => res.json())
  .then(data => {this.setState({searchDisplay: data , searchResults: data.length });
     })
  .catch(err => console.log(err));
 }

  SearchMeteors= (event) =>{
    if (event.searchKey){
       this.setState({search: event.searchKey},this.getSearchResult);
    }
    else{
      this.totalResultCount();
    }
  }

  
  render(){ 
            const {searchDisplay,searchResults}= this.state;
            
    return(
    <div className="App">
      <Header/>
      <SearchBox search= { this.SearchMeteors}/>
      <h3>there are {searchResults} results found.</h3>
      { searchDisplay.length ? <ErrorBoundry>
         <TableList meteors={searchDisplay}/>
      </ErrorBoundry> : <h1>Loading...</h1>}
      <Pagination count={this.browsePagination}/>
    </div>
    );
  }
}

export default App;
