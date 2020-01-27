import React, { Component } from "react";
import Service from "../services/ServiceFactory/ServiceFactory";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import UserService from "../services/Users/UserService";
import ReactContext from "../context/ReactContext";

const FactoryBookService = Service.get("books");
const FactoryUserService = Service.get("users");

class E extends Component {
  // 1 - if constructor is defined in class component then this will be called FIRST or FIRST TIME COMPONENT MOUNT

  // -1 Mounting Phase - Once
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      value: props.propE,
      isDataLoaded: true,
      showProgress: false
    };
    debugger;
    console.log("constructor is called (this)", this);
    //Method Binding with 'this'
    //this.changeValue = this.changeValue.bind(this);
  }

  async getData() {
    const { data } = await FactoryBookService.get();
    return data;
  }

  async getUserData() {
    const response = await UserService.getAllUsers();
    return response;
  }

  //Start: React LifeCycle Methods -- Common React Lifecycle Methods
  // -4 Mounting Phase - Once
  componentDidMount() {
    debugger;
    /*axios.get("https://fakerestapi.azurewebsites.net/api/Books").then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    */
    console.log("componentDidMount() called this", this);
    this.setState({ isDataLoaded: true, value: this.props.propE });
  }
  //-4 Updating Phase
  componentDidUpdate(prevProps, prevState) {
    debugger;
    console.log("componentDidUpdate is Called (this)", this);
    //if (this.props.propE !== prevProps.propE) {
    //  this.setState({ isDataLoaded: true, value: this.props.propE });
    //}
  }
  //End: React LifeCycle Methods

  //Start: React LifeCycle Methods -- Uncommon React Lifecycle Methods
  //-2 Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    console.log("shouldComponentUpdate is Called (this)", this);
    return true;
  }

  // Deprecated Lifecycle Method.
  /*
  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.selected !== this.props.selected) {
      this.setState({ selected: nextProps.selected });
      this.selectNew();
    }
  }
 */
  //-2 Mounting Phase
  //-1 Updating Phase
  static getDerivedStateFromProps(nextProps, nextState) {
    debugger;
    console.log("getDerivedStateFromProps is Called (this)", this);
    return { value: nextProps.propE };
  }

  //componentWillReceiveProps(newProps) {
  // debugger;
  ////this.setState({ value: newProps.propE, valueSlider: newProps.sliderValue });
  //}
  //End: React LifeCycle Methods

  //Start: Component Level Methods

  changeValue(value) {
    debugger;
    console.log("changeValue method called");
    this.setState({ value: value });
  }

  getDateFromService = value => {
    debugger;
    this.setState({ showProgress: value });
    this.getData()
      .then(data => this.setState({ showProgress: false }))
      .catch(err => console.log("Service Response", err));
    console.log("getDateFromService method called");
  };

  getDataUsingAxios() {
    //Automatic JSON data transformation
    debugger;
    const options = {
      url: "https://fakerestapi.azurewebsites.net/api/Books",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: {
        ID: 33,
        Title: "Test",
        Description: "Test",
        PageCount: 1,
        Excerpt: "Test",
        PublishDate: "2020-01-14T06:20:18.222495+00:00"
      }
    };

    axios(options)
      .then(function(response) {
        console.log("success", response);
      })
      .catch(function(error) {
        console.log("error", error);
      })
      .finally(function() {
        console.log("alway excute");
      });
  }

  getDataUsingFetch() {
    debugger;
    this.getUserData()
      .then(response => console.log("User Data", response))
      .catch(err => console.log("Service Response", err));

    /*
    debugger;
    const url = "https://fakerestapi.azurewebsites.net/api/Books";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        ID: 33,
        Title: "Test",
        Description: "Test",
        PageCount: 1,
        Excerpt: "Test",
        PublishDate: "2020-01-14T06:20:18.222495+00:00"
      })
    };

    fetch(url, options)
      .then(function(response) {
        debugger;
        console.log("fetch success", response);
        return response.json();
      })
      .then(function(data) {
        debugger;
        console.log("fetch data", data);
      })
      .catch(function(error) {
        debugger;
        console.log("fetch error", error);
      })
      .finally(function() {
        debugger;
        console.log("fetch finally");
      });
      */
  }
  //[object_key]:[variable_name] = [default_value]
  // destructuring make the syntax compact.
  //ES6 and ES7 features
  //template literals, destructuring, spread operator, arrow functions, classes
  destructuringFeature() {
    /*
    //Object Destructuring...
    const obj = {
      name: "",
      city: "",
      age: 0,
      company: "Learn TS"
    };

    //The new rest parameter syntax (...param) added in ES6
    const { name, age, ...rest } = obj;
    console.log(name); // Param
    console.log(age); // 20
    console.log(rest); // { city: 'Tallinn', company: 'Learn TS', }

    // Here I am using ES6 template literals
    //console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);

    //Array Destructuring...
    // Array Of Objects

    const arryNames = [{ name: "name1" }, { name: "name2" }, { name: "name3" }];

    const [first, ...restOfArray] = arryNames;
    console.log(first); // { name: 'name1' }
    console.log(restOfArr); // [{ name: 'name2' }, { name: 'name3' }]
    */
    //Cloning Arrays
    /*
    const rainbow = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet"
    ];
    const rainbowClone = rainbow;  
    */
  }

  //End: Component Level Methods

  // -3 Mounting Phase
  // -3 Updating Phase
  render() {
    debugger;
    let { isDataLoaded } = this.state;
    //let isDataLoaded = true;
    return isDataLoaded ? (
      <React.Fragment>
        <ReactContext.Consumer>{value => <p>{value}</p>}</ReactContext.Consumer>

        <div
          style={{
            width: 100,
            height: 100,
            background: "black",
            color: "White"
          }}
        >
          E - {this.state != null ? this.state.value : null}
          {
            //this.props != null ? this.props.propE : null
            <input
              type="submit"
              value="Submit"
              onClick={() => this.props.changeValue("Text From E")}
            />
            /*
          <input
            type="button"
            value="Get Data"
            onClick={() => this.getDateFromService(true)}
          />
            */
          }
          <input
            type="button"
            value="Get Data"
            onClick={() => this.getDataUsingFetch()}
          />
        </div>
        <Modal
          size="lg"
          show={this.state.showProgress}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Modal.Body>
            <ProgressBar variant="warning" animated now={100} />
          </Modal.Body>
        </Modal>
      </React.Fragment>
    ) : null;
  }
}

export default E;

//When CONSTRUCTOR is defined in CLASS COMPONENT
// 1- contructor is called
// 2- static getDerivedStateFromProps() is called
// 3- render is called
// 4- componentDidMount is called -- In that we can call the setState method
//if setState is called inside this method then
//after every setState call and before the render method call  shouldComponentUpdate(nextProps, nextState) is executed if it returns TRUE then render method is called
//4-1 render is again called
//4-2 componentDidUpdate is called which hold the prevProps, prevState

//When CONSTRUCTOR is not defined in CLASS COMPONENT
// 1- static getDerivedStateFromProps() is called
// 2- render is called
// 3- componentDidMount is called -- In that we can call the setState method
