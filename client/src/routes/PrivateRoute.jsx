import { privateRoute } from './paths.js'

import { PrivateRoot, Books, Add, Update } from '@pages'

import { NotFound } from '@components/NotFound.jsx'

export const PrivateRoute = {
  path: privateRoute.ROOT,
  element: <PrivateRoot />,
  errorElement: <NotFound />,
  children: [ 
    {
      index: true,
      element: <Books />
    },
    {
      path: privateRoute.pages.ADD,
      element: <Add />
    },
    {
      path: privateRoute.pages.UPDATE,
      element: <Update />
    }
  ]
}