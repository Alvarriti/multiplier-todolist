import React, { memo, useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/Button';
import { StyledInput } from '@/components/Input/styles';
import { Form } from '@/components/TodoList/Input/styles';

interface TodoInputProps {
  onSubmit: (text: string) => void;
  initialValue?: string;
  buttonText?: string;
}

export const TodoInput = memo(function TodoInput({
  onSubmit,
  initialValue = '',
  buttonText = 'Add',
}: TodoInputProps) {
  const [text, setText] = useState(initialValue);
  useEffect(() => {
    setText(initialValue);
  }, [initialValue]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(text);
      if (buttonText === 'Add') {
        setText('');
      }
    },
    [text, onSubmit, buttonText]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={text}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <Button type="submit">
        {buttonText}
      </Button>
    </Form>
  );
});