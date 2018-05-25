import React from 'react';
import ReactDOM from 'react-dom';
import  '../style/components/collection.scss';



let collection = [{
	id: 0,
	title: '迷你小蛮腰',
	image: '../images/aaa.jpg',
	content: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介.....'
}, {
	id: 1,
	title: '迷你小蛮腰',
	image: '../images/aaa.jpg',
	content: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介.....'
}, {
	id: 2,
	title: '迷你小蛮腰',
	image: '../images/aaa.jpg',
	content: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介.....'
},{
	id: 3,
	title: '迷你小蛮腰',
	image: '../images/aaa.jpg',
	content: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介.....'
}, {
	id: 4,
	title: '迷你小蛮腰',
	image: '../images/aaa.jpg',
	content: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介.....'
}, {
	id: 5,
	title: '迷你小蛮腰',
	image: '../images/aaa.jpg',
	content: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介.....'
}]
class Collection extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
	let collectionArray = collection.map(function(item) {
		return (
			<div key={item.id} className="collection-content">
				<h5>{item.title}</h5>
				<img src={item.image} />
				<p>{item.content}</p>
			</div>
			)
	})
	return (
		<div className="collection">
			{collectionArray}
		</div>
		)

}
}

	export default Collection