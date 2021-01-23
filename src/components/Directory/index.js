import React, { Component } from "react";
import Row from "../Row";
import Col from "../Col";
import Table from "../Table";
import SearchForm from "../SearchForm";
import Container from "../Container";
import API from "../../utils/API";

class DataBaseContainer extends Component {
  state = {
    search: "",
    error: "",
    results: [],
  };

  // When the component mounts, get a list of twenty five randomly generated employees update this.state.results
  componentDidMount() {
    this.startArchive()
  }

  searchArchive = () => {

    API.getObjects()
      .then((res) => this.setState({ results: res.data.Items }))
      .catch((err) => console.log(err));
  };

  startArchive = () => {
    API.getObjects()
      .then((res) => this.setState({ results: res.data.Items }))
      .catch((err) => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(event.target)
    console.log(value)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArchive(this.state.search);
  };

  render() {
    console.log(this.state.search)
    return (
      <Container>
        <Row>
            <SearchForm
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          <Col size="md-12">
            <Table
              results={this.state.results}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DataBaseContainer;
