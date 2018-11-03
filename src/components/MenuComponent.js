import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {
    //define constructor
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
            //state stores properties related to component
        }

    }

    //create function to adjust state when dish is selected
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    //create function to adjust the pageview on state changed on dishselected
    renderDish(dish) {
        //if dish state exists, make these changes, else return empty div
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    //render function
    render() {

        //establish javascript constant
        //map is iterate over items
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        //for all lists every item requires a key attribute

        //tells what to return
        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

//allows other files to import component
export default Menu;