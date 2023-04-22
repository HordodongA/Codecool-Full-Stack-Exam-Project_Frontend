import { FC, useEffect } from "react"
import { login } from "../states/user"
import { useNavigate } from "react-router-dom"


const Callback: FC = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search)
        const code = urlSearchParams.get("code")

        if (code) login(code, {
            onSuccess: () => navigate("/assets"),
            onError: () => navigate("/")
        })
    }, [])

    return (
        <div>
            <h2>Logging you in...</h2>
        </div>
    )
}

export default Callback