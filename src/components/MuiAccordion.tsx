import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const MuiAccordion = () => {
  const [isExpanded, setIsExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setIsExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        id="panel1"
        expanded={isExpanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          corrupti obcaecati nesciunt nihil hic consequuntur modi
          exercitationem, assumenda perferendis neque magni placeat. Ipsum
          recusandae beatae harum pariatur itaque. Exercitationem, vero.
        </AccordionDetails>
      </Accordion>

      <Accordion
        id="panel2"
        expanded={isExpanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          corrupti obcaecati nesciunt nihil hic consequuntur modi
          exercitationem, assumenda perferendis neque magni placeat. Ipsum
          recusandae beatae harum pariatur itaque. Exercitationem, vero.
        </AccordionDetails>
      </Accordion>

      <Accordion
        id="panel3"
        expanded={isExpanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          accordion 3
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          corrupti obcaecati nesciunt nihil hic consequuntur modi
          exercitationem, assumenda perferendis neque magni placeat. Ipsum
          recusandae beatae harum pariatur itaque. Exercitationem, vero.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
