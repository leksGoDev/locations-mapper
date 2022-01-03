export const calculatePosition = (marks: number[][])=>{
    const coordsSum = marks.reduce((accum, entry) => {
        accum[0] += entry[0]
        accum[1] += entry[1]
        return accum
    }, [0, 0])
    return {
        center: coordsSum.map(entry => entry/marks.length),
        zoom: 10
    }
}