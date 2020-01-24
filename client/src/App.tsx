import React from 'react';
import 'tui-calendar/dist/tui-calendar.css';
import './App.css';
import { MainLayout } from './_layout/MainLayout';
import { CollapsibleBlock } from './_view/molecule/CollapsibleBlock';
import { StudentPreview } from './_view/molecule/StudentPreview';
import { StudentDetail } from './_view/molecule/StudentDetail';
import { Greeting } from './_view/atom';


const App: React.FC = () => {
  return (
    <div className="App">
      <MainLayout>
        <div>
          <Greeting />
          <CollapsibleBlock>
            <StudentPreview name='안상태' grade={12} schedule={['월', '수', '금']} />
            <StudentDetail name='안상태' grade={12} schedule={['월', '수', '금']} />
          </CollapsibleBlock>
        </div>
        <div>
          schedule
        </div>
        <div>
          setting
        </div>
      </MainLayout>
    </div>
  );
}

export default App;
