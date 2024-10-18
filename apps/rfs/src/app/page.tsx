import FloatingNavigation from 'ui/src/floating-navigation/FloatingNavigation';
import { IImageCarousel, ImageCarousel } from '@nx-next-js-micro/ui';
import {
  MuiAvatar,
  MuiBox,
  MuiButton,
  MuiLink,
  MuiList,
  MuiListItem,
  MuiListItemIcon,
  MuiListItemText,
  MuiPaper,
  MuiTypography,
} from '@nx-next-js-micro/components';
import Image from 'next/image';

const IMAGES: IImageCarousel[] = [
  {
    id: 'image1',
    src: '/img1.webp',
    title: 'Title 1',
    children: <div>TEST</div>,
  },
  {
    id: 'image2',
    src: '/img2.webp',
    title: 'Title 2',
    children: <div>TEST</div>,
  },
  {
    id: 'image3',
    src: '/img3.webp',
    title: 'Title 3',
    children: <div>TEST</div>,
  },
  {
    id: 'image4',
    src: '/img4.webp',
    title: 'Title 4',
    children: <div>TEST</div>,
  },
];

const LandingPage = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <main>
      <section>
        <ImageCarousel slides={IMAGES} />
        <FloatingNavigation
          logo={
            <Image src={'/rfs-logo.webp'} alt="RFS" width={100} height={60} />
          }
        >
          <MuiButton variant="outlined" sx={{ borderRadius: 5 }}>
            Home
          </MuiButton>
          <MuiButton variant="outlined" sx={{ borderRadius: 5 }}>
            About Us
          </MuiButton>
          <MuiButton variant="outlined" sx={{ borderRadius: 5 }}>
            Portfolio
          </MuiButton>
          <MuiButton variant="outlined" sx={{ borderRadius: 5 }}>
            Products
          </MuiButton>
          <MuiButton size="large" className="mx-6" sx={{ borderRadius: 5 }}>
            Request Quotation
          </MuiButton>
        </FloatingNavigation>
      </section>
      <section className="flex flex-wrap gap-12 p-12">
        <MuiBox className="flex flex-col flex-grow gap-8 md:flex-1">
          <MuiTypography variant="h1" fontSize={32} fontWeight={600}>
            Robles Fabrication Services - Aluminum & Glass - Doors & Windows
            Fabricator
          </MuiTypography>
          <MuiTypography variant="h6">
            We offer different kinds of services only just for you! Get to know
            us more!
          </MuiTypography>
          <MuiTypography variant="h5" fontWeight={600}>
            Why Choose RFS?
          </MuiTypography>
          <MuiList>
            <MuiListItem>
              <MuiListItemIcon>
                <MuiAvatar src="/svg/engineering_24dp.svg" variant="rounded" />
              </MuiListItemIcon>
              <MuiListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary="Unparalleled Expertise"
                secondary="With a team of highly skilled and experienced professionals, we bring unmatched expertise to every project. Our craftsmen are dedicated to delivering top-notch fabrication solutions tailored to your specific requirements."
              />
            </MuiListItem>
            <MuiListItem>
              <MuiListItemIcon>
                <MuiAvatar src="/svg/receipt_long_24dp.svg" variant="rounded" />
              </MuiListItemIcon>
              <MuiListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary="Cutting-edge Technology"
                secondary="We stay at the forefront of technological advancements, incorporating state-of-the-art equipment and processes in our fabrication services. This ensures precision, efficiency, and the highest quality in every product we create."
              />
            </MuiListItem>
            <MuiListItem>
              <MuiListItemIcon>
                <MuiAvatar src="/svg/receipt_long_24dp.svg" variant="rounded" />
              </MuiListItemIcon>
              <MuiListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary="Versatility in Materials"
                secondary="Whether it's aluminum, glass, or windows fabrication, we excel in working with a variety of materials. Our versatility allows us to meet the unique demands of each project, no matter the scale or complexity."
              />
            </MuiListItem>
            <MuiListItem>
              <MuiListItemIcon>
                <MuiAvatar src="/svg/receipt_long_24dp.svg" variant="rounded" />
              </MuiListItemIcon>
              <MuiListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary="Customization and Design"
                secondary="We understand that every client has distinct needs. That's why we offer a collaborative approach to customization and design. From concept to completion, we work closely with you to bring your vision to life"
              />
            </MuiListItem>
            <MuiListItem>
              <MuiListItemIcon>
                <MuiAvatar src="/svg/handshake_24dp.svg" variant="rounded" />
              </MuiListItemIcon>
              <MuiListItemText
                primaryTypographyProps={{ fontWeight: 600 }}
                primary="Commitment to Sustainability"
                secondary="RFS is committed to sustainable and eco-friendly practices. We strive to minimize our environmental footprint while delivering high-quality, durable, and energy-efficient products."
              />
            </MuiListItem>
          </MuiList>
        </MuiBox>
        <MuiPaper className="overflow-hidden flex-grow md:flex-1" elevation={6}>
          <iframe
            height={'100%'}
            width={'100%'}
            className="min-h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.811703131733!2d120.8607794767791!3d14.835822371271096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33965339b5f40e75%3A0xc7b6ae81d3730dd3!2sRobles%20Fabrication%20Services!5e0!3m2!1sfil!2sph!4v1719805274958!5m2!1sfil!2sph"
          />
        </MuiPaper>
      </section>
    </main>
  );
};

export default LandingPage;
