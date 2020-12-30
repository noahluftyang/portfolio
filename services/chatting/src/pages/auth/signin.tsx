import { css } from '@emotion/react';
import { Button, Typography } from '@material-ui/core';
import { Flex, Stack } from '@portfolio/components';
import { FormInput } from 'components/mod';
import { APP_ROUTE } from 'constants/Route';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { authApiClient as api } from 'utils/apiClient';

interface Fields {
  email: string;
  password: string;
}

const AuthSigninPage = () => {
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<Fields>({ defaultValues: { email: '', password: '' }, mode: 'onChange' });
  const { replace } = useRouter();

  return (
    <Flex
      align="center"
      as="main"
      css={css`
        height: 100vh;
        padding: 16px;
      `}
      direction="column"
      justify="center"
    >
      <Typography component="h1" variant="h3">
        환영합니다!
      </Typography>
      <Typography variant="subtitle1">로그인하세요.</Typography>
      <Stack.Vertical
        align="stretch"
        as="form"
        css={css(`align-self: stretch`)}
        space={24}
        onSubmit={handleSubmit(async fields => {
          const { status } = await api.signin({
            ...fields,
            service: 'CHATTING',
          });

          if (status === 'SUCCESS') {
            replace(APP_ROUTE.HOME);
          }
        })}
      >
        <FormInput.Text
          autoFocus
          control={control}
          label="계정 정보"
          name="email"
          placeholder="이메일"
          rules={{ required: true }}
          type="email"
          variant="filled"
        />
        <FormInput.Text
          control={control}
          name="password"
          placeholder="비밀번호"
          rules={{ required: true }}
          type="password"
          variant="filled"
        />
        <Button disabled={isSubmitting || !isValid} type="submit" variant="contained">
          로그인
        </Button>
      </Stack.Vertical>
    </Flex>
  );
};

export default AuthSigninPage;
