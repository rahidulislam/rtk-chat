import { apiSlice } from "../api/apiSlice"

export const messagesAPI = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getMessages: builder.query({
            query:(id) =>
            `/messages?participants_like=${id}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,
        })
    })
})

export const {useGetMessagesQuery} = messagesAPI;