import { render, screen } from '@testing-library/react'

import About from '../About'

describe('About', () => {
  it('displays the title', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('About')
  })

  it('displays the subtitle', () => {
    render(<About />)

    expect(screen.getByText('About us')).toBeInTheDocument()
  })
})
