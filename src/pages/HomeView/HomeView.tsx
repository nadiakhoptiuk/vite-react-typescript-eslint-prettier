import { ReactElement } from 'react';

type HomeViewProps = { title: string };

const HomeView = ({ title }: HomeViewProps): ReactElement => {
  return <h1>{title}</h1>;
};

export default HomeView;
