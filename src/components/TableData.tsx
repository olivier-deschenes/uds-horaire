import * as React from 'react';

type Props = {
  classCode?: string
};

function TableData({classCode}: Props) {
  return (
    <td data-empty={classCode === undefined} data-class-type={classCode === "OPT." ? "option" : "normal"}>
      {
        (classCode !== undefined && classCode !== "OPT.") ?
        <a
          target={'_blank'}
          href={'https://www.usherbrooke.ca/admission/fiches-cours/' + classCode}
        >
          {classCode}
        </a> : classCode ?? ''
      }
    </td>
  );
};

export default TableData;
