import React, { Component } from 'react';
import { Row, Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {
    //define constructor
    constructor(props) {
        super(props);

        this.state = {
            asdf: null
            //state stores properties related to component
        }

    }
    //create function to adjust the pageview on state changed on dishselected
    renderDish(selectedDish) {
        //if dish state exists, make these changes, else return empty div
        if (selectedDish != null)
            return(
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(selectedDish) {
        //if dish state exists, make these changes, else return empty div
        if (selectedDish != null) {
            if (selectedDish.comments != null) {
                const comments = this.props.selectedDish.comments.map((comment) => {
                    return (
                        <div key={comment.id} className="col-12">
                            <ListGroupItem>
                                 <div className="col-12">{comment.comment}</div>
                                 <div className="col-12">--{comment.author} , {comment.date} </div>
                            </ListGroupItem>
                            
                        </div>
                    );
                });
                return(
                    <div>
                        <h4 className="col-12">Comments</h4>
                        <ListGroup className="col-12"> {comments} </ListGroup>
                    </div>
                )
            }
            else
                return(
                    <div></div>
                )


        }
              
        else 
            return(
                <div></div>
            );
    }           


    render() {
        return ( 
                <Row>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>

                </Row>

        );
    }
}

//allows other files to import component
export default DishDetail;