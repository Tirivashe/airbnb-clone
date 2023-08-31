import { Button, Group } from "@mantine/core";

import styles from "./search.module.scss";
import { IconSearch } from "@tabler/icons-react";

const Search = () => {
  return (
    <Group className={styles.group} gap="sm" justify="space-between">
      <Button.Group>
        <Button visibleFrom="sm">Anywhere</Button>
        <Button visibleFrom="xs">Any Week</Button>
        <Button rightSection={<IconSearch color="white" size={18} />}>
          Add Guests
        </Button>
      </Button.Group>
    </Group>
  );
};

export default Search;
