import {EntityRepository, Repository} from 'typeorm';
import { USer } from '../entities/User';

@EntityRepository(USer)
class UserRepositories extends Repository <USer>{}

export {UserRepositories} ;