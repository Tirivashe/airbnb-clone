"use client";

import { AppShell } from "@mantine/core";
import Navbar from "./components/Navbar";
import RegisterModal from "./components/Modal/RegisterModal";

export default function Home() {
  return (
    <AppShell header={{ height: 80 }} padding="md">
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <RegisterModal />
      </AppShell.Main>
    </AppShell>
  );
}
