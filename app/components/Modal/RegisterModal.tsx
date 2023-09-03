import React, { useState } from "react";
import { useForm } from "@mantine/form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import Modal from ".";
import { Stack, Title } from "@mantine/core";

type FieldValues = {
  name: string;
  email: string;
  password: string;
};

const RegisterModal = () => {
  const { isOpen, onClose } = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const { errors, onSubmit } = useForm<FieldValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    try {
      setIsLoading(true);
      await axios.post("/api/register", values).then(() => onClose());
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <Stack>
      <Title size="h3">Welcome to Airbnb</Title>
    </Stack>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={onClose}
      onSubmit={onSubmit(handleSubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModal;
