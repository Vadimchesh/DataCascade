import { useCallback } from 'react';
import type { OnConnect } from 'reactflow';
import ReactFlow, { Background, BackgroundVariant, addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';

import initialNodes from './nodes.js';
import initialEdges from './edges.js';

function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback<OnConnect>((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

    return (
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
            <Background color="#ccc" variant={BackgroundVariant.Dots} />
        </ReactFlow>
    );
}

export default Flow;
