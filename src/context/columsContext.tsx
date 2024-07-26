import { createContext, useState, ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode | ReactNode[];
}

interface ColumnsContextProps {
  columnsView: string;
  setColumnsView: (view: string) => void;
}

const ColumnsContext = createContext<ColumnsContextProps>({
  columnsView: "grid-cols-2",
  setColumnsView: () => {},
});

export const ColumnsProvider: React.FC<MyComponentProps> = ({
  children,
}: MyComponentProps) => {
  const [columnsView, setColumnsView] = useState<string>("cols-2");

  return (
    <ColumnsContext.Provider value={{ columnsView, setColumnsView }}>
      {children}
    </ColumnsContext.Provider>
  );
};

export { ColumnsContext };
