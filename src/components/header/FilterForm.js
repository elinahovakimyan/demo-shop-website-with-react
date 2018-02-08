import React from 'react';

class FilterForm extends React.Component {
      constructor() {
        super();
        this.state = {
          equipment: false,
          study: false,
          art: false,
          clothes: false,
          other: false
        }
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.toggleIsChecked = this.toggleIsChecked.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
      }

      handleCheckboxChange(event) {
          console.log("checkbox changed!", event);
          this.setState({isChecked: event.target.checked});
      }

      toggleIsChecked() {
          console.log("toggling isChecked value!");
          this.setState({study: !this.state.study});
      }

      handleButtonClick(event) {
          console.log("button was pressed!", event);
          this.toggleIsChecked();
      }

      render() {
          return (
              <div>
                <label onClick={this.handleButtonClick}>
                  <input type="checkbox" checked={this.state.equipment} />
                  Equipment
                </label>
                <label onClick={this.handleButtonClick} value="study">
                  <input type="checkbox" checked={this.state.study} />
                  Study
                </label>
                <label onClick={this.handleButtonClick}>
                  <input type="checkbox" checked={this.state.clothes} />
                  Clothes
                </label>
                <label onClick={this.handleButtonClick}>
                  <input type="checkbox" checked={this.state.art} />
                  Art
                </label>
                <label onClick={this.handleButtonClick}>
                  <input type="checkbox" checked={this.state.other} />
                  Other
                </label>
              </div>
          );
      }

}

export default FilterForm;
