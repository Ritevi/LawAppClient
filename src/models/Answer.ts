import { Tag } from "./Tag";

export interface Answer {
    id : string,
    tags: Tag[],
    text : string,
}