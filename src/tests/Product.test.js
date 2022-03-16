import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Product from '../components/Product'

describe('<Product />', () => {
  it('should render product name and description correctly', () => {
    render(<Product product={{ name: 'coisa', description: 'uma coisa' }} addToCart={() => { }} />)
    expect(screen.getByText(/coisa: uma coisa/i)).toBeInTheDocument()
  })

  it('should render button correctly', () => {
    render(<Product product={{ name: 'coisa', description: 'uma coisa' }} addToCart={() => { }} />)
    expect(screen.getByRole('button', {name: "Add to Cart"})).toBeInTheDocument()
  })
})

describe('when add cart button clicked', () => {
  it('should calls the addCart function', () => {
    const addCartFunction = jest.fn()
    render(<Product product={{ name: 'coisa', description: 'uma coisa' }} addToCart={addCartFunction} />)

    const addCartButton = screen.getByRole('button', {name: "Add to Cart"})
    userEvent.click(addCartButton)

    expect(addCartFunction).toHaveBeenCalledWith({ name: 'coisa', description: 'uma coisa' })
  })
})
