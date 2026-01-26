"use client";

import { Input, InputGroup } from "@chakra-ui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SearchInputProps } from "@/models/common";
import { useTranslations } from "next-intl";

export default function SearchInput({
  value,
  placeholder,
  onChange,
}: SearchInputProps) {
  const translate = useTranslations("Header");
  return (
    <InputGroup
      startElement={<HiMagnifyingGlass className="ml-2 text-gray-400" />}
    >
      <Input
        value={value}
        placeholder={placeholder || translate("search_placeholder")}
        onChange={(e) => onChange?.(e.target.value)}
        className="bg-gray-800 text-white border-0 focus:border-0 focus:ring-0 ml-4"
      />
    </InputGroup>
  );
}
