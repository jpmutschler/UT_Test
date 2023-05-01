import React from "react";
import logo from '../logo.png';
import '../App.css';
import { Button, Pane, Text, majorScale } from 'evergreen-ui';
import { ButtonIcon, CogIcon, EditIcon, ManualIcon, TrashIcon, SearchIcon, CaretDownIcon } from 'evergreen-ui'
import { IconButton, TickIcon } from 'evergreen-ui'
import { Table } from 'evergreen-ui'

const Admin = () => {
  return (
    <div className="App1">
		<Pane display="flex" alignItems="left" marginX={majorScale(2)}>
			<img src={logo} alt="logo" height={30} />
		</Pane>
      <header className="App-header">
		
      </header>
    </div>
  );
};

export default Admin;