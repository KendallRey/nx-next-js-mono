import { Dashboard, FilterSection } from '@nx-next-js-micro/ui';
import ProductCard from 'apps/fire-bnb/components/product/ProductCard';
import ProductCardSkeleton from 'apps/fire-bnb/components/product/ProductCardSkeleton';
import Section from 'ui/src/section/Section';

import { FaUmbrellaBeach } from 'react-icons/fa6';
import { MdCabin } from 'react-icons/md';
import { GiTreehouse } from 'react-icons/gi';
import { PiFarmLight } from 'react-icons/pi';
import { PiCityLight } from 'react-icons/pi';
import { PiIslandLight } from 'react-icons/pi';
import { PiCampfire } from 'react-icons/pi';
import { PiMountainsLight } from 'react-icons/pi';
import { PiParkLight } from 'react-icons/pi';
import { PiCastleTurretLight } from 'react-icons/pi';
import { PiSnowflakeLight } from 'react-icons/pi';
import ProductGrid from 'apps/fire-bnb/components/product/ProductGrid';

const FILTERS = [
  { id: 'beach', name: 'Beach', icon: <FaUmbrellaBeach /> },
  { id: 'cabin', name: 'Cabins', icon: <MdCabin /> },
  { id: 'treehouse', name: 'Treehouses', icon: <GiTreehouse /> },
  { id: 'farm', name: 'Farm', icon: <PiFarmLight /> },
  { id: 'city', name: 'City', icon: <PiCityLight /> },
  { id: 'island', name: 'Island', icon: <PiIslandLight /> },
  { id: 'camp', name: 'Camp', icon: <PiCampfire /> },
  { id: 'mountain', name: 'Mountain', icon: <PiMountainsLight /> },
  { id: 'castle', name: 'Castle', icon: <PiCastleTurretLight /> },
  { id: 'arctic', name: 'Arctic', icon: <PiSnowflakeLight /> },
  { id: 'park', name: 'Park', icon: <PiParkLight /> },
  { id: '1', name: 'Farm', icon: <PiFarmLight /> },
  { id: '2', name: 'Farm', icon: <PiFarmLight /> },
  { id: '3', name: 'Farm', icon: <PiFarmLight /> },
  { id: '4', name: 'Farm', icon: <PiFarmLight /> },
  { id: '5', name: 'Farm', icon: <PiFarmLight /> },
  { id: '6', name: 'Farm', icon: <PiFarmLight /> },
  { id: '7', name: 'Farm', icon: <PiFarmLight /> },
  { id: '8', name: 'Farm', icon: <PiFarmLight /> },
  { id: '9', name: 'Farm', icon: <PiFarmLight /> },
  { id: '10', name: 'Farm', icon: <PiFarmLight /> },
  { id: '11', name: 'Farm', icon: <PiFarmLight /> },
  { id: '12', name: 'Farm', icon: <PiFarmLight /> },
  { id: '13', name: 'Farm', icon: <PiFarmLight /> },
  { id: '14', name: 'Farm', icon: <PiFarmLight /> },
  { id: '15', name: 'Farm', icon: <PiFarmLight /> },
  { id: '16', name: 'Farm', icon: <PiFarmLight /> },
  { id: '17', name: 'Farm', icon: <PiFarmLight /> },
];

const LandingPage = () => {
  return (
    <Dashboard>
      <Section className="flex flex-col gap-2">
        <FilterSection name="tag" filters={FILTERS} />
        <ProductGrid />
      </Section>
    </Dashboard>
  );
};

export default LandingPage;
