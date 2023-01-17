import IssueFilterBar from '@components/Home/IssueFilterBar';
import InnerWrapper from '@components/InnerWrapper';
import Layout from '@components/Layout';

function Home() {
  return (
    <Layout>
      <IssueFilterBar />
      <InnerWrapper>Issue List</InnerWrapper>
    </Layout>
  );
}

export default Home;
