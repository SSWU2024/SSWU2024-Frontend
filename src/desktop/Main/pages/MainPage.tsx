import PageLayout from '../../Common/PageLayout';
import InteractiveViews from '../components/InteractiveViews';
import PreparatoryCommittee from '../components/PreparatoryCommittee';

function MainPage() {
  return (
    <PageLayout>
      <InteractiveViews />
      <PreparatoryCommittee />
    </PageLayout>
  );
}

export default MainPage;
