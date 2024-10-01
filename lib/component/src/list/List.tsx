import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemAvatarProps,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemIconProps,
  ListItemProps,
  ListItemText,
  ListItemTextProps,
  ListProps,
} from "@mui/material";
import React from "react";

type IMuiList = ListProps;

const MuiList: React.FC<IMuiList> = (props) => {
  return <List {...props} />;
};

export default MuiList;

type IMuiListItem = ListItemProps;

export const MuiListItem: React.FC<IMuiListItem> = (props) => {
  return <ListItem {...props} />;
};

type IMuiListItemButton = ListItemButtonProps;

export const MuiListItemButton: React.FC<IMuiListItemButton> = (props) => {
  return <ListItemButton {...props} />;
};

type IMuiListItemText = ListItemTextProps;

export const MuiListItemText: React.FC<IMuiListItemText> = (props) => {
  return <ListItemText {...props} />;
};

type IMuiListItemAvatar = ListItemAvatarProps;

export const MuiListItemAvatar: React.FC<IMuiListItemAvatar> = (props) => {
  return <ListItemAvatar {...props} />;
};

type IMuiListItemIcon = ListItemIconProps;

export const MuiListItemIcon: React.FC<IMuiListItemIcon> = (props) => {
  return <ListItemIcon {...props} />;
};
