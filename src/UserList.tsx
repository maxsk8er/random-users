import React from 'react'
import { UsersActionTypes } from "./usersTypes"
import { usersReducer, inUsersState } from './UsersReducer'
import { setUsersLoading, fetchUsers } from './UsersActions'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const UserList = () => {
	const [usersState, dispatch] = React.useReducer(usersReducer, inUsersState)
	const { users, loading, page, error } = usersState

	const getUsers = () => {
		dispatch(setUsersLoading(true))
		fetchUsers(inUsersState.gender)
			.then(response => {
				dispatch({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response })
			})
			.catch(res => dispatch({ type: UsersActionTypes.FETCH_USERS_ERROR, payload: 'Error on loading users list' }))
	}

	React.useEffect(() => {
		getUsers()
	}, [page])

	if (error) {
		return <h1>{error}</h1>
	}

	const loadMoreHandler = () => {
		dispatch(setUsersLoading(true))
		setTimeout(() => {
			dispatch({ type: UsersActionTypes.SET_USERS_PAGE, payload: page + 1 })
		}, 2000)
	}

	return (
		<main>
			<header>
				<h1>Random Users</h1>
			</header>
			<section style={{ justifyContent: 'flex-start', flexFlow: 'row wrap', }}>
				{users.map((user, i) => {
					const picture = user.picture?.medium
					const name = `${user.name.title} ${user.name.first} ${user.name.last}`
					return <aside key={i} >
						<section>
							<LazyLoadImage alt={name} src={picture} />
						</section>
						<section>
							<h3>{name}</h3>
						</section>
					</aside>
				})}
			</section>
			<hr />
			<section>
				{loading ? <h2>Loadddding</h2> : !users.length ? <h2>No user found</h2> : <button onClick={loadMoreHandler}>Load more</button>}
			</section>
		</main >
	)
}

export {
	UserList
}
