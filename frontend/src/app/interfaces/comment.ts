import {TopicProfile} from './users';
export interface Comment {
    user: TopicProfile;
    date: string;
    content: string[];
    reply?: Comment[];
  }
  