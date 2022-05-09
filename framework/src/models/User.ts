interface userProps {
  name: string;
  age: number;
}
export class user {
  constructor(private data: userProps){};
}
