export type Tables = {
  produkte: {
    name: string;
    id: number;
    img: string;
  };
  admins: {
    email: string;
    password: string;
    token: string;
  };
};

export type rows<T extends keyof Tables> = {
  rows: Tables[T][];
};
