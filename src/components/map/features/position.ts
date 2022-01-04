export const getInitCoords = () => {
    return new Promise<GeolocationCoordinates>((resolve, reject)=> {
        navigator.geolocation?.getCurrentPosition(pos => resolve(pos.coords),
            err => reject(err), {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            })
    })
}
export const calculatePosition = (coords: number[][], defaultCenter: number[])=>{
    if (!coords.length) return {
            center: defaultCenter,
            zoom: 10
        }
    else if (coords.length === 1) return {
        center: coords[0],
        zoom: 15
    }

    const sum = coords.reduce((accum, entry) => {
        accum[0] += entry[0]
        accum[1] += entry[1]
        return accum
    }, [0, 0])
    const center = [sum[0]/coords.length, sum[1]/coords.length]

    let maxDistance = 0
    coords.forEach((elem, i) => {
        for(let j = i + 1; j < coords.length; j++){
            const distance = Math.sqrt((elem[0] - coords[j][0]) * (elem[0] - coords[j][0]) +
                (elem[1] - coords[j][1]) * (elem[1] - coords[j][1]))
            if (distance > maxDistance) maxDistance = distance
        }
    })
    let zoom = 1
    while(maxDistance < 120 / Math.pow(2, zoom - 1)){
        zoom++
    }
    return {
        center: center,
        zoom: zoom
    }
}