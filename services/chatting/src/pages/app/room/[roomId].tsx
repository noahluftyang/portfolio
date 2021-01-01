import { AppLayout } from 'components/mod';
import { useChats } from 'hooks/useChats';
import { useRouter } from 'next/router';

const AppChatPage = () => {
  const { query } = useRouter();
  const values = useChats(query.roomId);

  return <AppLayout.Chat>chat</AppLayout.Chat>;
};

export default AppChatPage;
