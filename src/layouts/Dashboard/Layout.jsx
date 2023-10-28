import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            Dashboard
            <Outlet />
        </>
    )
}