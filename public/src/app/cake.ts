import { Comment } from './comment';

export interface Cake {
    name: string;
    image: string;
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    comments: Comment[]
}
