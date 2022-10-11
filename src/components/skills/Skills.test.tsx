import { render, screen, logRoles } from '@testing-library/react';
import { Skills } from './Skills';


describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'JS']
    test('renders correctly', () => {
        render(<Skills skills={skills}/>)
        const lstElement = screen.getByRole('list')
        expect(lstElement).toBeInTheDocument()
    })

    test('renders a list of skills', () => {
        render(<Skills skills={skills}/>)
        const lstItemElements  = screen.getAllByRole('listitem')
        expect(lstItemElements.length).toBe(skills.length)
    })

    test('login is rendered', () => {
        render(<Skills skills={skills}/>)
        const loggedOutBtn = screen.getByRole('button')
        expect(loggedOutBtn).toBeInTheDocument()
    })

    test('start learning is not rendered', () => {
        render(<Skills skills={skills}/>)
        const loggedInBtn = screen.queryByRole('button', {name:'Start learning'})
        expect(loggedInBtn).not.toBeInTheDocument()
    })

    // test('start learning is eventually rendered in the screen', async () => {
    //     const view = render(<Skills skills={skills}/>)
    //     logRoles(view.container)
    //     const loggedInBtn = await  screen.findByRole('button', {
    //         name: 'Start learning',
    //     }, {timeout:2000})
    //     expect(loggedInBtn).toBeInTheDocument()
    // })

})