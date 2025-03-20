import { render, screen } from '@testing-library/react'

import Home from '../Home'

describe('Home', () => {
  it('displays the title', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      'Homepage'
    )
  })

  it('displays the subtitle', () => {
    render(<Home />)

    expect(screen.getByText('Welcome')).toBeInTheDocument()
  })
})
