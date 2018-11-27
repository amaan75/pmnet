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
    return (
      this.state.show &&
      <div className="container">
        <Select
          isSearchable={true}
          options={this.state.dropdownData}
          getOptionLabel={option => option.name}
          onChange={this.onChangeDropDownValue}
          value={this.state.dropdownValue}
        // isDisabled={this.props.templateDisabled}
        />
      </div>

    )
  }
}

export default App;
