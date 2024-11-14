import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

global.fetch = vi.fn();

const MockPosts = [
    {
        id: '1',
        title: 'Post one',
        body: 'Post one body'
    },
    {
        id: '2',
        title: 'Post two',
        body: 'Post two body'
    }
];

describe('Main Component', () => {
    it('renders properly', () => {
        render(<App />);

        expect(screen.getByText('My blog posts')).toBeInTheDocument();
    });

    it('fetches and renders list of posts', async () => {
        fetch.mockResolvedValue(() => {
            return { json: () => new Promise(resolve => resolve(MockPosts))};
        });

        render(<App />);

        waitFor(() => {
            expect(screen.getByText('Post two body')).toBeInTheDocument();
        });
    });

    it('renders error message on fetch error', async () => {
        fetch.mockResolvedValue(() => Promise.reject(new Error()));

        render(<App />);

        waitFor(() => {
            expect(screen.getByText('Something went wrong')).toBeInTheDocument();
        });
    });
});