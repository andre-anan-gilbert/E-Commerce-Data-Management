import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Classes, Menu, MenuItem, MenuDivider } from '@blueprintjs/core';
import { useOnClickOutside } from '@hooks/use-on-click-outside';
import { removeToken } from '@queries/user';
import { Wrapper } from './styles';

type BlueprintMenuProps = {
  handleClose: () => void;
  user: string;
};

export const BlueprintMenu = ({ handleClose, user }: BlueprintMenuProps) => {
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
        <MenuDivider title={user} />
        <MenuItem text="Sign out" onClick={handleSignOut} />
      </Menu>
    </Wrapper>
  );
};
