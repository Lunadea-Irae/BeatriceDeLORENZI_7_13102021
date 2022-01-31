import {TopicProfile} from './users';
import {Comment} from './comment';

export interface Topic{
  id: number;
  title: string;
  content: string[];
  media?: string;
  type?:string;
  mediaSize?:string;
  hastag: string[];
  like: number;
  createdDate: string;
  updatedDate: string;
  maker: TopicProfile;
  comment: Comment[];
}
