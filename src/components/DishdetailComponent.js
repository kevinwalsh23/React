import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem, Col, Button, Modal, ModalHeader, ModalBody, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        //specifying toggleNav is available to use and bound to 'this'
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
        //event.preventDefault();
    }

    render() {
        return(
           <div>
                <Button type="submit" className="m-4 fa fa-pencil" outline onClick={this.toggleModal}>
                     <span> </span>Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="FormGroup">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        placeholder="Rating"
                                        className="form-control"
                                        defaultValue="1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="FormGroup">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less',
                                        }}
                                    />
                                    
                                </Col>
                            </Row>
                            <Row className="FormGroup">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                   <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <br></br>
                            <Row className="FormGroup">
                                <Col md={{size:12}}>
                                    <Button type="submit" color="primary" >
                                    <span>Submit</span>
                                    </Button>
      
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}


//create function to adjust the pageview on state changed on dishselected
    function RenderDish({dish}) {
        //console.log(this.props.dish);
        //if dish state exists, make these changes, else return empty div
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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
    function RenderComments({comments, addComment, dishId}) {
        //console.log(comments);
        //if dish state exists, make these changes, else return empty div
        if (comments != null) {
            const comment = comments.map((comment) => {
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
                    <CommentForm dishId={dishId} addComment={addComment}/>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }
    

          

    const  DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
            );
        }
        else if (props.dish != null) {
            return ( 
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} 
                        addComment={props.addComment}
                        dishId={props.dish.id}/>
                    </div>
                </div>
                </div>

            );
        }
}


//allows other files to import component
export default DishDetail;