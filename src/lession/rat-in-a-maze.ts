type num = number
type str = string

function findPath(maze: num[][], row: num, col: num, paths: str[], path: str) {
  const n = maze.length
  const isOutOfmaze = row < 0 || col < 0 || row >= n || col >= n
  if (isOutOfmaze || maze[row][col] == 0 || maze[row][col] == -1) {
    return
  }

  if (row == n - 1 && col == n - 1) {
    paths.push(path)
    return
  }

  maze[row][col] = -1
  // go top
  findPath(maze, row - 1, col, paths, path + 'T')
  // go right
  findPath(maze, row, col + 1, paths, path + 'R')
  // go bottom
  findPath(maze, row + 1, col, paths, path + 'B')
  // go left
  findPath(maze, row, col - 1, paths, path + 'L')

  maze[row][col] = 1
}

function findPossiblePaths(maze: num[][]): str[] {
  const paths: str[] = []
  findPath(maze, 0, 0, paths, '')
  return paths
}
