import { createContext } from 'react';

export const AppContext = createContext();

export function appReducer(posts, action) {
    switch(action.type){
        case 'load_posts': {
            return action.payload;
        }
        case 'add_comment': {
            const { payload } = action;
            const post = posts.find(p => p.id == payload.postId);

            const comments = [...post.comments, payload];

            const updatedPosts = posts.map(p => {
                if (p.id == payload.postId) {
                    return { ...post, comments };
                } else {
                    return p;
                }
            });

            return updatedPosts;
        }
        case 'update_comment': {
            const { payload } = action;
            const post = posts.find(p => p.id == payload.postId);

            const comments = post.comments.map(c => {
              if (c.id == payload.id) {
                return payload;
              } else {
                return c;
              }
            });
        
            const updatedPosts = posts.map(p => {
              if (p.id == payload.postId) {
                return { ...post, comments };
              } else {
                return p;
              }
            });

            return updatedPosts;
        }
        default: {
            throw new Error('Invalid action');
        }
    }
}