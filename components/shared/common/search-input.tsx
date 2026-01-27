"use client";

import { CloseButton, Input, InputGroup } from "@chakra-ui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SearchInputProps } from "@/models/common";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

export default function SearchInput({
  value,
  placeholder,
  inputClass,
  inputGroupClass,
}: SearchInputProps) {
  const translate = useTranslations("Header");
  const [inputValue, setInputValue] = useState(value || "");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = inputValue ? (
    <CloseButton
      size="xs"
      onClick={() => {
        setInputValue("")
        inputRef.current?.focus()
      }}
    />
  ) : undefined

  const inputClasses = `${inputClass || ""}`;
  const inputGroupClasses = `${inputGroupClass || ""}`;

  return(
  <InputGroup
    endElement={endElement}
    className={inputGroupClasses}
    startElement={<HiMagnifyingGlass className="ml-2 text-gray-400" />}
  >
    <Input
      value={inputValue}
      placeholder={placeholder || translate("search_placeholder")}
      onChange={(e) => setInputValue(e.target.value)}
      className={inputClasses}
      
    />
  </InputGroup>
  );
}
