import { users, groups } from './db';

const resolvers = {
  Query: {
    getUser: (parent, { id }, context, info) => {
      return users.find(user => user.id == id);
    },
    getUsers: (parent, args, context, info) => {
      return users;
    },
    getGroup: (parent, { id }, context, info) => {
      return groups.find(group => group.id == id);
    },
    getGroups: (parent, args, context, info) => {
      return groups;
    },
  },
  Mutation: {
    createUser: (parent, {id, name, email, age}, context, info) => {
      let newUser = { id, name, email, age };
      users.push(newUser);
      return newUser;
    },
    updateUser: (parent, { id, name, email, age }, context, info) => {
      let newUser = users.find(user => user.id == id);
      newUser.name = name;
      newUser.email = email;
      newUser.age = age;

      return newUser;
    },
    deleteUser: (parent, { id }, context, info) => {
      const userIndex = users.findIndex(user => user.id == id);
      if (userIndex === -1) throw new Error("User not found.");
      const deletedUsers = users.splice(userIndex, 1);

      return deletedUsers[0];
    }
  }
};

export default resolvers;
