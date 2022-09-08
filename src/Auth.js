import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/SignUp/Home";
import Login from "./components/SignUp/Login";
import Signup from "./components/SignUp/Signup";
import PhoneSignUp from "./components/SignUp/PhoneSignUp";
import ProtectedRoute from "./components/SignUp/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import React,{Component} from 'react'
import Swap from './components/Swap/Swap'
import Verification from "./components/Verification";

function Auth() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                    <Verification />
                  </ProtectedRoute>
                }
              />
              <Route path="/exchange" element={<Swap />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
              
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;
