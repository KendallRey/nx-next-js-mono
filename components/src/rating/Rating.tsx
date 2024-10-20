import Rating, { RatingProps } from "@mui/material/Rating";

export type IMuiRating = RatingProps;

export const MuiRating: React.FC<IMuiRating> = (props) => {
  return <Rating {...props} />;
};
