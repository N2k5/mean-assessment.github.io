import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // Sign up a new user
  async signUp(username: string, password: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      username,
      password: hashedPassword,
    });
    return await newUser.save();
  }

  // Sign in the user
  async signIn(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new Error('Invalid username or password');
    }
        
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error('Invalid username or password');
    }

    // Create JWT Token with 8 hours expiration
    const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '8h' });
    return { token };
  }

  // Sign out the user (no need for any DB interaction)
  async signOut(token: string): Promise<any> {
    // You can add logic here to blacklist the token if necessary
    return { message: 'Successfully logged out' };
  }
}
