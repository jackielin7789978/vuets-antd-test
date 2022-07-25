import yapi from './yapi'

export const getAllTeams = async () => {
	let result
	try {
		result = await yapi.get('/teams')
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}
