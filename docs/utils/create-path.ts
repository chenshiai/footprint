interface SidebarItem {
  text?: string
  link?: string
  items?: SidebarItem[]
  base?: string
  collapsed?: boolean
  docFooterText?: string
  rel?: string
  target?: string
}
interface SidebarMulti {
  [path: string]: SidebarItem[] | { items: SidebarItem[]; base: string }
}
type NodeType = [string, (string | NodeType[] | undefined)?, SidebarItem?]


function CSI(node: NodeType, base?: string): SidebarItem {
  let link: SidebarItem['link']
  let customConfig: SidebarItem | {} = {}

  if (typeof node[1] === 'string') {
    link = node[1]
  }
  let items
  if (node[1] instanceof Array) {
    items = node[1].map((item) => CSI(item, base))
    node[2] && (customConfig = node[2])
  }
  return {
    text: node[0],
    link,
    items,
    base,
    ...customConfig,
  }
}

export function createPath(basePath: string, sidebarTree: NodeType[]): SidebarMulti {
  return {
    [basePath]: sidebarTree.map((node: NodeType) => CSI(node, basePath)),
  }
}