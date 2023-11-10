import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat as Entity } from './chat.entity';
import { ChatRepository as Repository } from './chat.repository';
import { ChatResolver as Resolver } from './chat.resolver';
import { ChatService as Service } from './chat.service';
import { ChatFactory as Factory } from './factories/chat.factory';
import { UsersModule } from 'src/domain/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Entity]), UsersModule],
  providers: [Service, Resolver, Repository, Factory],
})
export class ChatModule {}
