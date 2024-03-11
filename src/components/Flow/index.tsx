import { useCallback } from 'react';
import type { Edge, Node, OnConnect } from 'reactflow';
import ReactFlow, { Background, BackgroundVariant, addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';

import CardNode from './CardNode';
import GroupNode from './GroupNode';

const nodeTypes = { card: CardNode, cardGroup: GroupNode };

function Flow({ nodes: initialNodes, edges: initialEdges }: { nodes: Node[]; edges: Edge[] }) {
    const [nodes, _, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback<OnConnect>((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

    return (
        <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
        >
            <Background variant={BackgroundVariant.Dots} />
        </ReactFlow>
    );
}

export default Flow;
