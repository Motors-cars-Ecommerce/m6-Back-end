import { Repository } from "typeorm"
import AppDataSource from "../../data-source"
import { returnCommentsArraySchema } from "../../schema/comments.schema"
import Comment from "../../entities/comment.entity"



export const listAllCommentsService =async (carId:any) => {
    const commentsRepository: Repository<Comment> = AppDataSource.getRepository(Comment)

    const comments = await commentsRepository.findOneBy({
        car: carId
    })

    const returnComments = returnCommentsArraySchema.parse(comments)

    return returnComments
}