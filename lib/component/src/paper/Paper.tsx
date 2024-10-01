import Paper, { PaperProps } from "@mui/material/Paper";

type IMuiPaper = PaperProps;

const MuiPaper: React.FC<IMuiPaper> = (props) => {
  return <Paper {...props} />;
};

export default MuiPaper;
