import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../pages/test/index'
 
describe('Page', () => {
  it('renders a heading 2', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 2 })
 
    expect(heading).toBeInTheDocument()
  })
})