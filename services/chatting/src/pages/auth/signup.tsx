import { css } from '@emotion/react';
import { Button, Typography } from '@material-ui/core';
import { Stack } from '@portfolio/components';
import { FormInput } from 'components/mod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { authApiClient as api } from 'utils/apiClient';

interface Fields {
  username: string;
  email: string;
  password: string;
}

const AuthSignupPage = () => {
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<Fields>({
    defaultValues: { email: '', password: '', username: '' },
    mode: 'onChange',
  });
  const { replace } = useRouter();

  return (
    <main css={css(`padding: 16px`)}>
      <Typography component="h1" variant="h3">
        회원가입
      </Typography>
      <Stack.Vertical
        align="stretch"
        as="form"
        space={24}
        onSubmit={handleSubmit(async fields => {
          const { status, ...responseBody } = await api.signup({ ...fields, service: 'CHATTING' });

          console.log(responseBody);

          if (status === 'SUCCESS') {
            replace('/app');
          }
        })}
      >
        <FormInput.Text
          autoFocus
          control={control}
          label="닉네임을 적어주세요"
          name="username"
          rules={{ required: true }}
        />
        <FormInput.Text
          control={control}
          label="계정 정보"
          name="email"
          placeholder="이메일"
          rules={{ required: true }}
          type="email"
        />
        <FormInput.Text
          control={control}
          name="password"
          placeholder="비밀번호"
          rules={{ required: true }}
          type="password"
        />
        <Button disabled={isSubmitting || !isValid} type="submit" variant="contained">
          가입하기
        </Button>
      </Stack.Vertical>
    </main>
  );
};

export default AuthSignupPage;
