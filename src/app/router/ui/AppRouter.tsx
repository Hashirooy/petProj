import { Route, Routes } from "react-router"
import { routeConfig, type AppRoutesProps } from "../../../shared/config/routeConfig/routeConfig"
import { Suspense } from "react"

export const AppRouter = () => {

    const renderWithWrapper = (route: AppRoutesProps) => {
        const element = <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
        return (
            <Route
            key={route.path}
            path={route.path}
            element={element}
            />
        )
    }


    return(
        <Routes>
           {Object.values(routeConfig).map(renderWithWrapper)} 
        </Routes>
    )
}