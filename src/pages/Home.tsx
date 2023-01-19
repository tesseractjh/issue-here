import IssueFilterBar from '@components/Home/IssueFilterBar';
import IssueList from '@components/Home/IssueList';
import Layout from '@components/Layout';
import InnerWrapper from '@components/common/InnerWrapper';

function Home() {
  return (
    <Layout>
      <IssueFilterBar />
      <InnerWrapper>
        <IssueList />
      </InnerWrapper>
    </Layout>
  );
}

export default Home;
