import { FC, useEffect } from "react";
import { login } from "../states/user";
import { useNavigate } from "react-router-dom";


const Callback: FC = () => {

    const navigate = useNavigate()


    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const code = urlSearchParams.get("code");
        
        // if (code) login(code, {
        //   onSuccess: () => navigate("/dashboard"),
        //   onError: () => navigate("/")
        // });
        if (code) login(code)
      }, [])


    return (
        <>
            <h2>Logging you in...</h2>
            {/* <button onClick={logout}>LOGOUT</button> */}
        </>
    )
}

export default Callback