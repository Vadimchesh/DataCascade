import { Handle } from 'reactflow';
import { cn } from '@/lib/utils';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import { ContextMenu, ContextMenuTrigger } from '@/components/ui/context-menu';
import { CardProps } from './types';
import NodeMenu from '../NodeMenu';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import EllipsisVerticalIcon from '@/components/ui/icons/ellipsis-vertical';

const CardNode = ({ id, data }: CardProps) => {
    const { label, description, status, iconURL, options = [], handles } = data;

    return (
        <ContextMenu>
            {handles?.map(({ id, type, position }) => <Handle key={id} type={type} position={position} />)}
            <ContextMenuTrigger>
                <Card
                    className={cn(
                        'flex h-24 w-60 flex-row justify-between border-2',
                        status === 'running' && 'border-green-700',
                        status === 'stopped' && 'border-red-700',
                        status === 'pending' && 'border-yellow-700',
                        status === 'disabled' && 'border-gray-700'
                    )}
                >
                    <CardHeader
                        className={cn('flex w-48 flex-row items-center space-y-0 p-2 pl-3', status === 'disabled' && 'text-gray-500')}
                    >
                        {iconURL && (
                            <div className="flex w-8 flex-shrink-0 items-center justify-center">
                                <img src={iconURL} alt={label} />
                            </div>
                        )}
                        <div className="flex w-40 flex-col pl-3 pr-1">
                            <CardTitle className="overflow-hidden text-ellipsis whitespace-nowrap leading-8">{label}</CardTitle>
                            {description && <CardDescription>{description}</CardDescription>}
                        </div>
                    </CardHeader>
                    <CardFooter className="flex w-12 flex-col items-center justify-center p-0">
                        {options.length > 0 && (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="ghost" className="h-12 w-8 p-0">
                                        <EllipsisVerticalIcon className="h-full w-full" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <NodeMenu nodeId={id} options={options} />
                            </DropdownMenu>
                        )}
                    </CardFooter>
                </Card>
                {options.length > 0 && <NodeMenu nodeId={id} options={options} asContextMenu />}
            </ContextMenuTrigger>
        </ContextMenu>
    );
};

export default CardNode;
