"use client";

import { AppShell } from "@mantine/core";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
