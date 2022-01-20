import {Service} from '../enum/service';
import {Topic} from './topic';

export interface Users {
  token: any;
  userId: number;
  nickname: string;
  email?: string;
  brief?: string[];
  level: number;
  favorites: Favorite;
  avatar?: string;
  birthday?: string;
  service?: Service;
  joinDate:string;
  stats:Stats
}

export interface TopicProfile {
  nickname: string;
  userID: number;
  avatar?: string;
}


interface Favorite {
  posts: Topic[];
  hastag: string[];
  likes: number[];
  ignores: string[];
}

interface Stats{
  posts:Topic[];
  followed:number;
  following:number;
}
