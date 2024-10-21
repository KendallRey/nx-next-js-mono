import React from 'react';
import {
  DateRange,
  INextPage,
  MuiAvatar,
  MuiBox,
  MuiButton,
  MuiDivider,
  MuiList,
  MuiListItem,
  MuiListItemAvatar,
  MuiListItemText,
  MuiPaper,
  MuiRating,
  MuiStack,
  MuiTypography,
  PageBreadCrumbs,
} from '@nx-next-js-micro/components';
import { Dashboard } from '@nx-next-js-micro/ui';
import Section from 'ui/src/section/Section';
import ProductPreviewImages from 'apps/fire-bnb/components/product/ProductPreviewImages';
import ReservationCard from 'apps/fire-bnb/components/reservation/ReservationCard';
import { formatToCount } from 'components/src/helper/component';
import { FaAward } from 'react-icons/fa';
import { PiDesktopTowerLight } from 'react-icons/pi';
import { PiDoorOpenDuotone } from 'react-icons/pi';
import { PiCalendarCheckThin } from 'react-icons/pi';
import { PLACEHOLDER } from 'apps/fire-bnb/placeholder/Placeholder';
import Image from 'next/image';
import ProductAmenities from 'apps/fire-bnb/components/product/ProductAmenities';
import ReservationDates from 'apps/fire-bnb/components/reservation/ReservationDates';
import Reviews from 'apps/fire-bnb/components/reviews/Reviews';
import ProductLocation from 'apps/fire-bnb/components/product/ProductLocation';
import ProductHost from 'apps/fire-bnb/components/product/ProductHost';
import ProductNotes from 'apps/fire-bnb/components/product/ProductNotes';

const ViewRoomPage: React.FC<INextPage> = (props) => {
  const { params } = props;
  return (
    <Dashboard>
      <Section className="flex flex-col gap-6" maxWidth={1200}>
        <ProductPreviewImages />
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-12">
          <MuiBox className="flex flex-col flex-grow gap-8">
            <div>
              <MuiTypography fontSize={24}>
                Entire cabin in Quezon City, Manila
              </MuiTypography>
              <MuiStack direction={'row'} gap={1}>
                <MuiTypography>4 guests</MuiTypography>
                <MuiTypography>1 bedroom</MuiTypography>
                <MuiTypography>2 beds</MuiTypography>
                <MuiTypography>1 bath</MuiTypography>
              </MuiStack>
            </div>
            <MuiPaper
              variant="outlined"
              className="flex gap-4 p-4 items-center"
              sx={{ borderRadius: 4 }}
            >
              <div>
                <FaAward />
              </div>
              <MuiTypography className="max-w-[320px] hidden lg:block">
                One of the most loved products on Firebnb, according to guests
              </MuiTypography>
              <MuiStack alignItems={'center'}>
                <MuiTypography fontSize={20} fontWeight={600}>
                  4.5
                </MuiTypography>
                <MuiRating
                  value={4.5}
                  max={5}
                  precision={0.5}
                  readOnly
                  size="small"
                />
              </MuiStack>
              <MuiDivider orientation="vertical" />
              <MuiStack alignItems={'center'}>
                <MuiTypography fontSize={20} fontWeight={600}>
                  {formatToCount(1223)}
                </MuiTypography>
                <MuiTypography
                  variant="subtitle2"
                  sx={{ textDecoration: 'underline' }}
                >
                  Reviews
                </MuiTypography>
              </MuiStack>
            </MuiPaper>
            <MuiListItem component={'div'} className="flex gap-4">
              <MuiListItemAvatar>
                <MuiAvatar sx={{ width: 56, height: 56 }} />
              </MuiListItemAvatar>
              <MuiListItemText
                primary="John Smith"
                secondary="Premium Member • 4 years member"
              />
            </MuiListItem>
            <MuiDivider />
            <MuiList>
              <MuiListItem component={'div'} className="flex gap-4">
                <MuiListItemAvatar>
                  <PiDesktopTowerLight fontSize={32} />
                </MuiListItemAvatar>
                <MuiListItemText
                  primary="Great for remote work"
                  secondary="Fast wifi at 165 Mbps, plus a dedicated workspace."
                />
              </MuiListItem>
              <MuiListItem component={'div'} className="flex gap-4">
                <MuiListItemAvatar>
                  <PiDoorOpenDuotone fontSize={32} />
                </MuiListItemAvatar>
                <MuiListItemText
                  primary="Self check-in"
                  secondary="You can check in with the building staff."
                />
              </MuiListItem>
              <MuiListItem component={'div'} className="flex gap-4">
                <MuiListItemAvatar>
                  <PiCalendarCheckThin fontSize={32} />
                </MuiListItemAvatar>
                <MuiListItemText
                  primary="Free cancellation for 48 hours"
                  secondary="Get a full refund if you change your mind."
                />
              </MuiListItem>
            </MuiList>
            <MuiDivider />
            <MuiBox sx={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
              <MuiStack>
                <MuiTypography
                  component={'div'}
                  textOverflow={'ellipsis'}
                  overflow={'hidden'}
                >
                  {PLACEHOLDER.PRODUCT_DESCRIPTION_1}
                </MuiTypography>
                <span>
                  <MuiButton variant="text">Show More</MuiButton>
                </span>
              </MuiStack>
            </MuiBox>
            <MuiDivider />
            <MuiStack gap={2}>
              <MuiTypography fontSize={20}>Where you'll sleep</MuiTypography>
              <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src={'/images/sample.webp'}
                  objectFit="cover"
                  alt="test1"
                  fill
                  className=" top-0 left-0 object-cover"
                />
              </div>
              <MuiStack>
                <MuiTypography>Bedroom</MuiTypography>
                <MuiTypography variant="subtitle2">
                  1 queen bed, 1 sofa bed, 1 floor mattress
                </MuiTypography>
              </MuiStack>
            </MuiStack>
            <MuiDivider />
            <ProductAmenities />
            <MuiDivider />
            <ReservationDates />
          </MuiBox>
          <div className="">
            <ReservationCard nightPrice={5000} cleaningFee={600} />
          </div>
        </div>
        <MuiDivider/>
        <Reviews/>
        <MuiDivider/>
        <ProductLocation/>
        <MuiDivider/>
        <ProductHost/>
        <MuiDivider/>
        <ProductNotes/>
      </Section>
      <MuiDivider/>
      <MuiBox>
        <PageBreadCrumbs route='Firebnb/Philippines/Luzon'/>
      </MuiBox>
    </Dashboard>
  );
};

export default ViewRoomPage;
