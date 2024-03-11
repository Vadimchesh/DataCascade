import { Handle } from 'reactflow';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

import { Card, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { GroupNodeProps } from './types';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import EllipsisVerticalIcon from '@/components/ui/icons/ellipsis-vertical';
import NodeMenu from '../NodeMenu';
import { ContextMenu, ContextMenuTrigger } from '@/components/ui/context-menu';

const GroupNode = ({ data }: GroupNodeProps) => {
    const { id, label, handles, location, hosting, environment, groupSize, options = [] } = data;
    const width = groupSize === 'large' ? 'w-[600px]' : 'w-96';
    return (
        <ContextMenu>
            {handles?.map(({ id, type, position }) => <Handle key={id} type={type} position={position} />)}
            <ContextMenuTrigger>
                <Card className={cn('card-group h-96 border-2', width)}>
                    <CardHeader>
                        <CardTitle className="flex flex-row justify-between pr-8">
                            {label}
                            {options.length > 0 && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant="ghost" className="absolute right-3 top-3 h-10 w-8 p-0">
                                            <EllipsisVerticalIcon className="h-full w-full" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <NodeMenu nodeId={id} options={options} />
                                </DropdownMenu>
                            )}
                        </CardTitle>
                        {location && <CardDescription>Location: {<Badge variant="outline">{location}</Badge>}</CardDescription>}
                        <CardDescription>
                            {environment &&
                                environment.map(({ label, selected }) => <Badge variant={selected ? 'default' : 'outline'}>{label}</Badge>)}
                        </CardDescription>
                        <Separator />
                    </CardHeader>
                    {hosting &&
                        hosting.map(({ label, selected }) => (
                            <span key={label}>
                                {label} {selected}
                            </span>
                        ))}
                </Card>
                {options.length > 0 && <NodeMenu nodeId={id} options={options} asContextMenu />}
            </ContextMenuTrigger>
        </ContextMenu>
    );
};

export default GroupNode;
