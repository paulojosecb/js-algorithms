import getLowerNode from "./lowerNode.js"

export default function dijkstra(options) {
    const graph = options.graph
    const costsDict = options.costs

    const parentsDicts  = {}
    const processedCosts = {}

    var node = getLowerNode(costsDict, processedCosts)

    while (node != null) {
        cost = costsDict[node]
        neighbors = graph[node]

        for (const neighbor of neighbors) {
            newCost = cost + neighbors[neighbor]
            if (newCost < costsDict[neighbor]) {
                costsDict[neighbor] = newCost
                parentsDicts[neighbor] = node
            }

            processedCosts[neighbor] = true
        }

        node = getLowerNode(costsDict, processedCosts)
    }

    return {
        "parents": parentsDicts,
        "costs": costsDict
    }
}