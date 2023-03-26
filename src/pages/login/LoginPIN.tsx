import { Formik } from "formik";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { FC, ReactElement } from "react";
import { Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import FormInput from "../../components/form/form-input/FormInput";
import IconButton from "../../components/icon-button/IconButton";
import { useAppDispatch } from "../../redux/store";
import { loginPIN } from "../../service-api/auth-service-api";

import LoginPINFormik from "./formik/LoginPINFormik";

import { LoginPage } from "./Login";

const LoginPIN: FC<LoginPage> = ({
  domain = "http://localhost:8888",
  clientId,
  toPage,
  imageBackground,
  className,
  classNameForm,
  classNameBg,
}): ReactElement => {
  const sessionId = Cookies.get(clientId + "_SSID-LOGIN-CODE");
  const ssidOtp = Cookies.get(clientId + "_SSID-PIN");
  useEffect(() => {
    if (!sessionId || !ssidOtp) {
      Cookies.remove(clientId + "_SSID-PIN");
      window.location.href = "/login";
    }
  }, [sessionId, ssidOtp]);

  const dispatch = useAppDispatch();

  return (
    <Container className={className} fluid>
      <Row>
        <Col className={classNameForm}>
          <Card>
            <Card.Body>
              <h4>Kiểm tra mã PIN</h4>
              <h5>Nhập mã PIN để hoàn tất đăng nhập!</h5>
              <div className="text-success">
                <hr />
              </div>
              <Formik
                initialValues={LoginPINFormik.initValue}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true);
                  const fetch = await loginPIN(
                    domain,
                    sessionId,
                    values,
                    clientId
                  );
                  LoginPINFormik.handleSubmit(
                    domain,
                    clientId,
                    toPage,
                    fetch.data,
                    actions,
                    fetch.errors,
                    dispatch
                  );
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  values,
                  errors,
                  isSubmitting,
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    {/* <div className="text-danger mb-4">{errors.error}</div> */}
                    <FormInput
                      label="Mã OTP"
                      placeholder="Nhập mã PIN"
                      name="pinCode"
                      value={values.pinCode}
                      handleChange={handleChange}
                      error={errors.pinCode}
                    />
                    <IconButton tittle="Tiếp theo" disabled={isSubmitting} />
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
        {imageBackground && (
          <Col className={classNameBg}>
            <Image fluid src={imageBackground} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default LoginPIN;
