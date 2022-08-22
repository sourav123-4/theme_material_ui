import "./App.css";
import {
  createTheme,
  ThemeProvider,
  colors,
  Chip,
  Button,
  Input,
  TextField,
} from "@mui/material";
import Home from "./Home";
import { makeStyles, styled } from "@mui/styles";
import * as React from "react";
import { experimental_sx as sx } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider, { sliderClasses } from "@mui/material/Slider";
import { alpha } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
const finalTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        valueLabel: ({ ownerState, theme }) => ({
          ...(ownerState.orientation === "vertical" && {
            backgroundColor: "transparent",
            color: theme.palette.grey[500],
            fontWeight: 700,
            padding: 0,
            left: "3rem",
          }),
          [`&.${sliderClasses.valueLabelOpen}`]: {
            transform: "none",
            top: "initial",
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: sx({
          px: 1,
          py: 0.25,
          borderRadius: 1,
        }),
        label: {
          padding: "initial",
        },
        icon: sx({
          mr: 0.5,
          ml: "-2px",
        }),
      },
    },
  },
});

function valuetext(value) {
  return `${value}°C`;
}
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.1rem',
          backgroundColor:"green",
          color:"white"
        },
      },
    },
  },
  status:{
    danger:'#e53e3e'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 800,
      lg: 1100,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#f00",
    },
    secondary: {
      main: "#0f0",
    },
    background: colors.blue[500],
  },
  typography: {
    fontFamily: "Comic Sans MS",
    body2: {
      fontFamily: "Times New Roman",
      fontSize: "1.1rem",
    },
    button: {
      fontSize: "1.1rem",
      variant: "contained"
    },
  },
  shape: {
    borderRadius: 30,
  },
  spacing: 8,
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "green",
      },
    },
    MuiInputLabel: {
      root: {
        backgroundColor: "yellow",
      },
    },
    MuiTextField: {
      root: {},
    },

    MuiButton: {
      root: {
        textTransform: "none",
        padding: "20px",
        variant:"contained"
      },
      fullWidth: {
        maxWidth: "300px",
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: "contained",
      color: "#fff000",
    },
    MuiCheckbox: {
      disableRipple: true,
    },
    MuiTextField: {
      variant: "filled",
      InputLabelProps: {
        shrink: true,
      },
    },
    MuiPaper: {
      elevation: 12,
    },
    MuiCard: {
      elevation: 12,
    },
  },
});

const SuccessSlider = styled(Slider)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-selected": {
      backgroundColor: purple,
    },
  },
}));

export function StyledCustomization() {
  return <SuccessSlider defaultValue={30} />;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6">Form</Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container>
        <Box marginTop={10} sx={{ width: "300px" }}>
          <Grid>
            <Input placeholder="First-Name" defaultValue="hello" />
            <Input placeholder="Last-Nmae" />
            <Button>Submit</Button>
          </Grid>
        </Box>
        <Chip label="hello all" color="success" />
        <Box sx={{ height: 180, display: "inline-block" }}>
          <Slider
            getAriaLabel={() => "Temperature"}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={50}
            marks={[
              { value: 0 },
              { value: 25 },
              { value: 50 },
              { value: 75 },
              { value: 100 },
            ]}
            min={10}
            max={110}
            valueLabelFormat={valuetext}
            valueLabelDisplay="on"
            sx={{
              color: 'success.main',
              '& .MuiSlider-thumb': {
                borderRadius: '1px',
              },
            }}
          />
        </Box>
        <StyledCustomization />
        <Button bgcolor="palette.primary.light">Go</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
