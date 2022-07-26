import { useMenuStore } from '../stores/menu'
import { toRaw } from 'vue'
import { findNode } from '../utils'

export default function useCurrentMenuNode(currentPath) {
	const menu = useMenuStore()
	const menuTree = toRaw(menu.menuTree)

	const currentMenuNode = findNode(menuTree, 'path', currentPath)
	return currentMenuNode
}
