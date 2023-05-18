const findSmallestSetOfVertices = (n, edges) => {
    let graph = new Array(n).fill(0)
    for (let [from, to] of edges) graph[to]++

    let res = []
    for (let i = 0; i < n; i++) {
        if (graph[i] === 0) res.push(i)
    }

    return res
}
