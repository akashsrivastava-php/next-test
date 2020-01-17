import React, { useEffect, useState } from "react";
import { Button, Card, CardHeader, CardBody, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Col } from "reactstrap";
import { validateForm } from '../../utils/helper'
import MenuNavbar from "../../components/Navbars/MenuNavbar";
import TransparentFooter from "../../components/Footers/TransparentFooter";

function LoginPage() {
  
    const rules = {
        email: {
            isLength: {
                options: {
                    min: 1
                },
                message: 'Email is required!'
            },
            isEmail: {
                message: 'Please enter valid email!'
            }
        },
        password: {
            isLength: {
                options: {
                    min: 1
                },
                message: 'Password is required!'
            }
        }
    }

    useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });

    const handelSubmit = (e) => {
        e.preventDefault()
        const formData =  new FormData(e.target);
        const res = validateForm(formData, rules)
        console.log(res)
    }

    return (
    <>
        <MenuNavbar />
        <div className="page-header clear-filter" filter-color="blue">
        <div className="page-header-image" style={{backgroundImage: "url(assets/img/login.jpg)"}}></div>
        <div className="content">
            <Container>
            <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                    <CardHeader className="text-center">
                    <div className="logo-container">
                        <img alt="..." src={"/assets/img/now-logo.png"}/>
                    </div>
                    </CardHeader>
                    <CardBody>
                    <Form id='loginForm' className="form" onSubmit={handelSubmit}>
                    <InputGroup className={"no-border input-lg"}>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input name="email" placeholder="Email..." type="text"/>
                    </InputGroup>
                    <span id="email" className="text-danger"></span>
                    <InputGroup className={"no-border input-lg"}>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" placeholder="Password"/>
                    </InputGroup>
                    <span id="password" className="text-danger"></span>
                    <Button block className="btn-round" color="info">Login</Button>
                    </Form>
                    <div className="pull-left">
                        <h6>
                            <a className="link" href="#pablo" onClick={e => e.preventDefault()}>Create Account</a>
                        </h6>
                    </div>
                    <div className="pull-right">
                        <h6>
                        <a className="link" href="#pablo" onClick={e => e.preventDefault()}>Forgot Password</a>
                        </h6>
                    </div>
                    </CardBody>
                </Card>
            </Col>
            </Container>
        </div>
        <TransparentFooter />
        </div>
    </>
    );
}

export default LoginPage;
