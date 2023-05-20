const getData = async (Lat, Long, Dist) => {
  try {
    const { value } = await (await fetch(`https://mapbicycle.azurewebsites.net/api/get?Lat=${Lat}&Long=${Long}&Dist=${Dist}`)).json()
    return value
  } catch (error) {
    console.error(error)
    throw error
  }
}
export default getData