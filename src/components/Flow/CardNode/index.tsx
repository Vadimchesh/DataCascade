import { Handle } from 'reactflow';
import { cn } from '@/lib/utils';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card.js';
import { CardProps } from './types.js';
import CardMenu from '../CardMenu/index.js';

const CardNode = ({ id, data }: CardProps) => {
    const { label, description, status, iconURL, options, handles } = data;

    return (
        <>
            {handles?.map(({ id, type, position }) => <Handle key={id} type={type} position={position} />)}
            <Card
                className={cn(
                    'flex h-24 w-60 flex-row justify-between border-2',
                    status === 'running' && 'border-green-700',
                    status === 'stopped' && 'border-red-700',
                    status === 'pending' && 'border-yellow-700',
                    status === 'disabled' && 'border-gray-700'
                )}
            >
                <CardHeader className="flex flex-1 flex-row items-center p-2">
                    {iconURL && (
                        <div className="flex w-14 flex-shrink-0 justify-center">
                            <img src={iconURL} alt={label} className="w-8" />
                        </div>
                    )}
                    <div className={cn('flex h-full flex-col gap-1 p-3', status === 'disabled' && 'text-gray-500')}>
                        <CardTitle>{label}</CardTitle>
                        {description && <CardDescription>{description}</CardDescription>}
                    </div>
                </CardHeader>
                <CardFooter className="flex items-center justify-end px-2 py-2">
                    <CardMenu cardId={id} options={options} />
                </CardFooter>
            </Card>
        </>
    );
};

export default CardNode;
