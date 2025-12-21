import type { RouteProps } from "react-router";
import { LoginPage } from "../../../pages/LoginPage";
import { MainPage } from "../../../pages/MainPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
 LOGIN = "login",
 MAIN = "main",

}


export const RoutePath = {
 [AppRoutes.LOGIN]: "/login",
 [AppRoutes.MAIN]: "/",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
};
