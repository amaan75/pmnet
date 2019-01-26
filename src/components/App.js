import React, { Component } from 'react';
import Constants from "../utils/Constants"
import Select from "react-select";
import 'react-select/dist/react-select.css';
import "./select.scss";
import { InputWithLabel } from './pm_input/Input';
import CardPage from './CardPage/CardPage';
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

  onChangeDropDownValue = (option, props) => {
    // const { action } = props;
    // if (action === 'select-option')
    this.setState({ dropdownValue: option })
  }

  // use this to set focus to variable on the dropdown, and then set custom class for to style the
  //container
  toggleFocusState = () => {
    this.setState({ isDDfocused: !this.state.isDDfocused })
  }

  render() {

    const Option = props => {
      console.log(props);
      return (
        <div
          ref={props.innerRef}
          style={props.getStyles("option", props)}
          {...props.innerProps}
          aria-label="hey1"
        />
      );
    };

    const SelectContainer = props => {
      console.log(props);
      return (
        <div
          ref={props.innerRef}
          style={props.getStyles("container", props)}
          {...props.innerProps}
          role="listbox"
          aria-label="hey1"
        >{props.children}</div>
      );
    };
    const customStyles = {
      option: (provided) => ({
        ...provided,
        '&:hover': {
          background: "rgba(0, 0, 255, 0.1)"
        },
        background: "white",
        color: "black"
      }),
      control: (provided, state) => ({
        ...provided,
        //use this if you want to do this via props
        outline: state.isFocused ? "2px dotted #333333" : "",
      }),
      container: (provided, state) => ({
        ...provided,
        width: "200px",
        //use this if you want to do this via props
        // outline: state.isFocused ? "2px dotted #333333" : "",
      })
    }
    return (
      <React.Fragment>

        {false &&
          <React.Fragment>

            <div className="container">
              <Select
                id="test-id"
                instanceId="coa-instance-id"
                inputId="test-input-id"
                // menuIsOpen={true}
                // components={{ SelectContainer, Option }}
                // styles={customStyles}
                //edit this className prop for focus
                //look at index.css for the style 
                className={
                  // this.state.isDDfocused ?
                  //   "react-select-container--is-focused" :
                  "coa-select-container"
                }
                classNamePrefix={"coa-select"}
                // theme={(theme) => {
                //   console.log(JSON.stringify(theme, null, 2));
                //   const t = ({

                //     ...theme,
                //     colors: {
                //       // ...theme.colors,
                //       // primary: "white"
                //     },
                //   })

                //   console.log(JSON.stringify(t, null, 2));
                //   return t;
                // }}
                // //add this for focus styling{onFocus}
                // onFocus={this.toggleFocusState}
                // //add this for focus styling{onBlur}
                // onBlur={this.toggleFocusState}
                searchable={true}
                options={this.state.dropdownData}
                // getOptionLabel={option => option.name}
                // isClearable={true}
                // isDisabled={true}
                // noOptionsMessage={() => "No Options To Select!"}
                // backspaceRemovesValue={true}
                onChange={this.onChangeDropDownValue}
                // inputValue={this.state.dropdownInputTextValue}
                // onInputChange={(inputValue, { action }) => this.setState({ dropdownInputTextValue: inputValue })}
                value={this.state.dropdownValue}
                matchPos={"start"}
                matchProp={"label"}
                disabled={false}
                clearable={false}
                autosize={false}

              />

              <div className="input1">
                <InputWithLabel />
              </div>
            </div>
          </React.Fragment>}
        <CardPage />
      </React.Fragment>
    )
  }
}

export default App;
