import React, { ChangeEvent, ChangeEventHandler, Ref } from 'react';
import { CustomTextArea } from './styles';

type Props = {
    value: string;
    onChange: (value: string | undefined) => void;
    height?: string;
    ref?: Ref<HTMLTextAreaElement>;
}

const TextArea = ({value, onChange, height, ref}: Props) => {
    const onChangeText: ChangeEventHandler<HTMLTextAreaElement> = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event?.target?.value)
    }
    return (
        <CustomTextArea placeholder='Enter your HTML content' ref={ref} value={value} onChange={onChangeText}/>
    )
}
export default TextArea;