Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@jpmutschler 
jpmutschler
/
UT_React
Public
Cannot fork because you own this repository and are not a member of any organizations.
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
UT_React/App.js /
@jpmutschler
jpmutschler Add files via upload
Latest commit 44068ec 2 hours ago
 History
 1 contributor
45 lines (37 sloc)  1.54 KB
 

import bg from './images/wp1874155.jpg';
import logo from './logo.png';
import './App.css';
import { Button, Pane, Text, majorScale, ButtonIcon, CogIcon, EditIcon, ManualIcon, TrashIcon, SearchIcon, CaretDownIcon, IconButton, TickIcon  } from 'evergreen-ui';
import { Popover, Position, PeopleIcon, CircleArrowRightIcon } from 'evergreen-ui'
import { BrowserRouter, Link } from 'react-router-dom';

import Admin from "./admin_views/admin.js";


function App() {
		
  return (	
	<BrowserRouter>
    <div className="App">
		<Pane display="flex" alignItems="right" marginX={majorScale(162)}>
			
			<Link to="/"><IconButton elevation="4" height={56} icon={ManualIcon} marginRight={majorScale(2)} /></Link>
			<IconButton elevation="4" height={56} icon={CogIcon} marginRight={majorScale(2)} onclick="Admin();"/>
			<IconButton elevation="4" height={56} icon={SearchIcon} marginRight={majorScale(2)} />
			<IconButton elevation="4" height={56} icon={TrashIcon} marginRight={majorScale(2)} />
		</Pane>
      <header className="App-header">
        <img src={logo} alt="logo" />
		<a
          className="App-link"
          href="http://www.ijosh.co"
          target="_blank"
          rel="noopener noreferrer"
        >
		<Pane display="flex" alignItems="center" marginX={majorScale(2)}>
			<Button elevation="4" marginRight={12} height={56}>Register</Button>
			<Button elevation="4" marginRight={12} height={56}>Login</Button>
		</Pane>
        </a>
      </header>
	  
    </div>
	</BrowserRouter>
	
  );
};
