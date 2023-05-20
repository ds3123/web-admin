/*

   為 react-quill 模組，手動編寫類型 ( 無法由 npm @types/.... 取得時 )

*/

declare module 'react-quill' {

    import Quill from 'quill';
  
    export interface ReactQuillProps {
        
      value?: string;
      defaultValue?: string;
      onChange?: (content: string, delta: any, source: Quill) => void;
      onChangeSelection?: (range: any, source: Quill) => void;
      onKeyPress?: (event: KeyboardEvent) => void;
      onKeyUp?: (event: KeyboardEvent) => void;
      onKeyDown?: (event: KeyboardEvent) => void;
      onBlur?: (previousRange: any, source: Quill) => void;
      onFocus?: (range: any, source: Quill) => void;
      modules?: any;
      formats?: string[];
      theme?: string;
      style?: React.CSSProperties;
      className?: string;
      readOnly?: boolean;
      tabIndex?: number;
      placeholder?: string;
      bounds?: HTMLElement | string;
      scrollingContainer?: HTMLElement | string;
      preserveWhitespace?: boolean;
      strict?: boolean;
      maxLength?: number;
      id?: string;
      name?: string;
      autoFocus?: boolean;
      linkTarget?: string;

      // 再確認以下 3 個 
      forwardedRef? : React.RefObject<Quill>;

      getEditor?    : () => Quill;
      root?         : HTMLElement;

    }
  
    const ReactQuill: React.ForwardRefExoticComponent<ReactQuillProps & React.RefAttributes< any >>;
  
    export default ReactQuill;
  
}
  