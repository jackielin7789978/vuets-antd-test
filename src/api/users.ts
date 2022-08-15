import yapi from './yapi'

export const getAllUsers = async () => {
	let result
	try {
		result = await yapi.get('/users')
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}
