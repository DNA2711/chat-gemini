import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useState } from 'react'
import { Action } from '../Generate/Promt';

interface Props {
    list: string[]
    type: string;
    dispatch?: (value: Action) => void
}

const SelectionList: React.FC<Props> = ({
    list,
    type,
    dispatch = () => { }
}) => {
    const [selected, setSelected] = useState(list[0])
    useEffect(() => {
        setSelected(list[0])
    }, [list])

    const changeType = (value: string) => {
        dispatch({ type: "UPDATE_FIELD", field: type, value: value })
        setSelected(value)
    }

    return (
        <div className="">
            <Listbox value={selected} onChange={changeType}>
                <ListboxButton
                    className={'flex justify-between items-center w-40 rounded-md px-2 py-1 bg-white text-sm text-neutral-600'}
                >
                    {selected}
                    <KeyboardArrowDownIcon
                        className="size-4"
                        aria-hidden="true"
                    />
                </ListboxButton>
                <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <ListboxOptions
                        anchor="bottom"
                        className="h-52 w-[var(--button-width)] scroobar-styles rounded-md mt-1 border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md"
                    >
                        {list.map((item: string, index: number) => (
                            <ListboxOption
                                key={index}
                                value={item}
                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none"
                            >
                                <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
                                <span className="text-sm text-neutral-600">{item}</span>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Transition>
            </Listbox>
        </div>
    )
}
export default SelectionList;