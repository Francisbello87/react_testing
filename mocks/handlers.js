import {rest} from 'msw'

export const handlers = [
    rest.get('/api/users', (req, res,ctx) =>{
        return res(ctx.jsxon({ id: 1, username: "Tom" }));
    })
]