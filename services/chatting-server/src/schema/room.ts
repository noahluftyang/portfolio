import { extendType, objectType } from 'nexus';

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
      resolve(_root, _args, ctx) {
        console.log(_root, _args, ctx);

        return ctx.prisma.room.findMany();
      },
      type: 'Room',
    });
  },
});

export const CreateRoomMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createRoom', {
      resolve(_root, args, ctx) {
        console.log(args);

        return ctx.prisma.room.create({
          data: {},
        });
      },
      type: 'Room',
    });
  },
});
