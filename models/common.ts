export interface SearchInputProps {
    value?: string;
    placeholder?: string;
    inputClass?: string;
    inputGroupClass?: string;
    showEndElement?: boolean;
    onChange?: (value: string) => void;
}