import PostList from '../components/PostList';

export const MockData = {
    posts: [
        {
            id: '1',
            title: 'Post one title',
            body: 'Post one body'
        },
        {
            id: '2',
            title: 'Post two title',
            body: 'Post two body'
        }
    ],
    loading: false,
};

export default {
    component: PostList,
    title: 'PostList component',
    tags: ['autodocs'],
    excludeStories: /.*MockData$/,
};

export const Default = {
    args: { ...MockData},
};

export const Loading = {
    args: {
        posts: [],
        loading: true,
    },
};

export const Empty = {
    args: {
        posts: [],
        loading: false,
    },
};