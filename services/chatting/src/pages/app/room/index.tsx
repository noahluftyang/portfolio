import { AppLayout } from 'components/mod';
import { APP_ROUTE } from 'constants/Route';
import { useRooms } from 'hooks/useRooms';
import Link from 'next/link';

const AppRoomPage = () => {
  const { data } = useRooms();

  return (
    <AppLayout.Navigation>
      <h1>채팅</h1>
      <input placeholder="채팅방 이름, 참여자 검색" />
      <ul>
        {data.rooms.map(({ id }) => {
          return (
            <li key={`room-${id}`}>
              <Link href={`${APP_ROUTE.ROOM}/${id}`}>내사랑</Link>
            </li>
          );
        })}
      </ul>
    </AppLayout.Navigation>
  );
};

export default AppRoomPage;
