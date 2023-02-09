import { Badge } from "@mui/material";

const MuiBadge = () => {
  return (
    <div className="flex space-x-7">
      <Badge badgeContent={7} color="primary">
        <div className="bg-green-500 w-10 h-10"></div>
      </Badge>

      <Badge badgeContent={100} color="primary" max={99}>
        <div className="bg-green-500 w-10 h-10"></div>
      </Badge>

      <Badge badgeContent={1000} color="primary" max={999}>
        <div className="bg-green-500 w-10 h-10"></div>
      </Badge>

      <Badge variant="dot" color="primary" max={999}>
        <div className="bg-green-500 w-10 h-10"></div>
      </Badge>
    </div>
  );
};

export default MuiBadge;
