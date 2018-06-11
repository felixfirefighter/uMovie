import React, { Component } from "react";
import _ from "lodash";
import {
  Header,
  Container,
  Divider,
  Grid,
  Image,
  Search
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Logo from "../img/tmdb-logo.svg";
import { WIDTH_92 } from "../constants";
import { constructImageUrl } from "../utils/movieHelper";

class Heading extends Component {
  state = {
    results: []
  };

  handleResultSelect = (e, { result }) => {
    console.log(result);

    this.props.history.push(`/movie/${result.key}`);
  };

  handleSearchChange = async (e, { value }) => {
    const res = await axios.get(`/search/movie?query=${encodeURI(value)}`);

    console.log(res.data.results);

    if (res.data && res.data.results) {
      const results = res.data.results.map(movie => {
        return {
          key: movie.id,
          title: movie.original_title,
          description: movie.release_date,
          image: constructImageUrl(WIDTH_92, movie.poster_path)
        };
      });

      this.setState({ results });
    }
  };

  render() {
    console.log(this.props);

    return (
      <Container style={{ paddingTop: "24px" }}>
        <Grid>
          <Grid.Row columns={2} verticalAlign="middle">
            <Grid.Column>
              <Header as="h1">
                <Link to="/" style={{ color: "inherit" }}>
                  uMovie
                </Link>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Search
                fluid
                input={{ fluid: true }}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 1000, {
                  leading: true
                })}
                results={this.state.results}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider />
      </Container>
    );
  }
}

export default withRouter(Heading);
