import React from "react";

const Pagination = ({count}) =>{
	return (
		<div>
			<button onClick={()=> count(false)}>&#8810;</button>   
			<button onClick={()=> count(true)}>&#8811;</button>
		</div>
	);
}

export default Pagination;