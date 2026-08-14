import axios from 'axios'

export const fetchEvents = async (showPastEvents = false) => {
  try {
    const artistId = import.meta.env.VITE_BANDSINTOWN_ARTIST_ID
    const appId = import.meta.env.VITE_BANDSINTOWN_APP_ID
    const url = `https://rest.bandsintown.com/artists/id_${artistId}/events`

    const res = await axios.get(url, {
      params: {
        app_id: appId,
        date: showPastEvents ? 'past' : 'upcoming'
      }
    })

    return res.data
  } catch (err: any) {
    return Promise.reject(err.response ? err.response.data : err)
  }
}
