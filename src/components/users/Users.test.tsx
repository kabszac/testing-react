
import { render, screen } from '@testing-library/react'
import { Users } from './Users'

describe('Users', () => {
    test('renders correctly', ()  => {
        render(<Users/>)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toBeInTheDocument()
    })

    test('renders list of users', async () =>  {
        render(<Users/>)
        const lstItemsElement = await screen.findAllByRole('listitem')
        expect(lstItemsElement).toHaveLength(3)

    })
})