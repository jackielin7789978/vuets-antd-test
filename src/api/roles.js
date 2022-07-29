import yapi from './yapi'

export const getAllRoles = async () => {
	let result
	try {
		result = await yapi.get('/roles')
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}

export const getRole = async (id) => {
	let result
	try {
		result = await yapi.get(`/roles/${id}`)
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}

export const editRole = async (id) => {
	let result
	try {
		result = await yapi.get(`/roles/${id}`)
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}
