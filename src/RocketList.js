import { render } from "@testing-library/react";
import './App.css';

import  {React, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default class RocketList extends Component{
    constructor(props){
    super(props);
    this.state = {
        rockets: [],
        loading: true
    };
}

getRocketInfo() {
    fetch('https://api.spacexdata.com/v4/rockets/')
    .then(response => response.json())
    .then(data => this.setState({rockets: data, loading: false}))
}

componentDidMount() {
    setTimeout(() => {
        this.getRocketInfo();
    }, 3000);
}

displayRocket(rocket){
    console.log(rocket)
    return(
        <div>
        <Card className= "rocket">
      <CardActionArea>
        <CardMedia
          className= "rocket"
          image={rocket.flickr_images[0]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {rocket.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {rocket.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
                
        </div>    
        );
}

render() {
    return(
        <div>
            <h1>Rocket List</h1>
            <section>
                {this.state.loading && <h2><img src="https://www.petsmart.com/on/demandware.static/Sites-PetSmart-Site/-/default/dwd7fb2354/images/dog_loader_250x250.gif" />
                </h2>}
                {this.state.rockets.map(this.displayRocket)}
            </section>
        </div>
    );
}
}