import { NodeProps, Position } from 'reactflow';

export interface NodeDataOption {
    label: string;
    action: string;
    selected?: boolean;
}

interface NodeDataHandle {
    id: string;
    type: 'target' | 'source';
    position: Position;
}

interface NodeData {
    label: string;
    description?: string;
    status: 'running' | 'stopped' | 'pending' | 'disabled';
    iconURL?: string;
    options?: NodeDataOption[] | [NodeDataOption[]];
    handles?: NodeDataHandle[];
}

export type CardProps = NodeProps<NodeData>;
