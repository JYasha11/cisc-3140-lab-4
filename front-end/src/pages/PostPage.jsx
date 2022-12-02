import {Typography} from '@material-ui/core'; 
import { createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import NavBar from '../components/NavBar';

const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });

  const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
    },
    bigSpace: {
      marginTop: "5rem"
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    grid:{
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
    },
  })
  
  function HomePage() {
    const classes = styles(); 
      return (
        <div className="App">
          <ThemeProvider theme={theme}>
            <NavBar/>
            <div className={classes.wrapper}>
              <Typography variant="h4" className={classes.bigSpace} color="primary">
                At AlgoViz We Are Passionate About Programming.
              </Typography>
              <Typography variant="h5" className={classes.littleSpace} color="primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas gravida ullamcorper.
              </Typography>
            </div>
            <div className={classes.bigSpace}>
            </div>
          </ThemeProvider>
        </div>
      );
      }
  
  export default HomePage;