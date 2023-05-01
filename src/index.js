import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bg from './images/wp1874155.jpg';
import logo from './logo.png';
import './App.css';
import { Button, Pane, Text, majorScale, ButtonIcon, CogIcon, EditIcon, ManualIcon, TrashIcon, SearchIcon, CaretDownIcon, IconButton, TickIcon, Popover, Position, PeopleIcon, CircleArrowRightIcon} from 'evergreen-ui';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
    function App_x() {
          <div className="App">;	
              <Pane display="flex" alignItems="right" marginX={majorScale(162)}>
                
                <IconButton elevation="4" height={56} icon={ManualIcon} marginRight={majorScale(2)} />;
                <IconButton elevation="4" height={56} icon={CogIcon} marginRight={majorScale(2)} />
                <IconButton elevation="4" height={56} icon={SearchIcon} marginRight={majorScale(2)} />
                <IconButton elevation="4" height={56} icon={TrashIcon} marginRight={majorScale(2)} />
            </Pane>
              <header className="App-header">
              <img src={logo} alt="logo" />
              <Pane display="flex" alignItems="center" marginX={majorScale(2)}>
                <Button elevation="4" marginRight={12} height={56}>Register</Button>
                <Button elevation="4" marginRight={12} height={56}>Login</Button>
              </Pane>
              </header>
              
        </div>
      };


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
