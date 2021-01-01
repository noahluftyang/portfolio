import { Button } from '@material-ui/core';
import { Stack } from '@portfolio/components';
import { FormInput } from 'components/mod';
import { APP_ROUTE } from 'constants/Route';
import { useUser } from 'hooks/useUser';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { SignupFormFields } from 'types/Auth';

export const SignupForm = () => {
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<SignupFormFields>({
    defaultValues: { email: '', password: '', username: '' },
    mode: 'onChange',
  });
  const { replace } = useRouter();
  const { signup } = useUser();

  return (
    <Stack.Vertical
      align="stretch"
      as="form"
      space={24}
      onSubmit={handleSubmit(async fields => {
        const { status } = await signup(fields);

        if (status === 'SUCCESS') {
          replace(APP_ROUTE.HOME);
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
  );
};
