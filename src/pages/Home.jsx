import { Header, Categories, Services, Content, Counts, ProjectList } from '../components';

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <Content />
      <main className='projects container my-2'>
        <ProjectList />
      </main>
      <Counts />
      <Services />
    </>
  );
};

export default Home;
