import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { Root } from '@routes/Root.jsx'

describe('Root component', () => {
  beforeEach(() => {
    cleanup()
    render(<Root />)
  })

  test('It should work w/o errors', () => {
    expect(screen.findByTestId('client')).toBeTruthy()
  })
})
