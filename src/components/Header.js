import React from 'react';

const getStyle = ()=>{
	return{
		background:"blue",
	    width:"100%"
     }
}

const Header = () =>{
	return(
		<div style={getStyle()}>
			<h1>Meteorite App</h1>
		</div>
		)
}

export default Header;