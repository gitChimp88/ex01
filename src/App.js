import React from 'react'

export default class App extends React.Component {


  render(){
    var arr = ['Antonello', 'George', 'Gosia', 'Luke', 'Linda', 'Norah']

    return ( 
		  <div>
			  {
				arr.map((ele, i)=>{
				  return <h1 key={i}>name: {ele}</h1>
			  })
			  }
		  </div>

    )
  }
}



