import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute.jsx'

const browserRouter = createBrowserRouter([ PrivateRoute ])

export function MainRoute() {
  return <RouterProvider router={ browserRouter } />
}