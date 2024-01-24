type User = {
  readonly id: string; // cannot change the data here once added
  name: string;
  email: string;
  isActive: boolean;
  creditDebitDetails?: number; //? shows that this field is optional remove the ? and check
};
let users: User[] = [
  {
    id: "12345",
    name: "Nischal",
    email: "nischalkshaj5@gmail.com",
    isActive: true,
    creditDebitDetails: 4328294,
  },
  {
    id: "34234",
    name: "Akash",
    email: "akash",
    isActive: false,
  },
];
for (let details of users) {
  console.log(details);
}
