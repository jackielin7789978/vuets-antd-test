import yapi from './yapi'
// TODO: add ts to async functions

// export interface RoleData {
// 	id: number
// 	title: string
// 	createdAt: string
// 	desc: string
// 	auths: {
// 		moduleId: number
// 		moduleName: string
// 		children:
// 			| {
// 					moduleId: number
// 					moduleName: string
// 					children: []
// 			  }[]
// 			| []
// 		permissionItem:
// 			| {
// 					permissionName: string
// 					permissionKey: string
// 					checked: boolean
// 					disabled: boolean
// 			  }[]
// 			| []
// 	}
// }
export interface ErrResponse {
	errCode: number
	errMessage: string
}

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

export const getRole = async (id: number) => {
	let result
	try {
		result = await yapi.get(`/roles/${id}`)
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}

export const editRole = async (id: number) => {
	let result
	try {
		result = await yapi.get(`/roles/${id}`)
		if (!result) throw 'something went wrong'
		return result.data
	} catch (err) {
		console.log(err)
	}
}
