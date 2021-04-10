import { fetchUsers } from './UsersActions'

describe('usersReducer', () => {
	describe('get users', () => {
		it('get 10 useres', async () => {
			await expect((await fetchUsers('female')).length).toEqual(10)
		})
	})
})