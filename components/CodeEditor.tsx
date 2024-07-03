import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { tags as t } from '@lezer/highlight';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateCodeValue } from '@/redux/slices/Compilerslice';

const CodeEditor: React.FC = () => {
  const currentLanguage = useSelector((state: RootState) => state.Compilerslice.currentLanguage);
  const fullCode = useSelector((state: RootState) => state.Compilerslice.fullcode);
  const dispatch = useDispatch();

  const onChange = React.useCallback((value: string) => {
    dispatch(updateCodeValue({ language: currentLanguage, code: value }));
  }, [dispatch, currentLanguage]);

  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      height="calc(100vh - 110px)" // Adjusted for full viewport height minus specific pixel values
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        },
        styles: [
          { tag: t.comment, color: '#6272a4' },
        ],
      })}
    />
  );
}

export default CodeEditor;
