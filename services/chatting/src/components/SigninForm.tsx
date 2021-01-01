import { css } from '@emotion/react';
import { Button } from '@material-ui/core';
import { Stack } from '@portfolio/components';
import { FormInput } from 'components/mod';
import { APP_ROUTE } from 'constants/Route';
import { useUser } from 'hooks/useUser';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { SigninFormFields } from 'types/Auth';

export const SigninForm = () => {
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<SigninFormFields>({ defaultValues: { email: '', password: '' }, mode: 'onChange' });
  const { replace } = useRouter();
  const { signin } = useUser();

  return (
    <Stack.Vertical
      align="stretch"
      as="form"
      css={css(`align-self: stretch`)}
      space={24}
      onSubmit={handleSubmit(async fields => {
        const { status } = await signin(fields);

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
  );
};
