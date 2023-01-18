import IssueFilterBar from '@components/Home/IssueFilterBar';
import Layout from '@components/Layout';
import InnerWrapper from '@components/common/InnerWrapper';

function Home() {
  return (
    <Layout>
      <IssueFilterBar />
      <InnerWrapper>Issue List</InnerWrapper>
    </Layout>
  );
}

export default Home;
