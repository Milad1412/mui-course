import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareIcon from "@mui/icons-material/Share";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

const MuiSpeeddial = () => {
  return (
    <div>
      <SpeedDial ariaLabel="speedDial" icon={<SpeedDialIcon />}>
        <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<LocalPrintshopIcon />} tooltipTitle="Print" />
      </SpeedDial>
    </div>
  );
};

export default MuiSpeeddial;
