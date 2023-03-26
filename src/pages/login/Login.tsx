import { Formik } from "formik";
import React, { ReactElement } from "react";
import { FC } from "react";
import { Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import FormInput from "../../components/form/form-input/FormInput";
import IconButton from "../../components/icon-button/IconButton";
import { login } from "../../service-api/auth-service-api";
import LoginFormik from "./formik/LoginFormik";
import Cookies from "js-cookie";
import { useAppDispatch } from "../../redux/store";

export type LoginPage = {
  domain: string;
  clientId: string;
  toPage: string;
  imageBackground?: string;
  className?: string;
  classNameForm?: string;
  classNameBg?: string;
};

const Login: FC<LoginPage> = ({
  domain = "http://localhost:8888",
  clientId,
  toPage,
  imageBackground,
  className,
  classNameForm,
  classNameBg,
}): ReactElement => {
  // remove cookie when load to login page
  Cookies.remove(clientId + "_SSID-FINAL");
  Cookies.remove(clientId + "_SSID-LOGIN-CODE");
  Cookies.remove(clientId + "_Token-CODE");

  const dispatch = useAppDispatch();

  return (
    <Container className={className} fluid>
      <Row>
        <Col className={classNameForm}>
          <Card>
            <Card.Body>
              <h4>Đăng nhập</h4>
              <h5>Nhập thông tin để truy cập đến trang quản lý</h5>
              <div className="text-success">
                <hr />
              </div>

              <Formik
                initialValues={LoginFormik.initValue}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true);
                  const fetch = await login(domain, values, clientId);

                  LoginFormik.handleSubmit(
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
                    <FormInput
                      className="row mb-3"
                      label="Tên đăng nhập"
                      placeholder="Nhập tên đăng nhập"
                      name="username"
                      value={values.username}
                      controlId={"validationFormik01"}
                      handleChange={handleChange}
                      error={errors.username}
                    />
                    <FormInput
                      className="row mb-3"
                      label="Mật khẩu"
                      placeholder="Nhập mật khẩu"
                      type="password"
                      name="password"
                      value={values.password}
                      controlId={"validationFormik02"}
                      handleChange={handleChange}
                      error={errors.password}
                    />
                    <IconButton tittle="Đăng nhập" disabled={isSubmitting} />
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

export default Login;
