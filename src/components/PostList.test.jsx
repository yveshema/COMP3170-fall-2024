import { render, screen } from '@testing-library/react';

import PostList from './PostList';

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

describe('PostList component', () => {
    it('renders list of posts', () => {
        render(<PostList posts={MockPosts} />);

        expect(screen.getByText('Post two body')).toBeInTheDocument();
    });

    it('renders loading indicator', () => {
        render(<PostList posts={[]} loading={true} />);

        expect(screen.getByText(/Loading/)).toBeInTheDocument();
    });

    it('renders nothing when there are no posts', () => {
        render(<PostList posts={[]} />);

        expect(screen.queryByTestId("posts")).toBeNull();
    });
});