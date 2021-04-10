import React from 'react'
import ReactDOM from 'react-dom';
import './App.css'
import './mvp.css'
import { UserList } from './UserList'
import RandomPersons from './RandomPersons'

class RandomPersonsCE extends HTMLElement {
	
	createRandomPerson(user: { name: string | null, image: string | undefined }) {
		return (
			<RandomPersons user={user}></RandomPersons>
		)
	}
	
	connectedCallback() {
		const mountPoint = document.createElement('div');
		mountPoint.classList.add("custom-element-holder");

		this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
		
		const name = this.getAttribute('el-name');
		const image = this.getAttribute('el-img') || "https://randomuser.me/api/portraits/med/women/14.jpg";
		ReactDOM.render(this.createRandomPerson({ name, image }), mountPoint);
	}
}
customElements.define('random-persons', RandomPersonsCE);

function App() {
	return <UserList />
}

export default App
