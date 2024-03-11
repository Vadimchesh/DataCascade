import Flow from '@/components/Flow';

import nodes from '../data/nodes.json';
import edges from '../data/edges.json';
import { ThemeProvider } from './components/theme-provider';
import { TopNav } from './components/TopNav';

export default function Home() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="h-screen w-screen bg-gray-900">
                <TopNav />
                <Flow nodes={nodes} edges={edges} />
            </div>
        </ThemeProvider>
    );
}
