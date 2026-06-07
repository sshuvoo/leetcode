import { Queue } from 'stl-kit'

class Graph {
  v: number
  l: number[][]
  constructor(v: number) {
    this.v = v
    this.l = Array.from({ length: v }, () => [])
  }

  addEdge(u: number, v: number) {
    this.l[u].push(v)
    this.l[v].push(u)
  }

  printAdjList() {
    for (let i = 0; i < this.v; i++) {
      const adj = this.l[i]
      console.log(`${i} -> `, adj.join('->'))
    }
  }
  bsf() {
    const q = new Queue<number>()
    const vis = Array.from({ length: this.v }, () => false)
    q.push(0)
    vis[0] = true
    while (!q.isEmpty()) {
      const curr = q.pop()
      console.log(curr)
      for (const neighbor of this.l[curr]) {
        if (!vis[neighbor]) {
          vis[neighbor] = true
          q.push(neighbor)
        }
      }
    }
  }

  dfs(node: number, vis: boolean[]) {
    console.log(node)
    vis[node] = true
    for (const nei of this.l[node]) {
      if (!vis[nei]) {
        this.dfs(nei, vis)
      }
    }
  }

  runDfs(src: number) {
    const vis = Array.from({ length: this.v }, () => false)
    this.dfs(src, vis)
  }
}

const g = new Graph(5)

g.addEdge(0, 1)
g.addEdge(1, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)

g.bsf()
console.log("-------")
g.runDfs(0)
