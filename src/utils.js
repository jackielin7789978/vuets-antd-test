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
