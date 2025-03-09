import { FC } from "react";

interface HomeProps {
  title: string;
}

const Home: FC<HomeProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Home;
