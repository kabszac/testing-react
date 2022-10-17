import { rest } from 'msw'
import { render, screen } from '@testing-library/react'
import { Users } from './Users'
import { server } from '../../mocks/Server'

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

    test ('renders error', async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
                return res(
                    ctx.status(500),
                )
            })
        )
        render(<Users/>)
        const errorRendered = await screen.findByText('Error fetching users')
        expect(errorRendered).toBeInTheDocument()
    } )
})