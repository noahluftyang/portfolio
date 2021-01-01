import { extendType, objectType } from 'nexus';

import { prisma } from '../utils/prisma';

export const Room = objectType({
  name: 'Room',
  definition(t) {
    t.id('id');
  },
});

export const RoomsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('rooms', {
      resolve(_root, _args) {
        return prisma.room.findMany();
      },
      type: 'Room',
    });
  },
});

export const CreateRoomMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createRoom', {
      resolve(_root, _args) {
        return prisma.room.create({ data: {} });
      },
      type: 'Room',
    });
  },
});
