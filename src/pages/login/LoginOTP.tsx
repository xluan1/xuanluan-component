import { Formik } from "formik";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { FC, ReactElement } from "react";
import { Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import FormInput from "../../components/form/form-input/FormInput";
import IconButton from "../../components/icon-button/IconButton";
import { useAppDispatch } from "../../redux/store";
import { loginOTP } from "../../service-api/auth-service-api";

import LoginOTPFormik from "./formik/LoginOTPFormik";
import { LoginPage } from "./Login";

const LoginOTP: FC<LoginPage> = ({
  domain = "http://localhost:8888",
  clientId,
  toPage,
  imageBackground,
  className,
  classNameForm,
  classNameBg,
}): ReactElement => {
  const sessionId = Cookies.get(clientId + "_SSID-LOGIN-CODE");
  const ssidOtp = Cookies.get(clientId + "_SSID-OTP");
  useEffect(() => {
    if (!sessionId || !ssidOtp) {
      Cookies.remove(clientId + "_SSID-OTP");
      window.location.href = "/login";
    }
  }, [sessionId, ssidOtp]);

  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const resetOTPClick = () => {
    setIsLoading(true);
    sessionId &&
      LoginOTPFormik.resetOTPHanleClick(
        domain,
        clientId,
        sessionId,
        setError,
        setIsLoading
      );
  };

  return (
    <Container className={className} fluid>
      <Row>
        <Col className={classNameForm}>
          <Card>
            <Card.Body>
              <h4>Kiểm tra mã OTP</h4>
              <h5>Hãy kiểm tra email của bạn, để lấy mã OTP!</h5>
              <div className="text-success">
                <hr />
              </div>
              <Formik
                initialValues={LoginOTPFormik.initValue}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true);
                  const fetch = await loginOTP(
                    domain,
                    sessionId,
                    values,
                    clientId
                  );
                  LoginOTPFormik.handleSubmit(
                    domain,
                    clientId,
                    toPage,
                    actions,
                    fetch.data,
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
                    <div className="text-danger mb-4">{error}</div>
                    <FormInput
                      label="Mã OTP"
                      placeholder="Nhập mã OTP"
                      name="otpCode"
                      value={values.otpCode}
                      handleChange={handleChange}
                      error={errors.otpCode}
                    />
                    <IconButton
                      tittle="Gửi lại mã"
                      type="button"
                      onClick={resetOTPClick}
                      disabled={isLoading || isSubmitting ? true : false}
                    />
                    <IconButton
                      tittle="Tiếp theo"
                      disabled={isLoading || isSubmitting ? true : false}
                    />
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

export default LoginOTP;
