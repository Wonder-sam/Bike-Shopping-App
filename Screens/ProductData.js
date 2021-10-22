import React from 'react'


const ProductData ={
	title1: "The World's",
	title2: " Best Bike",
	products:[
		{
			id: 0,
			name: "Pinarello bike",
			image: require("../Images/pinarelloo.png"),
			price: "1,700.00"
		},
		{
			id: 1,
			name: "Brompton bike",
			image:require("../Images/brompton.png"),
			price: "1,500.00"
		},
		{
			id: 2,
			name: "Schwinn bike",
			image: require("../Images/schwinn.png"),
			price: "1,200.00"
		},
		{
			id: 3,
			name: "Norco bike",
			image: require("../Images/norco.png"),
			price: "9800.00"
		}
		
	],
	tabs:[
		{
			id: 0,
			tab: "All"
		},
		{
			id: 1,
			tab: "RoadBike"
		},
		{
			id: 2,
			tab: "Mountain"
		},
		{
			id: 3,
			tab: "Urban"
		}
	]
}

export default ProductData

