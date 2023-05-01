import bg from './images/wp1874155.jpg';
import logo from './logo.png';
import './App.css';
import { Button, Pane, Text, majorScale, ButtonIcon, CogIcon, EditIcon, ManualIcon, TrashIcon, SearchIcon, CaretDownIcon, IconButton, TickIcon, Popover, Position, PeopleIcon, CircleArrowRightIcon  } from 'evergreen-ui';

import Admin from "./admin_views/admin.js";


function App() {
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

export default App();