export default function getLowerNode(costsNodes, processedCosts) {
    var lowerCost = Infinity
    var lowerNode = null

    for (const node in costsNodes)  {
        var cost = costsNodes[node]
        if ((cost < lowerCost) && processedCosts[node] == false) {
            lowerCost = cost
            lowerNode = node
        }    
    }

    return lowerNode
}