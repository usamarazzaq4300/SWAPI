import { useEffect, useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
export function Search() {
    const [planet, setPlanet] = useState([])
    const [loading, setLoading] = useState(false)
    const [fontSize, setFontSize] = useState(30)
    async function fetchPlanet() {
        try {
            setLoading(true)
            let res = await fetch("https://swapi.dev/api/planets/")
            let data = await res.json()
            let planetNames = data.results;
            setPlanet(planetNames)
        }
        catch (err) {
            console.log("Error Here")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchPlanet()
    }, [])
    if (loading) {
        return (
            <div>
                <h1>Planets</h1>
                <ul>
                    {
                        <div>
                            {
                                <div>
                                    <p><li><Skeleton style={{ width: 180 }} variant="text" /></li></p>
                                    <p><li><Skeleton style={{ width: 180 }} variant="text" /></li></p>
                                    <p><li><Skeleton style={{ width: 180 }} variant="text" /></li></p>
                                    <p><li><Skeleton style={{ width: 180 }} variant="text" /></li></p>
                                    <p><li><Skeleton style={{ width: 180 }} variant="text" /></li></p>
                                    <p><li><Skeleton style={{ width: 180 }} variant="text" /></li></p>
                                    <p><li><Skeleton style={{ width: 180 }} variant="text" /></li></p>
                                    <p><li><Skeleton style={{ width: 180 }} variant="text" /></li></p>
                                </div>
                            }
                        </div>
                    }
                </ul>
            </div>
        )
    }
    return (
        <div>
            <h1>Planets</h1>
            <ul>
                {
                    planet.map((planets, index) => {
                        return (
                            <div>
                                <li style={{ fontSize: (fontSize) - (index + 2) }}>{planets.name}</li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

