import React, { Component } from 'react';
import Constants from "../utils/Constants"
import Select from "react-select";
class App extends Component {

  state = {
    dropdownData: [],
    dropdownValue: {},
    dropdownInputTextValue: "",
    //use this state  for focusing
    isDDfocused: false,
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

  // use this to set focus to variable on the dropdown, and then set custom class for to style the
  //container
  toggleFocusState = () => {
    this.setState({ isDDfocused: !this.state.isDDfocused })
  }

  render() {
    const customStyles = {
      option: (provided) => ({
        ...provided,
        '&:hover': {
          background: "rgba(0, 0, 255, 0.1)"
        },
        background: "white",
        color: "black"
      }),
      container: (provided) => ({
        ...provided,
        width: "200px",
      })
    }
    return (
      this.state.show &&
      <div className="container">
        <Select
          id="test-id"
          instanceId="test-instance-id"
          inputId="test-input-id"
          // styles={customStyles}
          //edit this className prop for focus
          //look at index.css for the style 
          className={
            this.state.isDDfocused ?
              "react-select-container--is-focused" :
              "react-select-container"
          }
          classNamePrefix={"react-select"}
          theme={(theme) => {
            console.log(JSON.stringify(theme, null, 2));
            const t = ({

              ...theme,
              colors: {
                // ...theme.colors,
                // primary: "white"
              },
            })

            console.log(JSON.stringify(t, null, 2));
            return t;
          }}
          //add this for focus styling{onFocus}
          onFocus={this.toggleFocusState}
          //add this for focus styling{onBlur}
          onBlur={this.toggleFocusState}
          isSearchable={true}
          options={this.state.dropdownData}
          getOptionLabel={option => option.name}
          isClearable={true}
          noOptionsMessage={() => "No Options To Select!"}
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
