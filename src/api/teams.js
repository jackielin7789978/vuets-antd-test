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

export const editTeam = async (teamId, body) => {
	let result
	try {
		result = await yapi.patch(`/teams/${teamId}`, body)
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}

export const deleteTeam = async (teamId) => {
	let result
	try {
		result = await yapi.delete(`/teams/${teamId}`)
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}
