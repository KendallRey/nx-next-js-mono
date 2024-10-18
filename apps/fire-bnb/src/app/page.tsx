
import { Dashboard } from '@nx-next-js-micro/ui';
import RoomCard from 'apps/fire-bnb/components/product/ProductCard';
import RoomCardSkeleton from 'apps/fire-bnb/components/product/ProductCardSkeleton';
import Section from 'ui/src/section/Section';

const LandingPage = () => {

  return (
    <Dashboard>
    <Section>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
      <RoomCard/>
      <RoomCard/>
      <RoomCardSkeleton/>
      <RoomCard/>
      <RoomCardSkeleton/>
      <RoomCard/>
      <RoomCardSkeleton/>
      <RoomCard/>
      <RoomCard/>
      <RoomCardSkeleton/>
      <RoomCard/>
      <RoomCardSkeleton/>
      <RoomCard/>
      <RoomCard/>
      <RoomCard/>
    </div>
    </Section>
    </Dashboard>
  );
}

export default LandingPage;
