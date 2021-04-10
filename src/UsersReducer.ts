import { UsersAction, UsersActionTypes, UsersState, UserType } from "./usersTypes";



const genderArray = [
	'female',
	'male'
]

export const inUsersState: UsersState = {
	users: [],
	page: 1,
	error: null,
	loading: false,
	hasMore: true, 
	gender:genderArray[Math.floor(Math.random() * genderArray.length)]
}

export const usersReducer = (state = inUsersState, action: UsersAction) => {
	switch (action.type) {
		case UsersActionTypes.SET_USERS_LOADING: 
			return { ...state, loading: action.payload }
		case UsersActionTypes.FETCH_USERS_SUCCESS:
			const newUsers: UserType[] = [...state.users, ...action.payload]
			return { ...state, loading: false, users: newUsers }
		case UsersActionTypes.FETCH_USERS_ERROR:
			return { ...state, loading: false, error: action.payload }
		case UsersActionTypes.SET_USERS_PAGE:
			return { ...state, page: action.payload }
		case UsersActionTypes.SET_USERS_HASMORE:
			return { ...state, hasMore: action.payload }
		default:
			return state
	}
}