import { Box, Center, Group } from "@mantine/core";
import Logo from "../Logo";
import Search from "../Search";
import UserMenu from "../UserMenu";

const Navbar = () => {
  return (
    <Group
      w={"100%"}
      h={"100%"}
      preventGrowOverflow
      gap={5}
      px="md"
      justify="space-between"
    >
      <Center visibleFrom="md">
        <Logo />
      </Center>
      <Search />
      <UserMenu />
    </Group>
  );
};

export default Navbar;
