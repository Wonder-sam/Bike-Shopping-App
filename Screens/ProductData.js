import React from 'react'


const ProductData ={
	title1: "The World's",
	title2: " Best Bike",
	products:[
		{
			id: 0,
			name: "Pinarello bike",
			image: require("../Images/pinarelloo.png"),
			price: 1700.00,
			type: "Mountain",
			colours:[
				{
					id: 0, 
					name: "red",
					color: require("../Images/pinRed.jpg"),
				},
				{
					id: 1, 
					name: "white",
					color: require("../Images/pinWhite.jpg"),
				},
				{
					id: 2, 
					name: "blue",
					color: require("../Images/pinBlue.jpg"),
				}
			]
		},
		{
			id: 1,
			name: "Brompton bike",
			image:require("../Images/brompton.png"),
			price: 1500.00,
			type: "RoadBike",
			colours:[
				{
					id: 0, 
					name: "red",
					color: require("../Images/bromRed.png"),
				},
				{
					id: 1, 
					name: "black",
					color: require("../Images/bromBlack.jpg"),
				},
				
				{
					id: 2, 
					name: "green",
					color: require("../Images/bromGreen.jpg"),
				}
			]
		},
		{
			id: 2,
			name: "Schwinn bike",
			image: require("../Images/schwinn.png"),
			price: 1200.00,
			type: "Mountain",
			colours:[
				{
					id: 0, 
					name: "blue",
					color: require("../Images/schBlue.jpg"),
				},
				{
					id: 1, 
					name: "black",
					color: require("../Images/schBlack.jpg"),
				},
				{
					id: 2, 
					name: "white",
					color: require("../Images/schWhite.jpg"),
				}
			]
		},
		{
			id: 3,
			name: "Norco bike",
			image: require("../Images/norco.png"),
			price: 9800.00,
			type: "RoadBike",
			colours:[
				{
					id: 0, 
					name: "orange",
					color: require("../Images/norcoOrange.jpg"),
					
				},
				{
					id: 1, 
					name: "black",
					color: require("../Images/norcoBlack.jpg"),
				},
				{
					id: 2, 
					name: "blue",
					color: require("../Images/norcoBlue.jpg"),
				}
			]
		}
		
	],
	tabs:[
		{
			id: 0,
			tab: "All"
		},
		{
			id: 1,
			tab: "RoadBike",
		},
		{
			id: 2,
			tab: "Mountain"
		},
		{
			id: 3,
			tab: "Urban"
		}
	],
	cart:[
		{
			id: 0,
			name: "Pinarello bike",
			image: require("../Images/pinarelloo.png"),
			price: 1700.00,
			quantity: 1,
			type: "Mountain"
		},
		{
			id: 1,
			name: "Brompton bike",
			image:require("../Images/brompton.png"),
			price: 1500.00,
			quantity: 1,
			type: "RoadBike"
		},
		{
			id: 2,
			name: "Schwinn bike",
			image: require("../Images/schwinn.png"),
			price: 1200.00,
			quantity: 1,
			type: "Mountain"
		},
		{
			id: 3,
			name: "Norco bike",
			image: require("../Images/norco.png"),
			price: 9800.00,
			quantity: 1,
			type: "RoadBike"
		}
	]
}

export default ProductData

