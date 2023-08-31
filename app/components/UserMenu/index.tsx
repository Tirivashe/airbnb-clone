import { Avatar, Button, Group, Menu, rem } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import styles from "./user-menu.module.scss";
import { useDisclosure } from "@mantine/hooks";

const UserMenu = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Group gap="md" className={styles.root}>
      <Button visibleFrom="md" size="compact-md">
        Airbnb Your Home
      </Button>
      <Menu opened={opened} onChange={toggle}>
        <Menu.Target>
          <Group gap="xs" justify="space-around">
            <IconMenu2 />
            <Avatar radius="xl" />
          </Group>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Login</Menu.Item>
          <Menu.Item>Sign Up</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};

export default UserMenu;
