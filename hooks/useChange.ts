import { useState, ChangeEvent } from "react";

export default function useChange(initValue: string) {
  const [value, setValue] = useState(initValue)

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return { value, onChange, setValue }
}