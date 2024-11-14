import { http, delay, HttpResponse } from 'msw';

import App, { url } from '../App';

import { MockData } from './PostList.stories';

export default {
    component: App,
    title: 'Main Component',
    tags: ['autodocs'],
};

export const Default = {
    parameters: {
        msw: {
            handlers: [
                http.get(url, () => {
                    return HttpResponse.json(MockData.posts);
                }),
            ],
        },
    },
};

export const Loading = {
    parameters: {
        msw: {
            handlers: [
                http.get(url, async () => {
                    await delay('infinite');

                    return new Response([]);
                }),
            ],
        },
    },
};

export const Error = {
    parameters: {
        msw: {
            handlers: [
                http.get(url, () => {
                    return new HttpResponse(null, {
                        status: 403,
                    });
                }),
            ],
        },
    },
};

export const Empty = {
    parameters: {
        msw: {
            handlers: [
                http.get(url, () => {
                    return HttpResponse.json([]);
                }),
            ],
        },
    },
};