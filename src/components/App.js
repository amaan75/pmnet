import React, { Component } from 'react';
import Constants from "../utils/Constants"
import Select from "react-select";
class App extends Component {

  state = {
    dropdownData: [],
    dropdownValue: {},
    dropdownInputTextValue: "",
    show: false
  }


  componentDidMount() {
    this.fetchDropdownData()
  }

  fetchDropdownData = () => {
    const options = Constants.DROP_DOWN_DATA;

    this.setState({ dropdownData: options, show: true, dropdownValue: options[0] })
  }

  onChangeDropDownValue = (option, { action }) => {
    if (action === 'select-option')
      this.setState({ dropdownValue: option })
  }


  render() {
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        '&:hover': {
          background: "rgba(0, 0, 255, 0.1)"
        },
        background: "white",
        color: "black"
      })
    }
    return (
      this.state.show &&
      <div className="container">
        <Select
          styles={customStyles}
          isSearchable={true}
          options={this.state.dropdownData}
          getOptionLabel={option => option.name}
          isClearable={false}
          backspaceRemovesValue={true}
          onChange={this.onChangeDropDownValue}
          inputValue={this.state.dropdownInputTextValue}
          onInputChange={(inputValue, { action }) => this.setState({ dropdownInputTextValue: inputValue })}
          value={this.state.dropdownValue}
        // isDisabled={this.props.templateDisabled}
        />
      </div>

    )
  }
}

export default App;
