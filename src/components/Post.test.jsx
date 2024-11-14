import { render, screen } from '@testing-library/react';

import Post from './Post';

const MockPost = {
    id: '1',
    title: 'Test post',
    body: 'Test post body',
}

describe('Post component', () => {
    it('renders properly', () => {
        render(<Post post={MockPost} />);

        screen.debug();
    });

    it('renders post title', () => {
        render(<Post post={MockPost} />);

        expect(screen.getByText("Test post")).toBeInTheDocument();
    });
});