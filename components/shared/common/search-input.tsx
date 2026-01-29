"use client";

import { CloseButton, Input, InputGroup, Box } from "@chakra-ui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SearchInputProps } from "@/models/common";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { IoFolderOpen } from "react-icons/io5";
import { Tooltip } from "@/components/ui/tooltip";

export default function SearchInput({
  value,
  placeholder,
  inputClass,
  inputGroupClass,
  showEndElement = true,
}: SearchInputProps) {
  const translate = useTranslations("Header");
  const [inputValue, setInputValue] = useState(value || "");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = (
    <Box display="flex" alignItems="center" gap="2" pr="2">
      {inputValue && (
        <CloseButton
          size="xs"
          onClick={() => {
            setInputValue("");
            inputRef.current?.focus();
          }}
        />
      )}

      <Box w="1px" h="18px" bg="whiteAlpha.300" />

      {showEndElement && (
        <Tooltip content={translate("browse_category")}>
          <IoFolderOpen className="w-6 h-6 cursor-pointer" />
        </Tooltip>
      )}
    </Box>
  );

  const inputClasses = `${inputClass || ""}`;
  const inputGroupClasses = `${inputGroupClass || ""}`;

  return (
    <Box w={400}>
      <InputGroup
        endElement={endElement}
        className={inputGroupClasses}
        startElement={<HiMagnifyingGlass className={`w-6 h-6`} />}
      >
        <Input
          value={inputValue}
          placeholder={placeholder || translate("search_placeholder")}
          onChange={(e) => setInputValue(e.target.value)}
          className={inputClasses}
          bg="var(--spotify-black-soft)"
          rounded={"full"}
          focusRingColor="var(--spotify-white)"
          h={50}
          fontSize={16}
        />
      </InputGroup>
    </Box>
  );
}
