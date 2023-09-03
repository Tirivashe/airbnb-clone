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
      justify="space-between"
      px="3rem"
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
