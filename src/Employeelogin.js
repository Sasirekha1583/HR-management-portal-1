import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

const blackBackgroundStyle = {
  backgroundColor: 'black',
  minHeight: '100vh', // Ensure the background covers the entire viewport height
   // Ensure the background covers the entire viewport height
  color: 'white', // Set text color to white for better visibility
  padding: '20px', // Add padding to the content
};
// CSS styles
const styles = {
  container: {
    padding: '20px',
  },
  card: {
    margin: '10px',
    padding: '15px',
    backgroundColor: '#f0f0f0', // Background color
  },
  title: {
    fontSize: '24px', // Large font size
    color: 'white', // Text color
    marginBottom: '15px',
  },
  cardHeader: {
    fontSize: '18px', // Card header font size
    color: '#007bff', // Card header text color
  },
  secondaryText: {
    fontSize: '16px', // Larger font size
    color: '#666', // Text color
  },
  username: {
    fontSize: '20px', // Custom font size for username
    fontWeight: 'bold', // Make username bold
    color: 'silver', // Custom text color for username
  },
  profileEmoji: {
    fontSize: '24px', // Adjust the size of the emoji
    marginRight: '10px', // Add spacing between emoji and username
  },
};

function Employeelogin() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get('username'); // Get the username from URL parameter

  const [employeeList, setEmployeeList] = useState([]);
  const [employeesList, setEmployeesList] = useState([]);
  const [employeesLists, setEmployeesLists] = useState([]);

  useEffect(() => {
    if (username) {
      axios
        .get(`http://localhost:8080/employeename/${username}`)
        .then((response) => {
          if (response.status === 200) {
            setEmployeeList(response.data);
          } else {
            console.error('Error: Unable to fetch data from the server.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [username]);
  useEffect(() => {
    if (username) {
      axios
        .get(`http://localhost:8080/employeename1/${username}`)
        .then((response) => {
          if (response.status === 200) {
            setEmployeesList(response.data);
          } else {
            console.error('Error: Unable to fetch data from the server.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [username]);
  useEffect(() => {
    if (username) {
      axios
        .get(`http://localhost:8080/employeename2/${username}`)
        .then((response) => {
          if (response.status === 200) {
            setEmployeesLists(response.data);
          } else {
            console.error('Error: Unable to fetch data from the server.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [username]);

  return (
    <div style={blackBackgroundStyle}>
    <Container style={styles.container}>
      <Typography variant="h4" align="center" gutterBottom>
        <h1>Employee Dashboard</h1>
      </Typography>
      <Typography variant="body2" color="textSecondary" style={{...styles.username, fontFamily: 'Arial', fontWeight: 'bold'}} align="center">
       <h1>Employee Name : {username}</h1>
      </Typography>
      <div>
      <Grid>
        {employeeList.map((employee) => (
          <Grid item xs={12} sm={6} md={4} key={employee.reviewi}>
            <Card style={styles.card}>
              <CardHeader title={`Performance`} style={styles.cardHeader} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Review ID: {employee.reviewid}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Employee ID: {employee.employeeid}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Review Date: {employee.reviewdate}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Reviewer ID: {employee.reviewerid}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Comments: {employee.comments}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Ratings: {employee.rating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </div>
      <Grid>
        {employeesList.map((employees) => (
          <Grid item xs={12} sm={6} md={4} key={employees.payrollid}>
            <Card style={styles.card}>
             
              <CardHeader title={`Payroll`} style={styles.cardHeader} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Payroll ID: {employees.payrollid}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Employee ID: {employees.employeeid}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Pay Period: {employees.payperiod}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Salary amount: {employees.salaryamount}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Deductions: {employees.deductions}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Net Pay: {employees.netpay}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid>
        {employeesLists.map((employeess) => (
          <Grid item xs={12} sm={6} md={4} key={employeess.payrollid}>
            <Card style={styles.card}>
              <CardHeader title={`Attendance`} style={styles.cardHeader} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Attendance ID: {employeess.attendanceid}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Employee ID: {employeess.employeeid}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Date: {employeess.date}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Status: {employeess.status}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={styles.secondaryText}>
                  Percentage: {employeess.percentage}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
}

export default Employeelogin;