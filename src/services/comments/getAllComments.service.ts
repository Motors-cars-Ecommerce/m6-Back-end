import { Repository } from "typeorm"
import AppDataSource from "../../data-source"
import { returnCommentsArraySchema } from "../../schema/comments.schema"
import Comment from "../../entities/comment.entity"



export const listAllCommentsService =async () => {
    const commentsRepository: Repository<Comment> = AppDataSource.getRepository(Comment)

    const comments = await commentsRepository.find()

    const returnComments = returnCommentsArraySchema.parse(comments)

    return returnComments
}