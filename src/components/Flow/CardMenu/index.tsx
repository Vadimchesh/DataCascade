import { Fragment } from 'react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.js';
import { Button } from '@/components/ui/button';
import { NodeDataOption } from '../CardNode/types';
import EllipsisVerticalIcon from '@/components/ui/icons/ellipsis-vertical';
import CardMenuItem from '../CardMenuItem';

interface CardMenuProps {
    cardId: string;
    options?: NodeDataOption[] | [NodeDataOption[]];
}

const CardMenu = ({ cardId, options = [] }: CardMenuProps) => {
    const menu = options.map((option, index) =>
        Array.isArray(option) ? (
            <Fragment key={`${cardId}-group-${index}`}>
                <DropdownMenuGroup>
                    {option.map(({ label, selected }) => (
                        <CardMenuItem key={`${cardId}-${label}`} cardId={cardId} label={label} selected={selected} />
                    ))}
                </DropdownMenuGroup>
                {options.length > 1 && index !== options.length - 1 && <DropdownMenuSeparator />}
            </Fragment>
        ) : (
            <CardMenuItem key={`${cardId}-${option.label}`} cardId={cardId} label={option.label} selected={option.selected} />
        )
    );

    return options.length > 0 ? (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" className="h-10 w-8 p-0">
                    <EllipsisVerticalIcon className="h-full w-full" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">{menu}</DropdownMenuContent>
        </DropdownMenu>
    ) : null;
};

export default CardMenu;
