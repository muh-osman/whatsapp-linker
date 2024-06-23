import style from "./Dashboard.module.scss";
// React router
import { Link } from "react-router-dom";
// React
import { useEffect } from "react";
// MUI
import LinearProgress from "@mui/material/LinearProgress";
// API
import useShowNumbersApi from "../../API/useShowNumbersApi";
// Toastify
import { toast } from "react-toastify";
// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Dashboard() {
  const { data, isLoading, isError, error, fetchStatus, isSuccess } =
    useShowNumbersApi();

  useEffect(() => {
    if (isError) {
      console.error(error);
      const errorMessage =
        error?.response?.data?.message || error?.message || "An error occurred";
      // Toastify
      toast.error(errorMessage);
    }
  }, [error]);

  // Helper function to format the date
  const formatDate = (laravelTimestamp) => {
    const dateObject = new Date(laravelTimestamp);
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(dateObject);
  };

  return (
    <div className={style.container}>
      {fetchStatus === "fetching" && (
        <div className={style.progressContainer}>
          <LinearProgress />
        </div>
      )}

      <h1>Dashboard</h1>
      {isSuccess && data?.length === 0 && <p>No numbers to show.</p>}

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Number</TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map(({ id, number, created_at }) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="center">{number}</TableCell>
                  <TableCell align="center">{formatDate(created_at)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
