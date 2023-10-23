import dijkstra from "./dijkstra-search.js"

const graph = {
    "inicio": {
        "a": 6,
        "b": 2,
    },
    "a": {
        "fim": 1,
    },
    "b": {
        "a": 3,
        "fim": 5,
    },
    "fim": {}
}

const costs = {
    "inicio": 0,
    "a": 6,
    "b": 2,
    "fim": Infinity,
}

function main() {
    const result = dijkstra({"graph": graph, "costs": costs})
    console.log(result)
}

main()