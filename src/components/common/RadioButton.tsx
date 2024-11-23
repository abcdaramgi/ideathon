import React, { useState } from 'react';

interface RadioButtonProps {
    title: string;
    options: string[];
    onChange: (value: string) => void;
}

const RadioButton = ({ title, options, onChange }: RadioButtonProps) => {
    const [selected, setSelected] = useState(options[0]);

    const handleSelect = (value: string) => {
        setSelected(value);
        onChange(value);  // onChange 이벤트를 부모 컴포넌트로 전달
    };

    return (
        <div className="flex flex-col gap-2">
            <span className="text-sm font-normal">{title}</span>
            <div className="flex bg-gray-200 rounded-md h-12 text-center items-center">
                {options.map((option) => (
                    <div key={option} className="w-1/2 flex gap-2 justify-center items-center">
                        <input
                            type="radio"
                            name="loanType"
                            id={option}
                            value={option}
                            checked={selected === option}
                            onChange={() => handleSelect(option)}
                            className="hidden"
                        />
                        <label
                            htmlFor={option}
                            className={`w-full px-4 py-2 border-2 border-[#E8E8E8] rounded-md cursor-pointer transition-colors ${selected === option ? 'bg-[#F6F6F6]' : 'bg-[#E8E8E8]'}`}
                        >
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioButton;
