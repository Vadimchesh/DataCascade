import { Handle } from 'reactflow';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

import { Card, CardDescription, CardHeader, CardTitle } from '../../ui/card.js';
import { GroupNodeProps } from './types.js';
import { Badge } from '@/components/ui/badge';

const GroupNode = ({ data }: GroupNodeProps) => {
    const { label, handles, location, hosting, environment, groupSize } = data;
    const width = groupSize === 'large' ? 'w-[600px]' : 'w-96';
    return (
        <>
            {handles?.map(({ id, type, position }) => <Handle key={id} type={type} position={position} />)}
            <Card className={cn('card-group h-96 border-2', width)}>
                <CardHeader>
                    <CardTitle>{label}</CardTitle>
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
        </>
    );
};

export default GroupNode;
