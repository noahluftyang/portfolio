import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import { Layout } from '../../components/mod';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 16px;
  text-align: center;
`;

const Input = styled.input`
  border-bottom: 1px solid #e2e2e2;
  padding: 8px 0;
`;

const Button = styled.button`
  background-color: #0084ff;
  border-radius: 5px;
  color: #fff;
  margin-top: 8px;
  padding: 8px;
`;

const Anchor = styled.a`
  color: #0084ff;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
  text-align: center;
`;

const LoginWithEmailPage = () => {
  const { handleSubmit } = useForm();

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Layout>
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H1>Sign in with Email</H1>
          <Input placeholder="Email address" />
          <Input placeholder="Password" type="password" />
          <Button type="submit">Continue</Button>
          <Anchor>Forgotten password?</Anchor>
        </Form>
        <Anchor>I don't have an Account</Anchor>
      </Main>
    </Layout>
  );
};

export default LoginWithEmailPage;
