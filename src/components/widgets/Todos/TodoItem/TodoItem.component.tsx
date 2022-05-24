import { FormEvent, useState } from "react";

import { CompleteIndicator } from "./CompleteIndicator/CompleteIndicator.component";
import { SelectIndicator } from "./SelectIndicator/SelectIndicator.component";
import { Button } from "@/components/elements/form";
import { CalendarIcon, PlusIcon, TrashIcon } from "@/core/shared/icons";
import { IconButton } from "@/components/elements/form/IconButton/IconButton.styled";

import { Todo } from "@/pages";

import { useRefFocusOnMount } from "@/core/hooks/useRefFocusOnMount.hook";

import * as TI from "./TodoItem.styled";

interface TodoItemProps {
  data: Todo;
  onChange: (data: Todo) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ data, onChange, onDelete }: TodoItemProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(data.isCompleted);
  const [isSelected, setIsSelected] = useState<boolean>(data.isSelected);
  const [value, setValue] = useState<string>(data.text);

  const [contentRef, focusOnContentRef] = useRefFocusOnMount<HTMLSpanElement>();

  function emitOnChange() {
    onChange({
      ...data,
      isCompleted,
      isSelected,
      text: value,
    });
  }

  function handleSave(e: FormEvent) {
    e.preventDefault();
    emitOnChange();
  }

  function handleCompleteChange(checked: boolean) {
    setIsCompleted(checked);
    emitOnChange();
  }

  function handleSelectChange(checked: boolean) {
    setIsSelected(checked);
    emitOnChange();
  }

  function handleContainerClick() {
    focusOnContentRef();
  }

  return (
    <TI.ListItem
      onClick={handleContainerClick}
      isCompleted={isCompleted}
      isSelected={isSelected}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TI.Main>
        <CompleteIndicator
          defaultChecked={!!isCompleted}
          checked={isCompleted}
          onCheckedChange={handleCompleteChange}
        />

        <TI.ContentEditable
          contentEditable={!isCompleted}
          ref={contentRef}
          onBlur={handleSave}
          onKeyDown={(e: FormEvent<HTMLSpanElement>) =>
            setValue(e.currentTarget.textContent ?? "")
          }
          suppressContentEditableWarning
        >
          {data.text}
        </TI.ContentEditable>

        <SelectIndicator
          defaultChecked={!!isSelected}
          checked={isSelected}
          onCheckedChange={handleSelectChange}
        />
      </TI.Main>

      <TI.Footer>
        <TI.Actions>
          <Button variant="secondary" isOutlined size="small">
            <CalendarIcon />
            Date/Hour
          </Button>

          <Button variant="secondary" isOutlined size="small">
            <PlusIcon />
            Add subtask
          </Button>
        </TI.Actions>

        <IconButton
          aria-label="Delete Item"
          variant="danger"
          size="small"
          onClick={() => onDelete(data.id)}
        >
          <TrashIcon />
        </IconButton>
      </TI.Footer>
    </TI.ListItem>
  );
}
