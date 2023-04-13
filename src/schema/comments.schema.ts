import {z} from 'zod'


const commentSchema = z.object({
    text: z.string().nonempty(),
    car: z.any(),
    user: z.any()
})

const commentUpdateSchema = commentSchema.partial()

const returnCommentSchema = z.object({
    id: z.string(),
    text: z.string(),
    car: z.any(),
    user: z.any()
})

const returnCommentsArraySchema =   returnCommentSchema.array()

export {commentSchema, commentUpdateSchema, returnCommentSchema, returnCommentsArraySchema}