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
