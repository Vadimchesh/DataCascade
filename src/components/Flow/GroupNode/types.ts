import { NodeProps, Position } from 'reactflow';

interface NodeDataHandle {
    id: string;
    type: 'target' | 'source';
    position: Position;
}

interface Environmnet {
    label: string;
    selected?: boolean;
}

type HostingType = 'self-hosted' | 'managed' | 'on-premises';

interface Hosting {
    label: HostingType;
    selected?: boolean;
}

interface NodeData {
    label: string;
    groupSize: 'default' | 'large';
    location?: string;
    hosting?: Hosting[];
    environment?: Environmnet[];
    handles?: NodeDataHandle[];
}

export type GroupNodeProps = NodeProps<NodeData>;
