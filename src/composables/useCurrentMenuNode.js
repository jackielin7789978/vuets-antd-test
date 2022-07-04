import { useMenuStore } from '../stores/menu'
import { toRaw } from 'vue'

export default function useCurrentMenuNode(currentPath) {
  const menu = useMenuStore()
  const menuTree = toRaw(menu.menuTree)

  const currentMenuNode = findNode(menuTree, 'path', currentPath)
  return currentMenuNode
}

function findNode(array, key, value) {
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
