import { Fragment } from 'react';

import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { NodeDataOption } from '../CardNode/types';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import CheckIcon from '@/components/ui/icons/check';
import { ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuSeparator } from '@/components/ui/context-menu';

interface NodeMenuProps {
    nodeId: string;
    options: NodeDataOption[] | [NodeDataOption[]];
    asContextMenu?: boolean;
}

interface NodeMenuItemProps {
    nodeId: string;
    label: string;
    selected?: boolean;
    asContextMenu?: boolean;
}

const NodeMenuItem = ({ nodeId, label, selected = false, asContextMenu = false }: NodeMenuItemProps) => {
    const Item = asContextMenu ? ContextMenuItem : DropdownMenuItem;

    return (
        <Item key={`${nodeId}-${label}`} className="flex items-center justify-between">
            <span>{label}</span>
            {selected && <CheckIcon className="h-4 w-4" />}
        </Item>
    );
};

const NodeMenu = ({ nodeId, options, asContextMenu = false }: NodeMenuProps) => {
    const Group = asContextMenu ? ContextMenuGroup : DropdownMenuGroup;
    const Separator = asContextMenu ? ContextMenuSeparator : DropdownMenuSeparator;
    const Content = asContextMenu ? ContextMenuContent : DropdownMenuContent;

    const menu = options.map((option, index) =>
        Array.isArray(option) ? (
            <Fragment key={`${nodeId}-group-${index}`}>
                <Group>
                    {option.map(({ label, selected }) => (
                        <NodeMenuItem
                            key={`${nodeId}-${label}`}
                            nodeId={nodeId}
                            label={label}
                            selected={selected}
                            asContextMenu={asContextMenu}
                        />
                    ))}
                </Group>
                {options.length > 1 && index !== options.length - 1 && <Separator />}
            </Fragment>
        ) : (
            <NodeMenuItem
                key={`${nodeId}-${option.label}`}
                nodeId={nodeId}
                label={option.label}
                selected={option.selected}
                asContextMenu={asContextMenu}
            />
        )
    );

    return <Content>{menu}</Content>;
};

export default NodeMenu;
