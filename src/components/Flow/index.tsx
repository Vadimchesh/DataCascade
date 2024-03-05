import { useCallback } from 'react';
import type { Edge, Node, OnConnect } from 'reactflow';
import ReactFlow, { Background, BackgroundVariant, addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';

import CardNode from './CardNode';

const nodeTypes = { card: CardNode };

function Flow({ nodes: initialNodes, edges: initialEdges }: { nodes: Node[]; edges: Edge[] }) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
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
