import Post from '../components/Post';

export default {
    component: Post,
    title: 'Post component',
    tags: ['autodocs'],
}

export const Default = {
    args: {
        post: {
            id: '1', 
            title: 'Test post',
            body: 'Test post body'
        },
    },
};