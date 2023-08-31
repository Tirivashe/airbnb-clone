import { Avatar, Button, Group } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import styles from "./user-menu.module.scss";

const UserMenu = () => {
  return (
    <Group gap="md" className={styles.root}>
      <Button visibleFrom="md" size="compact-md">
        Airbnb Your Home
      </Button>
      <Group gap="xs" justify="space-around">
        <IconMenu2 />
        <Avatar radius="xl" />
      </Group>
    </Group>
  );
};

export default UserMenu;
