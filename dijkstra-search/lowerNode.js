export default function getLowerNode(costsNodes, processedCosts) {
    lowerCost = Infinity
    lowerNode = null

    for (const node in costsNodes)  {
        cost = costsNodes[node]
        if ((cost < lowerCost) && processedCosts[node] == false) {
            lowerCost = cost
            lowerNode = node
        }    
    }

    return lowerNode
}