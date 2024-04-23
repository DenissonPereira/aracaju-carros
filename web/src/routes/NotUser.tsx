import { Route, Routes } from "react-router-dom"
import { Login } from "../pages"


export const NotUser = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route path="*" element={<Login />} />
        </Routes>
    )
}