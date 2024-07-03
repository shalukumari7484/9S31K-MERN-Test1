import React from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import CodeEditor from '@/components/CodeEditor';
import HelperHeader from '@/components/HelperHeader';
import RenderCode from '@/components/RenderCode';
 

const Compile: React.FC = () => {
  
  return (
    <div className="h-[calc(100vh-60px)]">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-full   border"
      >
        <ResizablePanel className="min-w-350px h-[calc(100dvh-60px)]"defaultSize={50}>
           <HelperHeader/>
           <CodeEditor/>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="min-w-350px h-[calc(100dvh-60px)]" defaultSize={50}>
            
            <RenderCode/>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Compile;
