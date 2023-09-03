"use client";
import { Button, createTheme } from "@mantine/core";
import classes from "./button.module.scss";

export const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});
