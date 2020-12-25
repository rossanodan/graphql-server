export let users = [    
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    age: 26
  },    
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@gmail.com",
    age: 22
  }    
];

export let groups = [
  {
    id: 1,
    name: "The Big Bang Theory",
    members: [
      users[1]
    ]
  },
  {
    id: 2,
    name: "How I Met Your Mother",
    members: [
      users[0]
    ]
  }
];
