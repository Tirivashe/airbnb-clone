import { Avatar, Button, Group, Menu, rem } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import styles from "./user-menu.module.scss";
import { useDisclosure } from "@mantine/hooks";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { onOpen } = useRegisterModal();
  return (
    <Group gap="md" className={styles.root}>
      <Button visibleFrom="md">Airbnb Your Home</Button>
      <Menu opened={opened} onChange={toggle}>
        <Menu.Target>
          <Group gap="xs" justify="space-around">
            <IconMenu2 size={25} style={{ paddingLeft: ".6rem" }} />
            <Avatar radius="xl" />
          </Group>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Login</Menu.Item>
          <Menu.Item onClick={onOpen}>Sign Up</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};

export default UserMenu;
