import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [restaurants, setRestaurants] = useState([])
    const [error, setError] = useState("")

    const onTermSubmit = async term => {
        try {
            const res = await yelp.get("/search", {
                params: {
                    term,
                    limit: 50,
                    location: "barcelona"
                }
            })
            setRestaurants(res.data.businesses)
        } catch (err) {
            setError("Something went wrong. Please try again.")
        }
    }

    useEffect(() => {
        onTermSubmit("pasta")
    }, [])

    return [onTermSubmit, restaurants, error]
}