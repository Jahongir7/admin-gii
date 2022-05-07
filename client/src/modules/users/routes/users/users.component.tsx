import { hoc } from '@utils/hoc';
import { useUsersProps } from './users.props';
import { UsersContainer } from './users.style';

/**
 * <Users />
 */
export const Users = hoc(useUsersProps, () => (
  <UsersContainer>
    Users
  </UsersContainer>
));
