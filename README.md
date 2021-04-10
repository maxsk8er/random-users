# Random-Users List

### `npm start`

To start project
This projects uses TypeScript all types in usersTypes
In a component UsersList first define initial usersState
```javascript
{

	users: [],
	page: 1,
	error: null,
	loading: false,
	hasMore: true, 
	gender:random
}
```

By clicking loadmore button update page of state and trigers new fetch where reduced a new object with previous list of users and users from new page

In App is defined new custom element random-persons 
```html
<random-persons el-name="John" el-image="imageSrc"></random-persons>
```
This element is created in RandomPersons components and can be used outside react (see /public/index.html)


To test fetchUsers 

### `npm test`

Checks if number of users is equal to 10