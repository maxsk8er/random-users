export type UserType = {
	name: {
		title?: string | undefined
		first?: string | undefined
		last?: string | undefined
	}
	picture?: {
		medium?: string | undefined
	}
}

export type UsersState = {
	users: UserType[]
	gender: string
	loading: boolean
	error: null | string
	page: number
	hasMore: boolean
}


export enum UsersActionTypes {
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
	SET_USERS_LOADING = 'SET_USERS_LOADING',
	SET_USERS_PAGE = 'SET_USERS_PAGE',
	SET_USERS_HASMORE = 'SET_USERS_HASMORE',
}

interface SetUsersLoadingAction {
	type: UsersActionTypes.SET_USERS_LOADING
	payload: boolean
}
interface FetchUsersSuccessAction {
	type: UsersActionTypes.FETCH_USERS_SUCCESS
	payload: any[]
}
interface FetchUsersErrorAction {
	type: UsersActionTypes.FETCH_USERS_ERROR
	payload: string
}
interface SetUsersPageAction {
	type: UsersActionTypes.SET_USERS_PAGE
	payload: number
}

interface SetUsersHasMore {
	type: UsersActionTypes.SET_USERS_HASMORE
	payload: boolean
}

export type UsersAction =
	SetUsersLoadingAction |
	FetchUsersSuccessAction |
	FetchUsersErrorAction |
	SetUsersPageAction |
	SetUsersHasMore