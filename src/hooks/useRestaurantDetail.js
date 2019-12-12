import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default id => {
    const [restaurant, setRestaurant] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async id => {
            try {
                const res = await yelp.get(`/${id}`)
                setRestaurant(res.data)
            } catch (err) {
                setError("Something went wrong. Please try again.")
            }
        }
        fetchData(id)
    }, [setRestaurant])

    return [restaurant, error]
}