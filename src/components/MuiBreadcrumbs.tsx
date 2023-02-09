import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbs = () => {
  return (
    <div>
      <Breadcrumbs
        separator={<NavigateNextIcon />}
        maxItems={2}
        itemsBeforeCollapse={2}
      >
        <a className="text-blue-400 hover:underline" href="#">
          item one
        </a>
        <a href="#">item two</a>
        <a href="#">item three</a>
        <a href="#">item four</a>
        <a href="#">item five</a>
        <a href="#">item six</a>
        <a href="#">item seven</a>
      </Breadcrumbs>
    </div>
  );
};

export default MuiBreadcrumbs;
