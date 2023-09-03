import { Button, Container, Group, Modal as MantineModal } from "@mantine/core";
import React, { FC, useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  secondaryActionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  actionLabel,
  body,
  disabled,
  footer,
  secondaryAction,
  secondaryActionLabel,
  title,
}) => {
  // const [showModal, setShowModal] = useState(isOpen);

  // useEffect(() => {
  //   setShowModal(isOpen);
  // }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <MantineModal
      opened={isOpen}
      onClose={handleClose}
      title={title}
      centered
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      transitionProps={{
        transition: "fade",
        duration: 200,
        exitDuration: 200,
        timingFunction: "linear",
      }}
      classNames={{
        title: styles.title,
        header: styles.header,
      }}
    >
      <Container py="lg" px="xs">
        {body}
      </Container>
      <Container py="lg" px="xs">
        {footer}
      </Container>
      <Group px="xs" grow>
        {secondaryAction && secondaryActionLabel && (
          <Button
            loading={disabled}
            variant="outline"
            onClick={handleSecondaryAction}
          >
            {secondaryActionLabel}
          </Button>
        )}
        <Button loading={disabled} variant="primary" onClick={handleSubmit}>
          {actionLabel}
        </Button>
      </Group>
    </MantineModal>
  );
};

export default Modal;
