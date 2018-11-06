import React from 'react';
import { Row, Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
   //create function to adjust the pageview on state changed on dishselected
    function RenderDish({dish}) {
        //console.log(this.props.dish);
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
    function RenderComments({comments}) {
        //if dish state exists, make these changes, else return empty div
        if (comments != null) {
            if (comments.comments != null) {
                const comment = comments.comments.map((comment) => {
                    return (
                        <div key={comment.id} className="col-12">
                            <ListGroupItem>
                                 <div className="col-12">{comment.comment}</div>
                                 <div className="col-12">--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </div>
                            </ListGroupItem>
                            
                        </div>
                    );
                });
                return(
                    <div>
                        <h4 className="col-12">Comments</h4>
                        <ListGroup className="col-12"> {comment} </ListGroup>
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

    const  DishDetail = (props) => {
        return ( 
            <div className="container">
                <Row>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish}/>
                    </div>

                </Row>
            </div>

        );
    }


//allows other files to import component
export default DishDetail;