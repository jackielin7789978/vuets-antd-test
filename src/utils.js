export function findNode(array, key, value) {
	var o
	array.some(function iter(a) {
		if (a[key] === value) {
			o = a
			return true
		}
		return Array.isArray(a.children) && a.children.some(iter)
	})
	return o
}

export function findAndModifyNode(array, key, value, cb) {
	array.some(function iter(a) {
		if (a[key] === value) {
			cb(a)
			return
		}
		return Array.isArray(a.children) && a.children.some(iter)
	})
}
