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

export const addNewTeam = async (body) => {
	let result
	try {
		result = await yapi.post('/teams', body)
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}

export const editTeam = async (teamName, body) => {
	let result
	try {
		result = await yapi.patch(`/teams/${teamName}`, body)
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}
