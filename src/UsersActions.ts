import { UsersAction, UsersActionTypes, UserType } from "./usersTypes"
import { $host } from './http'

export const setUsersLoading = (loading: boolean): UsersAction => ({ type: UsersActionTypes.SET_USERS_LOADING, payload: loading })

type UsersResponseType = {
	results: UserType[],
	info: {
		seed: string,
		results: number,
		page: number,
		version: string
	}
}

export const fetchUsers = async (gender = 'female'): Promise<UserType[]> => {
	return await $host
		.get<UsersResponseType>('', {
			params: { gender: gender, results:10 }
		})
		.then(response => {
			return response.data.results
		})
}

export function setUsersPage(page: number): UsersAction {
	return { type: UsersActionTypes.SET_USERS_PAGE, payload: page }
}
