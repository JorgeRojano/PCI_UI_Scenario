import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const dateFormatter = (params: { value: string | number | Date; }) => {
  const dateObj = new Date(params.value);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = String(dateObj.getFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
};

const hazardousAnswerFormatter = (params: { value: string; }) => {
  if (params.value === 'Y') {
    return 'Yes';
  } else if (params.value === 'N') {
    return 'No';
  } else if (params.value === 'n/a') {
    return '';
  } else {
    return params.value;
  }
}

const defaultColDef = {
  sortable: true,
  filter: "agTextColumnFilter",
};

const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation" },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    filter: "agDateColumnFilter",
    valueFormatter: dateFormatter,
  },
  { field: "h_mag", headerName: "H (mag)", filter: "agNumberColumnFilter" },
  { field: "moid_au", headerName: "MOID (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_1", headerName: "q (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_2", headerName: "Q (au)", filter: "agNumberColumnFilter" },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    filter: "agNumberColumnFilter",
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    filter: "agNumberColumnFilter",
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    valueFormatter: hazardousAnswerFormatter,
  },
  { field: "orbit_class", headerName: "Orbit Class", enableRowGroup: true },
];

const NeoGrid = (): JSX.Element => {
  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowGroupPanelShow={'always'}
        /* enableRangeSelection is only available in enterprise version https://www.ag-grid.com/react-data-grid/range-selection/#copy-range-down */
      />
    </div>
  );
};

export default NeoGrid;
