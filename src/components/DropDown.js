import React from 'react'
import './DropDown.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';


const DropDown = ({filter,setFilter}) => {

  const handleSelect=(e)=>{
    console.log(e);
    setFilter(e);
  }

  return (

        <div className="drop-down-div">
          <DropdownButton
              
              title="Filter by Region"
              id="dropdown-menu-align-right"
              variant='dark'
              className='dropdown'
              onSelect={handleSelect}
            
                >
                      <Dropdown.Item eventKey="Africa">Africa</Dropdown.Item>
                      <Dropdown.Item eventKey="America">America</Dropdown.Item>
                      <Dropdown.Item eventKey="Asia">Asia</Dropdown.Item>
                      <Dropdown.Item eventKey="Europe">Europe</Dropdown.Item>
                      <Dropdown.Item eventKey="Ocenia">Ocenia</Dropdown.Item>
                      
        </DropdownButton>
        </div>
  )
}

export default DropDown