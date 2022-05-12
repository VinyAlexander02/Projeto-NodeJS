import { Tag } from "../entities/Tag"
import {EntityRepository, Repository} from "typeorm"

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag>{}

export {TagsRepositories}