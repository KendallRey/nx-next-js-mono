'use client';

import {
  MuiButton,
  MuiDialog,
  MuiDivider,
  MuiList,
  MuiListItem,
  MuiListItemIcon,
  MuiListItemText,
  MuiTypography,
} from '@nx-next-js-micro/components';
import React, { useMemo, useState } from 'react';
import { PiCity } from 'react-icons/pi';
import { PiHandSoap } from 'react-icons/pi';
import { PiShower } from 'react-icons/pi';
import { PiHairDryer } from 'react-icons/pi';
import { TbAirConditioningDisabled } from 'react-icons/tb';
import { PiTelevisionSimple } from 'react-icons/pi';
import { TbToolsKitchen } from 'react-icons/tb';
import { IoWifiSharp } from 'react-icons/io5';
import { BsPersonWorkspace } from 'react-icons/bs';
import { PiSwimmingPoolLight } from 'react-icons/pi';
import { PiElevator } from 'react-icons/pi';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { LuMicrowave } from 'react-icons/lu';

const AMENITIES = [
  { id: '1', name: 'City skyline view', icon: <PiCity fontSize={32} /> },
  { id: '1.1', name: 'Kitchen', icon: <TbToolsKitchen fontSize={32} /> },
  {
    id: '2',
    name: 'Fast wifi – 165 Mbps',
    icon: <IoWifiSharp fontSize={32} />,
  },
  {
    id: '3',
    name: 'Dedicated workspace',
    icon: <BsPersonWorkspace fontSize={32} />,
  },
  {
    id: '4',
    name: 'Shared indoor pool - available all year, open specific hours, rooftop',
    icon: <PiSwimmingPoolLight fontSize={32} />,
  },
  {
    id: '5',
    name: '55 inch HDTV with Netflix, premium cable, standard cable',
    icon: <PiTelevisionSimple fontSize={32} />,
  },
  { id: '6', name: 'Elevator', icon: <PiElevator fontSize={32} /> },
  {
    id: '7',
    name: 'AC - split type ductless system',
    icon: <TbAirConditioningDisabled fontSize={32} />,
  },
  { id: '9', name: 'Hair dryer', icon: <PiHairDryer fontSize={32} /> },
  { id: '10', name: 'Cleaning products', icon: <PiCity fontSize={32} /> },
  { id: '11', name: 'Shower', icon: <PiShower fontSize={32} /> },
  { id: '13', name: 'Hand soap', icon: <PiHandSoap fontSize={32} /> },
  {
    id: '14',
    name: 'Freezer',
    icon: <CgSmartHomeRefrigerator fontSize={32} />,
  },
  { id: '15', name: 'Microwave', icon: <LuMicrowave fontSize={32} /> },
];

const DISPLAY_ITEMS_LIMIT = 8;

const ProductAmenities = () => {
  const [open, setOpen] = useState(false);

  const showOpenDialogButton = useMemo(() => {
    return AMENITIES.length > DISPLAY_ITEMS_LIMIT;
  }, [AMENITIES]);

  return (
    <>
      <MuiTypography fontSize={20}>What this place offers</MuiTypography>
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        {AMENITIES.slice(0, DISPLAY_ITEMS_LIMIT).map((item) => (
          <MuiListItem key={item.id} component={'div'}>
            <MuiListItemIcon>{item.icon}</MuiListItemIcon>
            <MuiListItemText primary={item.name} />
          </MuiListItem>
        ))}
      </div>
      {showOpenDialogButton && (
        <span>
          <MuiButton variant="outlined" onClick={() => setOpen(true)}>
            Show Amenities
          </MuiButton>
        </span>
      )}
      <MuiDialog
        title="Amenities"
        hideActions
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
      >
        <MuiList>
          {AMENITIES.map((item) => (
            <MuiListItem key={item.id} className="border-b">
              <MuiListItemIcon>{item.icon}</MuiListItemIcon>
              <MuiListItemText primary={item.name} />
            </MuiListItem>
          ))}
        </MuiList>
      </MuiDialog>
    </>
  );
};

export default ProductAmenities;
