import { useState } from 'react';
import TemplateCard from './components/TemplateCard';
import type { TemplateType } from './types';

function App() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateType | null>(null);

  return (
    <main>
      <h1>Session Setup</h1>

      <div className="template-grid">
        <TemplateCard
          title="Elev8 CAP"
          description="Structured action planning for student guidance sessions."
          selected={selectedTemplate === 'Elev8 CAP'}
          onSelect={setSelectedTemplate}
        />

        <TemplateCard
          title="Manifest CAP"
          description="Flexible career action planning and progression tracking."
          selected={selectedTemplate === 'Manifest CAP'}
          onSelect={setSelectedTemplate}
        />
      </div>
    </main>
  );
}

export default App;
