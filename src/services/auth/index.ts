import axios from "axios";
interface User {
  username: string;
  password: string;
}

const user = [
  {
    username: "kullanici",
    password: "sifre",
  },
];

const loginUser = async (username: string, password: string) => {
  const checkUser = user.find(
    (u: User) => u.username === username && u.password === password
  );
  return !!checkUser;
};

export { loginUser };
