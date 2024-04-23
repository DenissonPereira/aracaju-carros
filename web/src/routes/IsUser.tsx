import { Route, Routes } from "react-router-dom"
import { Home } from "../pages"


export const IsUser = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="*" element={<Home />} />
        </Routes>
    )
}