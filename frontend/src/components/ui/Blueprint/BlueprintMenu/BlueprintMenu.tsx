/** The user menu of the navbar. */
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Classes, Menu, MenuItem, MenuDivider } from '@blueprintjs/core';
import { useOnClickOutside } from '@hooks/use-on-click-outside';
import { removeToken, useFetchUser } from '@queries/user';
import { Wrapper } from './styles';

type BlueprintMenuProps = {
  handleClose: () => void;
};

export const BlueprintMenu = ({ handleClose }: BlueprintMenuProps) => {
  const { data, error, isError, isLoading } = useFetchUser();
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, handleClose);

  const handleSignOut = () => {
    removeToken();
    router.push('/');
  };

  return (
    <Wrapper ref={ref}>
      <Menu className={Classes.ELEVATION_1}>
        <MenuDivider
          className={isLoading ? Classes.SKELETON : ''}
          title={isError ? error?.message : data?.email}
        />
        <MenuItem text="Sign out" onClick={handleSignOut} />
      </Menu>
    </Wrapper>
  );
};
