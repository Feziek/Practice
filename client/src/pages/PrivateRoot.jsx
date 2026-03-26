import { Fragment } from "react"

import { Outlet } from "react-router-dom";

export function PrivateRoot() {
    return(
        <Fragment>
            <Outlet />
        </Fragment>
    )
}